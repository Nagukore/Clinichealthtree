/**
 * Verifies that every image variant the app can request exists in dist/.
 *   node scripts/check-images.mjs
 * Run after `npm run build`.
 */
import fs from 'node:fs';

const read = (p) => fs.readFileSync(p, 'utf8');
const stems = (src, re) => [...read(src).matchAll(re)].map((m) => m[1]);

const expected = new Set();
const add = (stem, widths) => widths.forEach((w) => expected.add(`${stem}-${w}.webp`));

// Doctor portraits: 400 / 800 (see PORTRAIT in optimize-images.mjs)
const doctorStems = stems('src/components/Doctors.tsx', /image:\s*"(\/img\/[^"]+)"/g);
doctorStems.forEach((s) => add(s, [400, 800]));
add('/img/no-photo', [400, 800]); // fallbackStem

// Hero slides: 800 / 1600
const heroStems = stems('src/components/Hero.tsx', /url:\s*"(\/img\/[^"]+)"/g);
heroStems.forEach((s) => add(s, [800, 1600]));

// Logo
add('/img/logo', [96, 192]);

// Literal .webp paths written out in any component
for (const f of fs.readdirSync('src/components')) {
  if (!f.endsWith('.tsx')) continue;
  for (const m of read(`src/components/${f}`).matchAll(/"(\/img\/[^"]+\.webp)"/g)) {
    expected.add(m[1]);
  }
}

// Static files referenced from index.html. Attribute values may be a srcset
// ("a.webp 800w, b.webp 1600w"), so split on commas and drop the descriptors.
const html = read('index.html');
for (const m of html.matchAll(/(?:href|content|imagesrcset|src)="([^"]+)"/g)) {
  for (const part of m[1].split(',')) {
    const url = part.trim().split(/\s+/)[0];
    if (url.startsWith('/') && /\.(png|jpe?g|webp)$/i.test(url)) expected.add(url);
  }
}

const missing = [...expected].filter((p) => !fs.existsSync(`dist${p}`));
const shipped = fs.existsSync('dist/img') ? fs.readdirSync('dist/img') : [];
const unused = shipped.filter((f) => !expected.has(`/img/${f}`));

console.log(`checked ${expected.size} referenced paths against ${shipped.length} files in dist/img`);
if (missing.length) {
  console.error(`\nMISSING (${missing.length}):\n  ${missing.join('\n  ')}`);
} else {
  console.log('all referenced images present');
}
if (unused.length) console.log(`\nshipped but unreferenced (${unused.length}):\n  ${unused.join('\n  ')}`);
process.exit(missing.length ? 1 : 0);
