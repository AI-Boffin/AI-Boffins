"""Crawl public HTML with curl and a Googlebot user agent; no JavaScript needed."""

import argparse
import json
import subprocess
from collections import deque
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit
import xml.etree.ElementTree as ET

UA = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
PAGES = ['/', '/privacy', '/terms', '/cookies', '/gdpr']


class Page(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.title = []
        self.body = []
        self.main = []
        self.links = []
        self.ids = set()
        self.description = ''
        self.canonical = ''
        self.robots = ''
        self.h1 = []
        self.in_title = False
        self.in_body = False
        self.in_h1 = False
        self.started_main = False
        self.skip = 0

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag in ('script', 'style'):
            self.skip += 1
        if tag == 'title':
            self.in_title = True
        if tag == 'body':
            self.in_body = True
        if tag == 'h1':
            self.in_h1 = True
            self.started_main = True
        if tag == 'footer':
            self.started_main = False
        if 'id' in attrs:
            self.ids.add(attrs['id'])
        if tag == 'a' and attrs.get('href'):
            self.links.append(attrs['href'])
        if tag == 'meta':
            name = attrs.get('name', '').lower()
            if name == 'description':
                self.description = attrs.get('content', '')
            if name == 'robots':
                self.robots = attrs.get('content', '')
        if tag == 'link' and attrs.get('rel') == 'canonical':
            self.canonical = attrs.get('href', '')

    def handle_endtag(self, tag):
        if tag in ('script', 'style'):
            self.skip = max(0, self.skip - 1)
        if tag == 'title':
            self.in_title = False
        if tag == 'h1':
            self.in_h1 = False
        if tag == 'body':
            self.in_body = False

    def handle_data(self, data):
        if self.skip:
            return
        if self.in_title:
            self.title.append(data)
        if self.in_body:
            self.body.append(data)
            if self.started_main:
                self.main.append(data)
        if self.in_h1:
            self.h1.append(data)


def clean(parts):
    return ' '.join(' '.join(parts).split())


def fetch(url, head=False):
    args = ['curl.exe', '-sS', '-L', '--max-time', '30', '-A', UA]
    if head:
        args.append('-I')
    result = subprocess.run(args + ['-w', '\n__SEO__%{http_code}|%{url_effective}|%{num_redirects}', url], capture_output=True, encoding='utf-8', errors='replace')
    content, _, trailer = result.stdout.rpartition('\n__SEO__')
    fields = trailer.strip().split('|')
    if len(fields) != 3:
        return {'status': 0, 'url': url, 'redirects': 0, 'content': '', 'error': result.stderr}
    return {'status': int(fields[0]), 'url': fields[1], 'redirects': int(fields[2]), 'content': content}


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--base', required=True)
    parser.add_argument('--output', required=True)
    parser.add_argument('--external', action='store_true')
    args = parser.parse_args()
    base = args.base.rstrip('/')
    queue = deque(PAGES)
    pages = {}
    documents = {}
    externals = set()
    issues = []
    while queue and len(pages) < 50:
        path = queue.popleft()
        if path in pages:
            continue
        response = fetch(base + path)
        page = Page()
        page.feed(response.pop('content'))
        documents[path] = page
        pages[path] = {**response, 'title': clean(page.title), 'description': page.description, 'canonical': page.canonical, 'robots': page.robots, 'h1': clean(page.h1), 'body_start': clean(page.body)[:180], 'main_start': clean(page.main)[:180], 'body_characters': len(clean(page.body)), 'links': sorted(set(page.links))}
        for href in page.links:
            link = urlsplit(urljoin(base + path, href))
            if link.scheme not in ('http', 'https'):
                continue
            if link.netloc == urlsplit(base).netloc:
                if link.path not in pages:
                    queue.append(link.path or '/')
            else:
                externals.add(link._replace(fragment='').geturl())
    for path, data in pages.items():
        if data['status'] != 200:
            issues.append(f'{path}: HTTP {data["status"]}')
        if not data['title'] or not data['description'] or not data['canonical']:
            issues.append(f'{path}: missing title, description or canonical')
        if 'noindex' in data['robots']:
            issues.append(f'{path}: noindex')
        expected = 'https://www.aiboffins.co.uk' + path
        if data['canonical'].rstrip('/') != expected.rstrip('/'):
            issues.append(f'{path}: canonical {data["canonical"]} should be {expected}')
        for href in data['links']:
            link = urlsplit(urljoin(base + path, href))
            target = link.path or '/'
            if link.netloc == urlsplit(base).netloc and link.fragment and target in documents:
                if unquote(link.fragment) not in documents[target].ids:
                    issues.append(f'{path}: broken fragment {href}')
    for field in ('title', 'description'):
        values = [page[field] for page in pages.values()]
        if len(values) != len(set(values)):
            issues.append(f'Duplicate {field} across pages')
    sitemap = fetch(base + '/sitemap.xml')
    sitemap_urls = [element.text for element in ET.fromstring(sitemap['content']).iter() if element.tag.endswith('}loc')]
    sitemap_checks = [{k: v for k, v in fetch(url, head=True).items() if k != 'content'} for url in sitemap_urls] if args.external else []
    external_checks = [{k: v for k, v in fetch(url, head=True).items() if k != 'content'} for url in sorted(externals)] if args.external else []
    missing = fetch(base + '/seo-check-missing-page')
    robots = fetch(base + '/robots.txt')
    report = {'base': base, 'user_agent': UA, 'pages': pages, 'issues': sorted(set(issues)), 'missing_page_status': missing['status'], 'robots': robots['content'], 'sitemap_urls': sitemap_urls, 'sitemap_checks': sitemap_checks, 'external_checks': external_checks}
    output = Path(args.output)
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(json.dumps(report, indent=2), encoding='utf-8')
    print(json.dumps({'report': str(output), 'pages': len(pages), 'issues': report['issues'], 'missing_page_status': missing['status']}, indent=2))


if __name__ == '__main__':
    main()
