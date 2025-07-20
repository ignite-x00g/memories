// fabmain.js
import { openModal } from './connector.js';
import { openChatbot } from './bot.js';

// Load FABs HTML into #fab-root (if not already loaded)
fetch('fabs.html').then(r => r.text()).then(html => {
  document.getElementById('fab-root').innerHTML = html;

  document.querySelectorAll('[data-modal]').forEach(btn => {
    if (btn.dataset.modal === 'join-modal') {
      btn.onclick = () => window.location.href = 'join.html';
    } else {
      btn.onclick = () => openModal(btn.dataset.modal, true);
    }
  });

  document.querySelectorAll('[data-action]').forEach(btn => {
    if (btn.dataset.action === 'chatbot') {
      btn.onclick = () => openChatbot();
    }
  });

  // Accordion nav open/close logic
  const accordionBtn = document.getElementById('mobile-fab-services');
  const panel = document.getElementById('mobile-panel-services');
  if (accordionBtn) {
    accordionBtn.onclick = () => {
      panel.classList.toggle('active');
      document.body.classList.toggle('mobile-menu-open');
    };
    document.body.addEventListener('click', function(e) {
      if (!e.target.closest('.mobile-accordion-btn') && !e.target.closest('.accordion-panel')) {
        panel.classList.remove('active');
        document.body.classList.remove('mobile-menu-open');
      }
    }, true);
  }

  // Lang/Theme toggles via events
  document.getElementById('mobile-lang-toggle').onclick = () =>
    window.dispatchEvent(new Event('toggle-lang'));
  document.getElementById('mobile-theme-toggle').onclick = () =>
    window.dispatchEvent(new Event('toggle-theme'));
});
