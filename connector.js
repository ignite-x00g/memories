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
export async function openModal(type) {
  const url = type === 'contact' ? 'contact/contact.html' : `${type}.html`;
  const html = await fetchContent(url);

  const wrapper = document.createElement('div');
  wrapper.innerHTML = html.trim();
  const modal = wrapper.querySelector('[id$="-modal"]') || wrapper.firstElementChild;
  if (!modal) return;

  document.body.appendChild(modal);

  // Make draggable using header as handle
  const container = modal.querySelector('.modal-content');
  const header = container?.querySelector('.modal-header');
  if (container) makeModalDraggable(container, header);

  const close = () => {
    modal.remove();
    document.removeEventListener('keydown', onEsc);
  };

  const onEsc = (e) => { if (e.key === 'Escape') close(); };

  modal.addEventListener('click', e => { if (e.target === modal) close(); });
  document.addEventListener('keydown', onEsc);

  const closeIcon = modal.querySelector('[data-close]');
  if (closeIcon) closeIcon.addEventListener('click', close);

  const cancelBtn = modal.querySelector('#cancel-btn');
  if (cancelBtn) cancelBtn.addEventListener('click', close);
}
