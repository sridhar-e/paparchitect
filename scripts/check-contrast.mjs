// Usage: node scripts/check-contrast.mjs http://localhost:4101 [paths...]
// Computes the contrast ratio of every visible text node against its real (composited) background.
// Fails below 4.5:1, or 3:1 for large text (>=24px, or >=18.66px bold). Checks mobile and desktop widths.
import { chromium } from 'playwright';
import { routes } from './routes.mjs';

const base = process.argv[2] || 'http://localhost:4101';
const paths = await routes(base, process.argv.slice(3));
const VIEWPORTS = [{ width: 412, height: 823 }, { width: 1350, height: 940 }];

const browser = await chromium.launch();
let failures = 0;
for (const viewport of VIEWPORTS) {
  const page = await browser.newPage({ viewport, reducedMotion: 'reduce' });
  for (const path of paths) {
    await page.goto(`${base}${path}`, { waitUntil: 'networkidle' });
    // Scroll through so scroll/visibility-triggered content reaches its final state.
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += innerHeight / 2) { scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); }
      scrollTo(0, 0);
    });
    await page.waitForTimeout(400);
    const bad = await page.evaluate(() => {
      const parse = (s) => {
        const m = s.match(/rgba?\(([^)]+)\)/);
        if (!m) return null;
        const p = m[1].split(/[ ,/]+/).filter(Boolean).map(Number);
        return { r: p[0], g: p[1], b: p[2], a: p[3] ?? 1 };
      };
      // Resolve any CSS colour (oklch, lab, color-mix…) to rgba via a canvas.
      const ctx = document.createElement('canvas').getContext('2d', { willReadFrequently: true });
      const toRgba = (css) => {
        const direct = parse(css);
        if (direct) return direct;
        ctx.clearRect(0, 0, 1, 1); ctx.fillStyle = '#000'; ctx.fillStyle = css; ctx.fillRect(0, 0, 1, 1);
        const [r, g, b, a] = ctx.getImageData(0, 0, 1, 1).data;
        return { r, g, b, a: a / 255 };
      };
      const over = (top, bottom) => {
        const a = top.a + bottom.a * (1 - top.a);
        if (!a) return { r: 0, g: 0, b: 0, a: 0 };
        const mix = (k) => (top[k] * top.a + bottom[k] * bottom.a * (1 - top.a)) / a;
        return { r: mix('r'), g: mix('g'), b: mix('b'), a };
      };
      const lum = ({ r, g, b }) => {
        const f = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
        return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
      };
      const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
      // Background: composite background-colors from the element up to the root. Images/gradients can't be
      // resolved this way, so text over them is reported as "unknown" rather than guessed.
      const background = (el) => {
        const layers = [];
        for (let n = el; n; n = n.parentElement) {
          const cs = getComputedStyle(n);
          if (cs.backgroundImage !== 'none') return null;
          const c = toRgba(cs.backgroundColor);
          if (c.a > 0) layers.push(c);
          if (c.a === 1) break;
        }
        return layers.reverse().reduce((acc, c) => over(c, acc), { r: 255, g: 255, b: 255, a: 1 });
      };
      const opacity = (el) => { let o = 1; for (let n = el; n; n = n.parentElement) o *= Number(getComputedStyle(n).opacity); return o; };

      const out = [];
      const seen = new Set();
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      for (let t = walker.nextNode(); t; t = walker.nextNode()) {
        const text = t.textContent.trim();
        const el = t.parentElement;
        if (!text || !el || seen.has(el)) continue;
        seen.add(el);
        const cs = getComputedStyle(el);
        const rect = el.getBoundingClientRect();
        if (cs.visibility === 'hidden' || cs.display === 'none' || !rect.width || !rect.height) continue;
        if (el.closest('[aria-hidden="true"], .sr-only, script, style, noscript')) continue;
        const bg = background(el);
        const size = parseFloat(cs.fontSize);
        const large = size >= 24 || (size >= 18.66 && Number(cs.fontWeight) >= 700);
        const min = large ? 3 : 4.5;
        if (!bg) continue; // over an image/gradient — check by eye/Lighthouse
        const fg = toRgba(cs.color);
        fg.a *= opacity(el);
        const r = ratio(over(fg, bg), bg);
        if (r < min) out.push({ ratio: r.toFixed(2), min, text: text.slice(0, 50), sel: `${el.tagName.toLowerCase()}.${String(el.className).split(' ').slice(0, 3).join('.')}` });
      }
      return out;
    });
    const label = `${path} @${viewport.width}px`;
    if (!bad.length) { console.log(`ok    ${label}`); continue; }
    failures += bad.length;
    console.log(`FAIL  ${label}`);
    for (const b of bad) console.log(`      ${b.ratio}:1 (min ${b.min}) ${b.sel} "${b.text}"`);
  }
  await page.close();
}
await browser.close();
console.log(failures ? `\n${failures} contrast failure(s)` : '\nall text passes contrast');
process.exit(failures ? 1 : 0);
