// Dev-only harness: renders the Specialists section on its own so it can be
// reviewed and screenshotted without scrolling the whole page.
// Append ?open=<doctor id> to open that profile dialog on load.
import { createRoot } from 'react-dom/client';
import Doctors from './components/Doctors';
import './index.css';

createRoot(document.getElementById('root')!).render(<Doctors />);

const openId = new URLSearchParams(location.search).get('open');
if (openId) {
  const selector = `[data-doctor-id="${openId}"] button`;
  const tryOpen = (attempt = 0) => {
    const trigger = document.querySelector<HTMLButtonElement>(selector);
    if (trigger) trigger.click();
    else if (attempt < 60) setTimeout(() => tryOpen(attempt + 1), 50);
  };
  tryOpen();
}
