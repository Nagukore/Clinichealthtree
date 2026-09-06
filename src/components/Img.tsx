import { useState } from 'react';

/**
 * Responsive <img> for the WebP variants produced by scripts/optimize-images.mjs.
 *
 * `stem` is the path without the width suffix or extension, e.g. "/img/dr-sagar",
 * which expands to "/img/dr-sagar-400.webp 400w, /img/dr-sagar-800.webp 800w".
 * The browser then downloads only the size it actually needs.
 */

type Props = {
  stem: string;
  alt: string;
  /** Widths generated for this image. Must match the preset in the optimize script. */
  widths?: number[];
  /** Rendered width hint so the browser can pick a variant before layout. */
  sizes?: string;
  className?: string;
  /** Above-the-fold images should pass "eager"; everything else stays lazy. */
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  /** Shown if the source 404s. */
  fallbackStem?: string;
};

export default function Img({
  stem,
  alt,
  widths = [400, 800],
  sizes = '100vw',
  className = '',
  loading = 'lazy',
  fetchPriority = 'auto',
  fallbackStem,
}: Props) {
  const [failed, setFailed] = useState(false);
  const base = failed && fallbackStem ? fallbackStem : stem;
  const largest = widths[widths.length - 1];

  // react-dom 18 does not know the `fetchPriority` prop and warns on the
  // camelCase spelling, so pass the plain lowercase HTML attribute through.
  const priority =
    fetchPriority === 'auto' ? {} : ({ fetchpriority: fetchPriority } as Record<string, string>);

  return (
    <img
      {...priority}
      src={`${base}-${largest}.webp`}
      srcSet={widths.map((w) => `${base}-${w}.webp ${w}w`).join(', ')}
      sizes={sizes}
      alt={alt}
      loading={loading}
      decoding="async"
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
