const fs = require('node:fs');
const folder = 'artifacts/seo/';
const read = name => JSON.parse(fs.readFileSync(folder + name, 'utf8'));
const liveBefore = read('before-live.json');
const localBefore = read('before-local.json');
const after = read('after-local.json');
const liveAfter = read('after-live.json');
const metrics = report => ({
  lcp: (report.audits['largest-contentful-paint'].numericValue / 1000).toFixed(2),
  cls: report.audits['cumulative-layout-shift'].numericValue.toFixed(4),
  performance: Math.round(report.categories.performance.score * 100),
  seo: Math.round(report.categories.seo.score * 100),
});
const lines = [
  'AI BOFFINS SEO AUDIT - 3 November 2026',
  '',
  'Scope: five public pages. Three read-only subagents checked Crawling, Every Page and Site-wide before source edits.',
  'The legal-page replacements were already present locally before this SEO pass and have been preserved.',
  'After results refer to the local production preview, not a deployment. Live before and live after were both curled.',
  '',
  'FINDINGS AND SOURCE FILES',
  'All URLs below are on https://www.aiboffins.co.uk unless otherwise shown.',
  '1. /, /privacy, /terms, /cookies, /gdpr: non-www canonical disagreed with redirect destination. Fixed app/layout.js; legal routes already had their own canonical paths.',
  '2. /sitemap.xml and /robots.txt: advertised redirecting non-www URLs. Fixed public/sitemap.xml and public/robots.txt. Removed unverifiable lastmod dates.',
  '3. All pages: primary navigation used click-only buttons; footer section navigation failed on legal pages. Fixed components/Header.js, components/Footer.js and navigational CTAs in Hero.js, Solutions.js, Pricing.js, HowItWorks.js and CaseStudies.js with actual anchors.',
  '4. /: heading and substantive sections depended on JavaScript visibility. Fixed Hero.js, Solutions.js, Pricing.js, HowItWorks.js, CaseStudies.js and Trust.js. Kept genuine interactive controls as buttons.',
  '5. All pages: duplicate font-loading paths. Fixed app/globals.css, app/layout.js and tailwind.config.js. Montserrat headings use next/font and optional display; body text uses a system font, removing body-font downloads and late swaps.',
  '6. /: automatic case-study rotation could move content. Removed automatic rotation in components/CaseStudies.js; manual navigation remains.',
  '7. Footer Twitter/X link: subagent followed twitter.com/aiboffins to x.com/aiboffins and received 404; other bot requests were blocked. Removed from components/Footer.js. Facebook link now uses its final www URL.',
  '8. All pages: header logo and mobile menu lacked accessible names. Fixed components/Header.js.',
  '9. All pages: residual render-blocking stylesheet. Enabled the installed Next.js inlineCss option in next.config.js and verified resulting HTML and browser rendering.',
  '',
  'BEFORE / AFTER GOOGLEBOT CURL',
  'User agent: ' + after.user_agent,
];
for (const [path, page] of Object.entries(after.pages)) {
  const previous = localBefore.pages[path];
  const deployed = liveBefore.pages[path];
  lines.push('', path,
    'Live before: ' + deployed.status + ' | ' + deployed.title,
    'Live before body: ' + deployed.body_start,
    'Live before main text: ' + deployed.main_start,
    'Local before: ' + previous.status + ' | ' + previous.title,
    'Local before main text: ' + previous.main_start,
    'Local after: ' + page.status + ' | ' + page.title,
    'Local after description: ' + page.description,
    'Local after canonical: ' + page.canonical,
    'Local after body: ' + page.body_start,
    'Local after main text: ' + page.main_start,
    'Live after: ' + liveAfter.pages[path].status + ' | ' + liveAfter.pages[path].title + ' (not deployed)');
}
lines.push('', 'PERFORMANCE', 'Mobile Lighthouse lab measurements; not field Core Web Vitals.',
  'Homepage live before: ' + JSON.stringify(metrics(read('seo-before-live.lighthouse.json'))),
  'Homepage local before: ' + JSON.stringify(metrics(read('seo-before-local.lighthouse.json'))));
for (const name of ['home', 'privacy', 'terms', 'cookies', 'gdpr']) {
  const report = read('after-' + name + '.lighthouse.json');
  lines.push('Local after ' + name + ': ' + JSON.stringify(metrics(report)));
}
lines.push('', 'CRAWL RESULTS',
  'Local issues: ' + JSON.stringify(after.issues),
  'Missing URL returned: ' + after.missing_page_status,
  'All five sitemap destinations checked: ' + JSON.stringify(after.sitemap_checks),
  'No orphan public pages or broken internal fragments found after navigation fixes.',
  'The bare domain already redirects in a single hop to www; live uses HTTP 307. A permanent host redirect can be set in hosting settings, but no hosting settings were changed.',
  'External check results: ' + JSON.stringify(after.external_checks),
  'LinkedIn returns bot-blocking HTTP 999 and needs a manual logged-in/profile check; that is not proof of a broken URL.',
  '', 'SKIPPED / NOT APPLICABLE',
  'SSR conversion: already prerendered by Next.js, with text present in curl HTML.',
  'Raster-to-WebP conversion and img dimensions: no rendered raster images exist; logos/icons are SVG. SVG logo geometry and accessible link naming were checked.',
  'FAQ schema: none exists and none was added.',
  'Admin/login noindex: no such pages exist. Public pages remain crawlable. The framework supplies a genuine 404 for missing pages.',
  '', 'SEARCH CONSOLE - AFTER DEPLOYMENT',
  '1. Inspect each of the five www URLs. Compare user-declared and Google-selected canonicals; run Test Live URL and inspect rendered text.',
  '2. Submit https://www.aiboffins.co.uk/sitemap.xml and confirm processing succeeds.',
  '3. Check Page Indexing for exclusions, duplicate/canonical decisions and indexed URLs. Request indexing for changed pages if needed.',
  '4. Check Core Web Vitals for real-user LCP/CLS data. Lighthouse is a lab test and cannot confirm field performance; low-traffic sites may have insufficient data.',
  '5. Review any manual actions and security issues. Indexing and ranking cannot be guaranteed by a local SEO audit.',
);
fs.writeFileSync(folder + 'report.txt', lines.join('\n') + '\n');
console.log(folder + 'report.txt');
