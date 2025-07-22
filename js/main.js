import { openServiceModal } from './connector.js';

export function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.add('active');
    }
}

export function closeModal(id) {
    const modal = id ? document.getElementById(id) : document.querySelector('.modal-overlay.active');
    if (modal) {
        modal.classList.remove('active');
    }
}

window.openModal = openModal;

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const mapping = {
        'business-modal': 'ops',
        'contactcenter-modal': 'cc',
        'itsupport-modal': 'it',
        'professionals-modal': 'pro'
    };

    cards.forEach(card => {
        const key = mapping[card.getAttribute('data-modal-target')];
        if (key) {
            card.addEventListener('click', () => openServiceModal(key));
        }
    });
});
