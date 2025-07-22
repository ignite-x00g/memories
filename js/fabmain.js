import { sanitize } from './security.js';

/* ---------- Helper ---------- */
const qs = (sel, ctx = document) => ctx.querySelector(sel);
const qsa = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

document.addEventListener('DOMContentLoaded', async () => {
  /* ---------- Mobile nav + toggles ---------- */
  qs('#menuToggle')?.addEventListener('click', () =>
    qs('#mobileNav')?.classList.toggle('active')
  );
  qs('#mobile-services-toggle')?.addEventListener('click', () =>
    qs('#mobile-services-menu')?.classList.toggle('active')
  );
  qs('#mobile-language-toggle')?.addEventListener('click', () => {
    window.dispatchEvent(new Event('toggle-lang'));
  });
  qs('#mobile-theme-toggle')?.addEventListener('click', () => {
    window.dispatchEvent(new Event('toggle-theme'));
  });

  /* ---------- Join dynamic sections ---------- */
  qsa('#joinModal .form-section').forEach(section => {
    const inputs  = qs('.inputs', section);
    const addBtn  = qs('.add', section);
    const rmBtn   = qs('.remove', section);
    const accBtn  = qs('.accept-btn', section);
    const editBtn = qs('.edit-btn', section);
    if (!addBtn) return; // skip plain sections
    addBtn.onclick = () => {
      const ip = document.createElement('input');
      ip.type = 'text';
      ip.placeholder = `Enter ${qs('h2', section).textContent}`;
      inputs.appendChild(ip);
      ip.focus();
    };
    rmBtn.onclick = () =>
      inputs.lastElementChild && inputs.removeChild(inputs.lastElementChild);
    accBtn.onclick = () => {
      if (!inputs.children.length) return alert('Add at least one entry.');
      inputs.querySelectorAll('input').forEach(i => (i.disabled = true));
      section.classList.add('completed');
      accBtn.style.display = 'none';
      editBtn.style.display = 'inline-block';
    };
    editBtn.onclick = () => {
      inputs.querySelectorAll('input').forEach(i => (i.disabled = false));
      section.classList.remove('completed');
      accBtn.style.display = 'inline-block';
      editBtn.style.display = 'none';
    };
  });

  /* ---------- Simple submit stubs ---------- */
  qs('#joinForm')?.addEventListener('submit', e => {
    e.preventDefault();
    alert('Join form submitted');
    qs('#joinModal')?.classList.remove('active');
  });
  qs('#contactForm')?.addEventListener('submit', e => {
    e.preventDefault();
    alert('Contact form submitted');
    qs('#contactModal')?.classList.remove('active');
  });

  /* ---------- Load FAB container ---------- */
  try {
    const path = location.pathname.includes('/pages/') ? '../fabs.html' : 'fabs.html';
    const res = await fetch(path);
    const html = sanitize(await res.text());
    const wrap = document.createElement('div');
    wrap.innerHTML = html;
    const fab = wrap.querySelector('#fab-container');
    if (fab) {
      const root = qs('#fab-root');
      root && root.appendChild(fab);
    }
  } catch (err) {
    console.error('Failed to load fabs.html', err);
  }

  /* ---------- FABs & Modals ---------- */
  const fabs = qsa('.fab');
  const modals = qsa('.modal-overlay');
  const closeButtons = qsa('.close-modal');

  fabs.forEach(fab => {
    fab.onclick = () => {
      const modalId = fab.dataset.modal;
      qs(`#${modalId}`)?.classList.add('active');
    };
  });

  const closeModal = modal => {
    modal.classList.remove('active');
  };

  closeButtons.forEach(button => {
    button.onclick = () => {
      const modal = button.closest('.modal-overlay');
      modal && closeModal(modal);
    };
  });

  modals.forEach(modal => {
    modal.onclick = e => {
      if (e.target === modal) closeModal(modal);
    };
  });

  document.onkeydown = e => {
    if (e.key === 'Escape') {
      modals.forEach(modal => {
        if (modal.classList.contains('active')) {
          closeModal(modal);
        }
      });
    }
  };
});
