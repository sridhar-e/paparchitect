// Usage: node scripts/lcp-element.mjs http://localhost:4101 / /about /blog
// Mobile-sized viewport with 4x CPU throttling; prints FCP, LCP and the LCP element per path.
import { chromium } from 'playwright';

const base = process.argv[2] || 'http://localhost:4101';
const paths = process.argv.slice(3).length ? process.argv.slice(3) : ['/'];

const browser = await chromium.launch();
for (const path of paths) {
  const context = await browser.newContext({ viewport: { width: 412, height: 823 }, deviceScaleFactor: 1.75, isMobile: true, hasTouch: true });
  const page = await context.newPage();
  const cdp = await context.newCDPSession(page);
  await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });
  await page.addInitScript(() => {
    window.__lcp = [];
    new PerformanceObserver((list) => {
      for (const e of list.getEntries()) {
        const el = e.element;
        window.__lcp.push({
          time: e.startTime, size: e.size, url: e.url || '',
          tag: el ? el.tagName.toLowerCase() : '(removed)',
          cls: el && typeof el.className === 'string' ? el.className.slice(0, 120) : '',
          text: el ? (el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 80) : '',
        });
      }
    }).observe({ type: 'largest-contentful-paint', buffered: true });
  });
  await page.goto(`${base}${path}`, { waitUntil: 'load' });
  await page.waitForTimeout(3000);
  const res = await page.evaluate(() => ({
    fcp: performance.getEntriesByName('first-contentful-paint')[0]?.startTime,
    lcp: window.__lcp.at(-1),
  }));
  console.log(`\n${path}`);
  console.log(`  FCP  ${res.fcp ? Math.round(res.fcp) + ' ms' : 'n/a'}`);
  if (res.lcp) {
    console.log(`  LCP  ${Math.round(res.lcp.time)} ms  (size ${res.lcp.size})`);
    console.log(`  el   <${res.lcp.tag}> class="${res.lcp.cls}"`);
    if (res.lcp.text) console.log(`  text "${res.lcp.text}"`);
    if (res.lcp.url) console.log(`  url  ${res.lcp.url}`);
  } else console.log('  LCP  n/a');
  await context.close();
}
await browser.close();
