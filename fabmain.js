// fabmain.js
import { openModal } from './connector.js';
import { openChatbot } from './bot.js';

// Load FABs HTML into #fab-root (if not already loaded)
fetch('fabs.html').then(r => r.text()).then(html => {
  document.getElementById('fab-root').innerHTML = html;

  // DESKTOP FAB triggers
  const fabJoin = document.getElementById('fab-join');
  if (fabJoin) fabJoin.onclick = () => openModal('join', true);
  const fabContact = document.getElementById('fab-contact');
  if (fabContact) fabContact.onclick = () => openModal('contact', true);
  const fabChat = document.getElementById('fab-chat');
  if (fabChat) fabChat.onclick = () => openChatbot();

  // MOBILE FAB triggers
  const mobileFabJoin = document.getElementById('mobile-fab-join');
  if (mobileFabJoin) mobileFabJoin.onclick = () => openModal('join', true);
  const mobileFabContact = document.getElementById('mobile-fab-contact');
  if (mobileFabContact) mobileFabContact.onclick = () => openModal('contact', true);
  const mobileFabChat = document.getElementById('mobile-fab-chat');
  if (mobileFabChat) mobileFabChat.onclick = () => openChatbot();

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
  const mobileLangToggle = document.getElementById('mobile-lang-toggle');
  if (mobileLangToggle) mobileLangToggle.onclick = () =>
    window.dispatchEvent(new Event('toggle-lang'));
  const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
  if (mobileThemeToggle) mobileThemeToggle.onclick = () =>
    window.dispatchEvent(new Event('toggle-theme'));
});
