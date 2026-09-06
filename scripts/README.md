# Image pipeline

The site ships pre-resized WebP images. Full-resolution originals live in
`image-source/` and are **never deployed** (see `.vercelignore`).

## Adding or replacing a photo

1. Drop the original into `image-source/`.
2. Add a row to the `IMAGES` list in `optimize-images.mjs`:
   `['My Photo.jpg', 'dr-somebody', PORTRAIT]`
   The middle value is the *stem* — the path components reference, minus the
   width suffix and extension.
3. `npm run optimize:images` — writes `public/img/dr-somebody-400.webp` and
   `-800.webp`.
4. Reference it as `/img/dr-somebody` (no width, no extension). The `<Img>`
   component in `src/components/Img.tsx` expands that into a `srcSet` so the
   browser downloads only the size it needs.
5. `npm run build && npm run check:images` to confirm nothing 404s.

## Presets

| Preset     | Widths      | Used for                              |
|------------|-------------|---------------------------------------|
| `PORTRAIT` | 400, 800    | Doctor photos (4:3 card, square modal)|
| `POSTER`   | 800, 1600   | Hero carousel slides                  |
| `LOGO`     | 96, 192     | Navbar and footer logo                |

`optimize-images.mjs` also regenerates `public/favicon.png`,
`public/apple-touch-icon.png` and `public/og-image.jpg` (the 1200x630 card
WhatsApp and LinkedIn show when the site is shared).

## Why

The originals were phone photos straight off a camera — one was 5504x8256 at
22 MB, displayed in a 400 px card. All 82 MB of them were being downloaded by
every visitor. The published set is about 2.3 MB.
