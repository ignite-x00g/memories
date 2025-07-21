import { sanitize } from './security.js';

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
    const modalContainer = document.getElementById('modal-container');
    const cards = document.querySelectorAll('.card');

    const modals = {
        'business-modal': 'components/modals/business-modal.html',
        'contactcenter-modal': 'components/modals/contactcenter-modal.html',
        'itsupport-modal': 'components/modals/itsupport-modal.html',
        'professionals-modal': 'components/modals/professionals-modal.html'
    };

    const loadModal = async (modalId, url) => {
        try {
            const response = await fetch(url);
            const html = sanitize(await response.text());
            const modalElement = document.createElement('div');
            modalElement.innerHTML = html;
            const modal = modalElement.firstElementChild;
            modal.id = modalId;
            modalContainer.appendChild(modal);
            await import('../components/modals/draggable.js');
            return modal;
        } catch (error) {
            console.error(`Failed to load modal: ${modalId}`, error);
            return null;
        }
    };

    cards.forEach(card => {
        const modalId = card.getAttribute('data-modal-target');
        if (modalId && modals[modalId]) {
            loadModal(modalId, modals[modalId]).then(modal => {
                if (modal) {
                    card.addEventListener('click', () => openModal(modalId));
                    const closeButton = modal.querySelector('.close-button');
                    if (closeButton) {
                        closeButton.addEventListener('click', () => closeModal(modalId));
                    }
                }
            });
        }
    });

    modalContainer.addEventListener('click', (e) => {
        if (e.target === modalContainer) {
            const active = modalContainer.querySelector('.modal-overlay.active');
            if (active) closeModal(active.id);
        }
    });
});
