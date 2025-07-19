// connector.js

/**
 * Fetches HTML content from a given URL.
 * @param {string} url - The URL to fetch content from.
 * @returns {Promise<string>} - The HTML content.
 */
async function fetchContent(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } else {
    // The language toggle button displays the active language code.
    // When it shows "ES" the page is currently in Spanish, otherwise English.
    const lang = document.getElementById('lang-toggle').textContent === 'ES' ? 'es' : 'en';
    const data = modalData[type];
    if (!data) return;
    modal.innerHTML = `
      <div class="ops-modal" tabindex="-1" role="dialog" aria-modal="true" id="draggable-modal" style="top:12vh; left:0; right:0; margin:auto; position:fixed;">
        <button class="modal-x" aria-label="CERRAR" id="modal-x">X</button>
        <div class="modal-header" style="cursor:move; user-select:none;">
          <img class="modal-img" src="${data.img}" alt="${data.imgAlt}" />
          <div><div class="modal-title">${translations[lang][`modal-title-${type}`]}</div></div>
        </div>
        <div class="modal-content">${translations[lang][`modal-content-${type}`]}</div>
        <div class="modal-video">${data.video}</div>
        <ul style="margin-bottom:1.2em; margin-left:1.3em;">
          ${translations[lang][`modal-list-${type}`].map(i => `<li>${i}</li>`).join("")}
        </ul>
        <div class="modal-actions">
          <button class="modal-btn cta" id="join-us-btn">Join Us</button>
          <button class="modal-btn cta" id="contact-us-btn">Contact Us</button>
          <a href="professionals.html" class="modal-btn">Learn More</a>
          <button class="modal-btn" id="ask-chattia-btn">Ask Chattia</button>
          <button class="modal-btn" id="cancel-btn">Cancel</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    makeModalDraggable(document.getElementById('draggable-modal'));
    document.getElementById('join-us-btn').onclick = () => openModal('join', true);
    document.getElementById('contact-us-btn').onclick = () => openModal('contact', true);
    document.getElementById('ask-chattia-btn').onclick = () => openChatbot();
    const closeModal = () => modal.remove();
    modal.querySelector('.modal-x').onclick = closeModal;
    modal.onclick = e => (e.target === modal ? closeModal() : null);
    const escListener = (e) => {
        if (e.key === "Escape") {
            closeModal();
            document.removeEventListener('keydown', escListener);
        }
    };
    document.addEventListener('keydown', escListener);
  }
}

  // Trap focus, close events
  const closeModal = () => modal.remove();
  const modalX = modal.querySelector('.modal-x');
  if (modalX) {
    modalX.onclick = closeModal;
  }
  const cancelBtn = modal.querySelector('#cancel-btn');
  if (cancelBtn) {
    cancelBtn.onclick = closeModal;
  }
  modal.onclick = e => (e.target === modal ? closeModal() : null);
  document.addEventListener('keydown', function esc(e) {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  modalOverlay.querySelector('.close-modal').onclick = closeModal;
  modalOverlay.onclick = (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  };
  document.addEventListener('keydown', handleEsc);
}
