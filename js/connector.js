import { makeModalDraggable } from './bot.js';
import { services } from '../app-data.js';

let lang = 'en';

/** Fetch HTML content from a URL. */
async function fetchContent(url) {
  const resp = await fetch(url);
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
  return await resp.text();
}

function getModalContent(key) {
    const service = services[key];
    if (!service) return null;
    return service[lang].modal;
}

export function openServiceModal(key) {
    const data = getModalContent(key);
    if (!data) return;

    const m = document.createElement('div');
    m.className = 'modal-backdrop';
    m.innerHTML = `
        <div class="ops-modal" role="dialog" aria-modal="true">
          <button class="modal-close" aria-label="Close">&times;</button>
          <div class="modal-header">
            <img src="${data.img}" alt="${data.imgAlt}">
            <h2 class="modal-title">${data.title}</h2>
          </div>
          <div class="modal-body">
            <p>${data.content}</p>
            <video width="100%" controls>
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
          <ul class="modal-features">
            ${data.features.map(f => `<li>${f}</li>`).join('')}
          </ul>
          <div class="modal-actions">
            <button class="modal-btn" onclick="openContactModal()">Contact Us</button>
            <button class="modal-btn" onclick="openJoinModal()">Join Us</button>
            <a href="${data.learn}" class="modal-btn">${lang === 'en' ? 'Learn More' : 'Más Info'}</a>
            <button class="modal-btn" onclick="openChatbot()">Ask Chattia</button>
          </div>
        </div>`;
    document.getElementById('modal-root').appendChild(m);
    m.querySelector('.modal-close').onclick = () => m.remove();
    m.onclick = e => { if (e.target === m) m.remove(); };
    const onEsc = (e) => { if (e.key === 'Escape') m.remove(); };
    document.addEventListener('keydown', onEsc);
}

export function openJoinModal() {
    showFormModal('join');
}

export function openContactModal() {
    showFormModal('contact');
}

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
