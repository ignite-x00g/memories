// fabmain.js

// Load FABs HTML into #fab-root (if not already loaded)
fetch('fabs.html').then(r => r.text()).then(html => {
  document.getElementById('fab-root').innerHTML = html;

  // DESKTOP FAB triggers
  document.getElementById('fab-join').onclick = () => openFabModal('join');
  document.getElementById('fab-contact').onclick = () => openFabModal('contact');
  document.getElementById('fab-chat').onclick = () => openFabModal('chat');

  // MOBILE FAB triggers
  document.getElementById('mobile-fab-join').onclick = () => openFabModal('join');
  document.getElementById('mobile-fab-contact').onclick = () => openFabModal('contact');
  document.getElementById('mobile-fab-chat').onclick = () => openFabModal('chat');

  // Accordion nav open/close logic
  const accordionBtn = document.getElementById('mobile-fab-services');
  const panel = document.getElementById('mobile-panel-services');
  accordionBtn.onclick = () => panel.classList.toggle('active');
  document.body.addEventListener('click', function(e) {
    if (!e.target.closest('.mobile-accordion-btn') && !e.target.closest('.accordion-panel')) {
      panel.classList.remove('active');
    }
  }, true);

  // Lang/Theme toggles via events
  document.getElementById('mobile-lang-toggle').onclick = () =>
    window.dispatchEvent(new Event('toggle-lang'));
  document.getElementById('mobile-theme-toggle').onclick = () =>
    window.dispatchEvent(new Event('toggle-theme'));
});

// FAB modal opening (Join/Contact/Chatbot)
export function openFabModal(type) {
  // Remove existing FAB modal if present
  let old = document.getElementById('fab-modal-backdrop');
  if (old) old.remove();

  let content = '';
  if (type === 'join') {
    content = `<iframe src="join.html" frameborder="0" class="fab-modal-iframe"></iframe>`;
  } else if (type === 'contact') {
    content = `<iframe src="contact.html" frameborder="0" class="fab-modal-iframe"></iframe>`;
  } else if (type === 'chat') {
    content = `<iframe src="chat.html" frameborder="0" class="fab-modal-iframe"></iframe>`;
  }

  const modal = document.createElement('div');
  modal.className = 'modal-backdrop';
  modal.id = 'fab-modal-backdrop';
  modal.innerHTML = `
    <div class="ops-modal" style="max-width:640px; width:96vw; height:560px;">
      <button class="modal-x" aria-label="CERRAR" id="fab-modal-x">X</button>
      ${content}
    </div>
  `;
  document.body.appendChild(modal);

  // Modal close logic
  const closeModal = () => modal.remove();
  modal.querySelector('.modal-x').onclick = closeModal;
  modal.onclick = e => (e.target === modal ? closeModal() : null);
  document.addEventListener('keydown', function esc(e) {
    if (e.key === "Escape") {
      closeModal();
      document.removeEventListener('keydown', esc);
    }
  });
}
