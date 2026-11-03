const fs = require('node:fs');
const { createRequire } = require('node:module');
const puppeteer = createRequire(process.argv[2])('puppeteer-core');
const base = process.argv[3] || 'http://localhost:3011';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true,
    args: ['--no-sandbox'],
  });
  const results = [];
  try {
    for (const javascript of [false, true]) {
      const page = await browser.newPage();
      await page.setJavaScriptEnabled(javascript);
      await page.setViewport({ width: 390, height: 844 });
      for (const path of ['/', '/privacy', '/terms', '/cookies', '/gdpr']) {
        const response = await page.goto(base + path, { waitUntil: 'networkidle0' });
        const state = await page.evaluate(() => {
          const heading = document.querySelector('h1');
          let visible = true;
          for (let node = heading; node; node = node.parentElement) {
            const style = getComputedStyle(node);
            if (style.display === 'none' || style.visibility === 'hidden' || Number(style.opacity) === 0) visible = false;
          }
          return {
            heading: heading?.textContent.trim(),
            visible,
            overflow: document.documentElement.scrollWidth > innerWidth,
            canonical: document.querySelector('link[rel="canonical"]')?.href,
            homepageAnchor: Boolean(document.querySelector('a[href="/"]')),
            externalGoogleFont: [...document.querySelectorAll('link')].some(link => link.href.includes('fonts.googleapis.com')),
          };
        });
        results.push({ path, javascript, status: response.status(), ...state });
        if (javascript) await page.screenshot({ path: `artifacts/seo/mobile-${path === '/' ? 'home' : path.slice(1)}.png`, fullPage: true });
      }
      await page.goto(base + '/privacy', { waitUntil: 'networkidle0' });
      await page.click('footer a[href="/#solutions"]');
      await page.waitForFunction(() => location.pathname === '/' && location.hash === '#solutions');
      results.push({ javascript, footerNavigationWorks: true });
      if (javascript) {
        await page.goto(base, { waitUntil: 'networkidle0' });
        await page.click('button[aria-label="Open navigation"]');
        results.push({ mobileMenuWorks: await page.$eval('button[aria-label="Close navigation"]', el => el.getAttribute('aria-expanded') === 'true') });
        await page.setViewport({ width: 1280, height: 900 });
        await page.screenshot({ path: 'artifacts/seo/desktop-home.png', fullPage: false });
      }
      await page.close();
    }
    fs.writeFileSync('artifacts/seo/browser-check.json', JSON.stringify(results, null, 2));
    console.log(JSON.stringify(results, null, 2));
    if (results.some(result => result.visible === false || result.overflow || result.status >= 400 || result.homepageAnchor === false || result.externalGoogleFont)) process.exitCode = 1;
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
