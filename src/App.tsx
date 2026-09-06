import { Suspense, lazy, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

/**
 * Everything below the hero is code-split. The first paint only needs the
 * navbar and hero; the remaining sections stream in as separate chunks.
 *
 * Each placeholder keeps the section's id and reserves height, so in-page
 * anchors keep working and nothing shifts when a chunk lands.
 */
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Doctors = lazy(() => import('./components/Doctors'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function SectionPlaceholder({ id, className = 'min-h-[70vh]' }: { id?: string; className?: string }) {
  return <div id={id} aria-hidden="true" className={className} />;
}

function App() {
  /* Warm the below-the-fold chunks once the browser is idle, so they are
     already cached by the time the visitor scrolls down. */
  useEffect(() => {
    const prefetch = () => {
      import('./components/About');
      import('./components/Services');
      import('./components/Doctors');
      import('./components/Contact');
      import('./components/Footer');
    };

    const idle = window.requestIdleCallback;
    if (typeof idle === 'function') {
      const handle = idle(prefetch, { timeout: 2500 });
      return () => window.cancelIdleCallback?.(handle);
    }
    const timer = setTimeout(prefetch, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar - Sticky */}
      <Navbar />

      {/* Above the fold */}
      <Hero />

      {/* Below the fold - loaded on demand */}
      <Suspense fallback={<SectionPlaceholder id="about" />}>
        <About />
      </Suspense>

      <Suspense fallback={<SectionPlaceholder id="services" />}>
        <Services />
      </Suspense>

      <Suspense fallback={<SectionPlaceholder id="doctors" />}>
        <Doctors />
      </Suspense>

      <Suspense fallback={<SectionPlaceholder id="contact" />}>
        <Contact />
      </Suspense>

      <Suspense fallback={<SectionPlaceholder className="min-h-[40vh]" />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
