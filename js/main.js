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
            const html = await response.text();
            const modalElement = document.createElement('div');
            modalElement.innerHTML = html;
            const modal = modalElement.firstElementChild;
            modal.id = modalId;
            modalContainer.appendChild(modal);
            return modal;
        } catch (error) {
            console.error(`Failed to load modal: ${modalId}`, error);
            return null;
        }
    };

    const openModal = (modal) => {
        if (modal) {
            modal.classList.add('active');
        }
    };

    const closeModal = (modal) => {
        if (modal) {
            modal.classList.remove('active');
        }
    };

    cards.forEach(card => {
        const modalId = card.getAttribute('data-modal-target');
        if (modalId && modals[modalId]) {
            loadModal(modalId, modals[modalId]).then(modal => {
                if (modal) {
                    card.addEventListener('click', () => openModal(modal));
                    const closeButton = modal.querySelector('.close-button');
                    if (closeButton) {
                        closeButton.addEventListener('click', () => closeModal(modal));
                    }
                }
            });
        }
    });

    modalContainer.addEventListener('click', (e) => {
        if (e.target === modalContainer) {
            const activeModal = modalContainer.querySelector('.modal.active');
            closeModal(activeModal);
        }
    });
});
