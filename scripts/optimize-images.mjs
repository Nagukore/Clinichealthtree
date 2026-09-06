/**
 * Generates web-ready responsive WebP images.
 *
 *   node scripts/optimize-images.mjs
 *
 * Reads the full-resolution originals from image-source/ (never deployed) and
 * writes slugged, resized WebP variants into public/img/.
 *
 * Components reference a *stem* (e.g. "/img/dr-sujith") and the <Img> helper in
 * src/components/Img.tsx expands it into a srcSet across the widths below.
 */
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const SRC_DIR = 'image-source';
const OUT_DIR = 'public/img';

/* Presets --------------------------------------------------------------- */
// Portraits sit in a 4:3 card (~420px) and a square modal thumb (~256px).
const PORTRAIT = { widths: [400, 800], quality: 72 };
// Hero slides are promo posters with text, shown with object-contain.
const POSTER = { widths: [800, 1600], quality: 80 };
// The logo renders at ~40-48px in the navbar and footer.
const LOGO = { widths: [96, 192], quality: 85 };

/** Originals to publish, mapped to their output stem and preset. */
const IMAGES = [
  // Brand
  ['logo.png', 'logo', LOGO],

  // Hero carousel
  ['Healthcheck.png', 'health-check', POSTER],
  ['ECG,ECHO.png', 'ecg-echo', POSTER],
  ['SleepApnea.png', 'sleep-apnea', POSTER],
  ['Fever.jpg', 'fever-panel', POSTER],
  ['Services.jpg', 'services', POSTER],
  ['Pharmacy.jpg', 'pharmacy', POSTER],
  ['Ultrasound.png', 'ultrasound', POSTER],
  ['Clinic3.png', 'clinic', POSTER],
  ['Clinic1.png', 'clinic-interior', POSTER],

  // Doctor portraits
  ['Sujith.jpg', 'dr-sujith-ms', PORTRAIT],
  ['Dr. Karthik S M.png', 'dr-karthik-sm', PORTRAIT],
  ['Sagar.JPG', 'dr-sagar', PORTRAIT],
  ['Dr. Anila.png', 'dr-anila', PORTRAIT],
  ['Dr. Babureddy.jpg', 'dr-babu-reddy', PORTRAIT],
  ['Dr. Gundu Rao.jpg', 'dr-gundu-rao', PORTRAIT],
  ['Dr. Rajendra reddy.jpg', 'dr-rajendra-reddy', PORTRAIT],
  ['Dr. Sujith J.jpg', 'dr-sujith-j', PORTRAIT],
  ['Dr. Sachin.jpg', 'dr-sachin', PORTRAIT],
  ['Dr. Shivkumar.jpeg', 'dr-shivkumar', PORTRAIT],
  ['Dr. Suma.jpg', 'dr-suma', PORTRAIT],
  ['Dr. Priyadarshini.jpg', 'dr-priyadarshini', PORTRAIT],
  ['Dr. Prakruthi.jpeg', 'dr-prakruthi', PORTRAIT],
  ['Dr. DeviPriya.jpeg', 'dr-devipriya', PORTRAIT],
  ['Dr. Mahesh Meda.jpeg', 'dr-mahesh-meda', PORTRAIT],
  ['Dr. lohith.jpeg', 'dr-lohith', PORTRAIT],
  ['Dr. pramod.png', 'dr-pramod', PORTRAIT],
  ['Ashwini.jpg', 'ashwini', PORTRAIT],
  ['Janani.jpeg', 'janani', PORTRAIT],
  ['Nikhil.jpeg', 'nikhil', PORTRAIT],
  ['NoPhoto.jpeg', 'no-photo', PORTRAIT],
];

/* ----------------------------------------------------------------------- */
fs.mkdirSync(OUT_DIR, { recursive: true });

let sourceBytes = 0;
let outputBytes = 0;
const missing = [];

for (const [file, stem, preset] of IMAGES) {
  const from = path.join(SRC_DIR, file);
  if (!fs.existsSync(from)) {
    missing.push(file);
    continue;
  }
  sourceBytes += fs.statSync(from).size;

  for (const width of preset.widths) {
    const to = path.join(OUT_DIR, `${stem}-${width}.webp`);
    await sharp(from)
      .rotate() // honour EXIF orientation before it is stripped
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: preset.quality, effort: 6 })
      .toFile(to);
    outputBytes += fs.statSync(to).size;
  }
  console.log(`  ${stem.padEnd(22)} ${file}`);
}

/* Icons and social-share card ------------------------------------------- */
// Favicons stay PNG for the widest client support (WebP favicons are patchy).
await sharp(path.join(SRC_DIR, 'logo.png'))
  .resize(96, 96, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
  .png({ compressionLevel: 9 })
  .toFile('public/favicon.png');

await sharp(path.join(SRC_DIR, 'logo.png'))
  .resize(180, 180, { fit: 'contain', background: { r: 255, g: 255, b: 255 } })
  .flatten({ background: '#ffffff' })
  .png({ compressionLevel: 9 })
  .toFile('public/apple-touch-icon.png');

// og-image.jpg is referenced by the OpenGraph/Twitter tags in index.html.
// 1200x630 is the size WhatsApp, LinkedIn and Facebook expect.
await sharp(path.join(SRC_DIR, 'Clinic1.png'))
  .resize(1200, 630, { fit: 'cover', position: 'attention' })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile('public/og-image.jpg');

console.log('  favicon.png, apple-touch-icon.png, og-image.jpg');

const mb = (b) => `${(b / 1024 / 1024).toFixed(1)} MB`;
console.log(`\n${IMAGES.length - missing.length} images -> ${OUT_DIR}`);
console.log(`originals ${mb(sourceBytes)}  ->  published ${mb(outputBytes)}`);
if (missing.length) console.warn(`\nMissing from ${SRC_DIR}/:\n  ${missing.join('\n  ')}`);
