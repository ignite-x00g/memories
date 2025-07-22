import { makeModalDraggable } from './bot.js';
import { services } from '../app-data.js';
import { sanitizeForms } from './security.js';
let lang = 'en';

export function openJoinModal() {
    showFormModal('join');
}
window.openJoinModal = openJoinModal;

export function openContactModal() {
    showFormModal('contact');
}
window.openContactModal = openContactModal;

function showFormModal(type) {
    const titles = { join: { en: 'Join Us', es: 'Únete' }, contact: { en: 'Contact Us', es: 'Contáctenos' } };
    const fields = type === 'join'
        ? `<label>${lang === 'en' ? 'Name' : 'Nombre'}<input required></label>
           <label>${lang === 'en' ? 'Email' : 'Correo'}<input type="email" required></label>`
        : `<label>${lang === 'en' ? 'Name' : 'Nombre'}<input required></label>
           <label>${lang === 'en' ? 'Email' : 'Correo'}<input type="email" required></label>`;
    const m = document.createElement('div');
    m.className = 'modal-backdrop';
    m.innerHTML = `
        <div class="modal-content" role="dialog" aria-modal="true">
          <button class="modal-close" aria-label="Close">&times;</button>
          <h2 class="modal-title">${titles[type][lang]}</h2>
          <form>
            ${fields}
            <div class="modal-actions">
              <button type="button" class="modal-btn modal-cancel">Cancel</button>
              <button type="submit" class="modal-btn">${lang === 'en' ? 'Submit' : 'Enviar'}</button>
            </div>
          </form>
        </div>`;
    const root = document.getElementById('modal-container') ||
                 document.getElementById('modal-root') ||
                 document.body;
    root.appendChild(m);
    sanitizeForms(m.querySelector('form'));
    const fromService = window.location.pathname.includes('/pages/');
    const closeForm = () => {
        m.remove();
        if (fromService) window.location.href = '../index.html';
    };
    m.querySelector('.modal-close').onclick = closeForm;
    m.querySelector('.modal-cancel').onclick = closeForm;
    m.onclick = e => { if (e.target === m) closeForm(); };
}

window.addEventListener('toggle-lang', () => {
    lang = document.documentElement.lang;
});

export function openServiceModal(key) {
    const root = document.getElementById('modal-container') ||
                 document.getElementById('modal-root') || document.body;
    const data = services[key];
    if (!data) return;
    const modalData = data[lang] || data['en'];
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay active';
    overlay.innerHTML = `
        <div class="ops-modal" role="dialog" aria-modal="true">
          <button class="close-button" aria-label="Close">&times;</button>
          <div class="modal-header">
            <img src="${modalData.modal.img}" alt="${modalData.modal.imgAlt}">
            <h3 class="modal-title">${modalData.modal.title}</h3>
          </div>
          <div class="modal-body">
            <p>${modalData.modal.content}</p>
            <ul class="modal-features">
              ${modalData.modal.features.map(f=>`<li>${f}</li>`).join('')}
            </ul>
          </div>
          <div class="modal-actions">
            <a href="pages/contact.html" class="modal-btn cta">${lang === 'en' ? 'Contact Us' : 'Contáctenos'}</a>
            <a href="pages/join.html" class="modal-btn primary">${lang === 'en' ? 'Join Us' : 'Únete'}</a>
            <a href="pages/${modalData.modal.learn}" class="modal-btn">${lang === 'en' ? 'Learn More' : 'Aprender más'}</a>
            <button class="modal-btn" onclick="openChatbot()">${lang === 'en' ? 'Ask Chattia' : 'Preguntar a Chattia'}</button>
          </div>
        </div>`;
    root.appendChild(overlay);
    makeModalDraggable(overlay.querySelector('.ops-modal'), overlay.querySelector('.modal-header'));
    const close = () => overlay.remove();
    overlay.querySelector('.close-button').onclick = close;
    overlay.onclick = e => { if (e.target === overlay) close(); };
}
