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
    return await response.text();
  } catch (error) {
    console.error(`Could not fetch content from ${url}:`, error);
    return '<p>Error loading content. Please try again later.</p>';
  }
}

/**
 * Creates and displays a modal with the given content.
 * @param {string} modalName - The name of the modal to open.
 */
export async function openModal(modalName) {
  const modalContent = await fetchContent(`${modalName}.html`);

  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'modal-overlay';
  modalOverlay.innerHTML = `
    <div class="modal-content">
      <button class="close-modal" aria-label="Close">&times;</button>
      ${modalContent}
    </div>
  `;

  document.body.appendChild(modalOverlay);

  const closeModal = () => {
    modalOverlay.remove();
    document.removeEventListener('keydown', handleEsc);
  };

  const handleEsc = (e) => {
    if (e.key === 'Escape') {
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
