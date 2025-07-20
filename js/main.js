import { services } from '../app-data.js';
import { openServiceModal, openJoinModal, openContactModal } from './connector.js';
import { openChatbot } from './bot.js';

let lang = 'en', theme = 'light';

// Card click → service modal
document.querySelectorAll('.card').forEach(card => {
    card.onclick = () => {
        const modalKey = card.getAttribute('data-modal');
        if (modalKey) {
            openServiceModal(modalKey);
        }
    };
});

// FAB handlers
document.getElementById('fab-join').onclick = openJoinModal;
document.getElementById('fab-contact').onclick = openContactModal;
document.getElementById('fab-chat').onclick = openChatbot;
document.getElementById('mobile-fab-join').onclick = openJoinModal;
document.getElementById('mobile-fab-contact').onclick = openContactModal;
document.getElementById('mobile-fab-chat').onclick = openChatbot;

// Services accordion (mobile)
document.getElementById('mobile-fab-services').onclick = () => {
    document.getElementById('mobile-panel-services').classList.toggle('active');
};

// Lang & Theme
function setLang(l) {
    lang = l;
    window.dispatchEvent(new CustomEvent('lang-changed', { detail: { lang: l } }));
}
function setTheme(t) {
    theme = t;
    document.body.classList.toggle('dark', t === 'dark');
}

document.getElementById('lang-toggle').onclick = () => {
    setLang(lang === 'en' ? 'es' : 'en');
    document.getElementById('lang-toggle').textContent = lang === 'en' ? 'EN' : 'ES';
    document.getElementById('mobile-lang-toggle').textContent = lang === 'en' ? 'EN' : 'ES';
};
document.getElementById('theme-toggle').onclick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.getElementById('theme-toggle').textContent = theme === 'light' ? 'Dark' : 'Light';
    document.getElementById('mobile-theme-toggle').textContent = theme === 'light' ? 'Dark' : 'Light';
};
document.getElementById('mobile-lang-toggle').onclick = () => document.getElementById('lang-toggle').click();
document.getElementById('mobile-theme-toggle').onclick = () => document.getElementById('theme-toggle').click();
