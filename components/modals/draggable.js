// Initialize draggable behavior for any .ops-modal elements
export function initDraggable(container = document) {
  const modals = container.querySelectorAll('.ops-modal');
  modals.forEach(modal => {
    if (modal.dataset.draggableInitialized) return;
    const header = modal.querySelector('.modal-header');
    if (!header) return;

    let isDragging = false;
    let offsetX, offsetY;

    header.addEventListener('mousedown', (e) => {
      isDragging = true;
      offsetX = e.clientX - modal.offsetLeft;
      offsetY = e.clientY - modal.offsetTop;
      modal.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      modal.style.left = `${e.clientX - offsetX}px`;
      modal.style.top = `${e.clientY - offsetY}px`;
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
      modal.style.cursor = 'grab';
    });

    modal.dataset.draggableInitialized = 'true';
  });
}

// Automatically initialize any modals already on the page
initDraggable();
