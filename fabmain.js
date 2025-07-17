// fabmain.js
import { openModal } from './connector.js';

// Load FABs HTML into #fab-root (if not already loaded)
fetch('fabs.html').then(r => r.text()).then(html => {
  document.getElementById('fab-root').innerHTML = html;

  // DESKTOP FAB triggers
  document.getElementById('fab-join').onclick = () => openModal('join', true);
  document.getElementById('fab-contact').onclick = () => openModal('contact', true);
  document.getElementById('fab-chat').onclick = () => openModal('chat', true);

  // MOBILE FAB triggers
  document.getElementById('mobile-fab-join').onclick = () => openModal('join', true);
  document.getElementById('mobile-fab-contact').onclick = () => openModal('contact', true);
  document.getElementById('mobile-fab-chat').onclick = () => openModal('chat', true);

  // Accordion nav open/close logic
  const accordionBtn = document.getElementById('mobile-fab-services');
  const panel = document.getElementById('mobile-panel-services');
  accordionBtn.onclick = () => panel.classList.toggle('active');
  document.body.addEventListener('click', function(e) {
    if (!e.target.closest('.mobile-accordion-btn') && !e.target.closest('.accordion-panel')) {
      panel.classList.remove('active');
    }
  }, true);

  // Lang/Theme toggles via events
  document.getElementById('mobile-lang-toggle').onclick = () =>
    window.dispatchEvent(new Event('toggle-lang'));
  document.getElementById('mobile-theme-toggle').onclick = () =>
    window.dispatchEvent(new Event('toggle-theme'));
});
