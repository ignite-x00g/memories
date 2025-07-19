// connector.js
import { makeModalDraggable } from './bot.js';

/** Fetch HTML content from a URL. */
async function fetchContent(url) {
  const resp = await fetch(url);
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
  return await resp.text();
}

/**
 * Load and display a modal.
 * Currently supports the "contact" modal.
 * @param {string} type - modal identifier
 */
export async function openModal(type, overlayOnly = false) {
  const url = type === 'contact' ? 'contact.html' : `${type}.html`;
  const html = await fetchContent(url);

  const wrapper = document.createElement('div');
  wrapper.innerHTML = html.trim();

  let overlay;
  if (overlayOnly) {
    overlay = wrapper.querySelector('[id$="-modal"]') || wrapper.firstElementChild;
  } else {
    overlay = document.createElement('div');
    overlay.classList.add('modal-overlay');
    const content = wrapper.querySelector('[id$="-modal"]') || wrapper.firstElementChild;
    if (content) overlay.appendChild(content);
  }
  if (!overlay) return;
  document.body.appendChild(overlay);

  // Make draggable using header as handle
  const container = overlay.querySelector('.modal-content');
  const header = container?.querySelector('.modal-header');
  if (container) makeModalDraggable(container, header);

  const close = () => {
    overlay.remove();
    document.removeEventListener('keydown', onEsc);
  };

  const onEsc = (e) => { if (e.key === 'Escape') close(); };

  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', onEsc);

  const closeIcon = overlay.querySelector('[data-close]');
  if (closeIcon) closeIcon.addEventListener('click', close);

  const cancelBtn = overlay.querySelector('#cancel-btn');
  if (cancelBtn) cancelBtn.addEventListener('click', close);
}
