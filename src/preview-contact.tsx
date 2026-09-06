// Dev-only harness: renders the Contact section on its own for review.
// Append ?test=1 to drive the enquiry form and report the result.
import { createRoot } from 'react-dom/client';
import Contact from './components/Contact';
import './index.css';

createRoot(document.getElementById('root')!).render(<Contact />);

if (new URLSearchParams(location.search).get('test')) {
  const log: string[] = [];
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  const setNative = (el: HTMLElement, value: string) => {
    const proto =
      el instanceof HTMLTextAreaElement
        ? HTMLTextAreaElement.prototype
        : el instanceof HTMLSelectElement
          ? HTMLSelectElement.prototype
          : HTMLInputElement.prototype;
    Object.getOwnPropertyDescriptor(proto, 'value')!.set!.call(el, value);
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
  };

  const $ = (sel: string) => document.querySelector<HTMLElement>(sel)!;
  // Read errors by role rather than by Tailwind class, so the probe does not
  // depend on styling.
  const errorTexts = () =>
    [...document.querySelectorAll('form [data-error]')].map((n) => n.textContent!.trim());
  const invalidFields = () =>
    [...document.querySelectorAll('form [aria-invalid="true"]')].map((n) => n.id);

  (async () => {
    await sleep(1200);
    let captured = '';
    window.open = ((url: string) => {
      captured = url;
      return null;
    }) as typeof window.open;

    const submit = document.querySelector<HTMLButtonElement>('form button[type="submit"]')!;

    submit.click();
    await sleep(200);
    log.push(`1_EMPTY_SUBMIT invalid=[${invalidFields().join(',')}] errors=[${errorTexts().join(' | ')}] opened=${captured ? 'YES(BAD)' : 'no(good)'}`);

    setNative($('#contact-name'), 'Ravi Kumar');
    setNative($('#contact-phone'), '12345');
    setNative($('#contact-message'), 'Need a cardiology appointment on Saturday morning.');
    await sleep(120);
    submit.click();
    await sleep(200);
    log.push(`2_SHORT_PHONE invalid=[${invalidFields().join(',')}] errors=[${errorTexts().join(' | ')}] opened=${captured ? 'YES(BAD)' : 'no(good)'}`);

    setNative($('#contact-phone'), '98765 43210');
    setNative($('#contact-email'), 'not-an-email');
    await sleep(120);
    submit.click();
    await sleep(200);
    log.push(`3_BAD_EMAIL invalid=[${invalidFields().join(',')}] errors=[${errorTexts().join(' | ')}] opened=${captured ? 'YES(BAD)' : 'no(good)'}`);

    setNative($('#contact-email'), 'ravi@example.com');
    setNative($('#contact-subject'), 'Diagnostics / Lab');
    await sleep(120);
    submit.click();
    await sleep(250);
    log.push(`4_VALID opened=${captured ? 'yes(good)' : 'NO(BAD)'} success=${document.body.textContent!.includes('Almost there') ? 'shown' : 'MISSING'}`);
    log.push(`4_DECODED=${captured ? decodeURIComponent(captured.split('text=')[1] ?? '') : ''}`);

    const pre = document.createElement('pre');
    pre.id = 'test-out';
    pre.textContent = log.join('\n');
    document.body.prepend(pre);
  })();
}
