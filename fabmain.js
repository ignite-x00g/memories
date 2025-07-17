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
  document.getElementById('mobile-lang-toggle').onclick = () => {
    const btn = document.getElementById('lang-toggle');
    btn.textContent = btn.textContent === 'ES' ? 'EN' : 'ES';
    document.getElementById('mobile-lang-toggle').textContent = btn.textContent;
  }
  document.getElementById('mobile-theme-toggle').onclick = () => {
    document.body.classList.toggle('dark');
    const t = document.getElementById('theme-toggle');
    t.textContent = document.body.classList.contains('dark') ? 'Light' : 'Dark';
    document.getElementById('mobile-theme-toggle').textContent = t.textContent;
  }
});
