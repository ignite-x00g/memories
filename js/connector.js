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
              <button type="button" class="modal-btn" onclick="closeForm()">Cancel</button>
              <button type="submit" class="modal-btn">${lang === 'en' ? 'Submit' : 'Enviar'}</button>
            </div>
          </form>
        </div>`;
    document.getElementById('modal-root').appendChild(m);
    sanitizeForms(m.querySelector('form'));
    const fromService = window.location.pathname.includes('/pages/');
    const closeForm = () => {
        m.remove();
        if (fromService) window.location.href = '../index.html';
    };
    m.querySelector('.modal-close').onclick = closeForm;
    m.onclick = e => { if (e.target === m) closeForm(); };
}

window.addEventListener('toggle-lang', () => {
    lang = document.documentElement.lang;
});
