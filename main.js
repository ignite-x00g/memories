// main.js

import { openModal } from './connector.js';

document.addEventListener('DOMContentLoaded', function() {
  // Card triggers
  document.getElementById('card-business').onclick = () =>
    openModal('business');
  document.getElementById('card-contactcenter').onclick = () =>
    openModal('contactcenter');
  document.getElementById('card-itsupport').onclick = () =>
    openModal('itsupport');
  document.getElementById('card-professionals').onclick = () =>
    openModal('professionals');
  // Language and Theme toggles
  document.getElementById('lang-toggle').onclick = () =>
    window.dispatchEvent(new Event('toggle-lang'));
  document.getElementById('theme-toggle').onclick = () =>
    window.dispatchEvent(new Event('toggle-theme'));
});
// Modal content for each card
const serviceModals = {
  business: {
    title: "SOBRE OPERACIONES EMPRESARIALES",
    img: "img/business.jpg",
    imgAlt: "Operaciones Empresariales",
    content: "Contenido detallado sobre nuestros servicios de Operaciones Empresariales. Ayudamos a optimizar sus procesos, mejorar la eficiencia e impulsar el crecimiento mediante el apoyo operativo estratégico. Las áreas clave incluyen la optimización de procesos, la gestión de la cadena de suministro y el aseguramiento de la calidad.",
    video: "Video placeholder",
    list: [
      "Digitalización y automatización del flujo de trabajo",
      "Estrategias de eficiencia logística e inventario",
      "Marcos de riesgo y cumplimiento (alineados a NIST, ISO, CISA)",
      "Cuadros de métricas de rendimiento y análisis",
      "Capacitación remota y operaciones Lean"
    ]
  },
  contactcenter: {
    title: "SOBRE EL CENTRO DE CONTACTO",
    img: "img/contactcenter.jpg",
    imgAlt: "Centro de Contacto",
    content: "Explore nuestras soluciones integrales de Centro de Contacto diseñadas para mejorar la satisfacción y el compromiso del cliente en todos los puntos de contacto. Ofrecemos servicios de llamadas entrantes y salientes, soporte multicanal (correo electrónico, chat, redes sociales) y análisis avanzados.",
    video: "Video placeholder",
    list: [
      "Gestión de llamadas entrantes y salientes 24/7",
      "Soporte por chat y correo electrónico en varios idiomas",
      "Integración con plataformas CRM (por ejemplo, HubSpot, Salesforce)",
      "Interacción en redes sociales y seguimiento de sentimiento",
      "Análisis de experiencia del cliente y monitoreo de calidad"
    ]
  },
  itsupport: {
    title: "SOBRE SOPORTE IT",
    img: "img/itsupport.jpg",
    imgAlt: "Soporte IT",
    content: "Nuestros servicios de Soporte de TI brindan asistencia confiable y oportuna para mantener sus sistemas funcionando sin problemas y de forma segura. Los servicios incluyen soporte de mesa de ayuda, monitoreo de red, servicios de ciberseguridad y gestión de infraestructura en la nube.",
    video: "Video placeholder",
    list: [
      "Soporte técnico 24/7 y solución remota de problemas",
      "Monitoreo en tiempo real de red y sistemas",
      "Auditorías de ciberseguridad, parches y detección de amenazas",
      "Configuración y mantenimiento de infraestructura en la nube",
      "Cumplimiento con NIST, CISA y políticas OPS Core CyberSec"
    ]
  },
  professionals: {
    title: "SOBRE PROFESIONALES",
    img: "img/professionals.jpg",
    imgAlt: "Profesionales",
    content: "Acceda a nuestra red de profesionales altamente cualificados y experimentados para satisfacer sus necesidades específicas de proyectos o de personal a largo plazo. Proporcionamos expertos en diversos campos, incluyendo TI, gestión de proyectos, finanzas y recursos humanos, asegurando que obtenga el talento adecuado para su negocio.",
    video: "Video placeholder",
    list: [
      "Profesionales IT remotos (SysAdmins, DevOps, Analistas)",
      "Gerentes de proyecto y consultores ágiles",
      "Profesionales de finanzas y contabilidad",
      "Expertos en recursos humanos y reclutamiento",
      "Talento validado por OPS con NDA, capacitación en cumplimiento y capacitación específica para el rol",
      "Preguntar AI"
    ]
  }
};

function showServiceModal(key) {
  // Remove old
  let old = document.getElementById('ops-modal-backdrop');
  if (old) old.remove();

  const data = serviceModals[key];
  if (!data) return;
  const modal = document.createElement('div');
  modal.className = 'modal-backdrop';
  modal.id = 'ops-modal-backdrop';
  modal.innerHTML = `
    <div class="ops-modal" tabindex="-1" role="dialog" aria-modal="true" id="draggable-modal" style="top:12vh; left:0; right:0; margin:auto; position:fixed;">
      <button class="modal-x" aria-label="CERRAR" id="modal-x">X</button>
      <div class="modal-header" style="cursor:move; user-select:none;">
        <img class="modal-img" src="${data.img}" alt="${data.imgAlt}" />
        <div><div class="modal-title">${data.title}</div></div>
      </div>
      <div class="modal-content">${data.content}</div>
      <div class="modal-video">${data.video}</div>
      <ul style="margin-bottom:1.2em; margin-left:1.3em;">
        ${data.list.map(i => `<li>${i}</li>`).join("")}
      </ul>
      <div class="modal-actions">
        <button class="modal-btn">Learn More</button>
        <button class="modal-btn">Ask Chattia</button>
        <button class="modal-btn cta" onclick="window.location.href='contact.html'">Contact Us</button>
        <button class="modal-btn" id="cancel-btn">Cancel</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  // Modal close
  function closeModal() { modal.remove(); }
  modal.querySelector('.modal-x').onclick = closeModal;
  modal.onclick = e => (e.target === modal ? closeModal() : null);
  modal.querySelector('#cancel-btn').onclick = closeModal;
  document.addEventListener('keydown', function esc(e) {
    if (e.key === "Escape") {
      closeModal();
      document.removeEventListener('keydown', esc);
    }
  });

  // Drag logic
  makeModalDraggable(document.getElementById('draggable-modal'));
}

// Attach modal triggers
document.getElementById('card-business').onclick = () => showServiceModal('business');
document.getElementById('card-contactcenter').onclick = () => showServiceModal('contactcenter');
document.getElementById('card-itsupport').onclick = () => showServiceModal('itsupport');
document.getElementById('card-professionals').onclick = () => showServiceModal('professionals');

// --- Draggable logic ---
function makeModalDraggable(modal) {
  const header = modal.querySelector('.modal-header');
  let offsetX = 0, offsetY = 0, startX = 0, startY = 0, dragging = false;

  header.addEventListener('mousedown', dragStart, false);
  header.addEventListener('touchstart', dragStart, false);

  function dragStart(e) {
    dragging = true;
    modal.classList.add('dragging');
    startX = (e.touches ? e.touches[0].clientX : e.clientX) - modal.offsetLeft;
    startY = (e.touches ? e.touches[0].clientY : e.clientY) - modal.offsetTop;
    document.addEventListener('mousemove', dragMove, false);
    document.addEventListener('mouseup', dragEnd, false);
    document.addEventListener('touchmove', dragMove, false);
    document.addEventListener('touchend', dragEnd, false);
    e.preventDefault();
  }

  function dragMove(e) {
    if (!dragging) return;
    let x = (e.touches ? e.touches[0].clientX : e.clientX) - startX;
    let y = (e.touches ? e.touches[0].clientY : e.clientY) - startY;
    // Limit to viewport
    x = Math.max(10, Math.min(x, window.innerWidth - modal.offsetWidth - 10));
    y = Math.max(10, Math.min(y, window.innerHeight - modal.offsetHeight - 10));
    modal.style.left = x + 'px';
    modal.style.top = y + 'px';
    modal.style.right = 'auto'; // Prevent centering override
    modal.style.margin = 0;
  }

  function dragEnd(e) {
    dragging = false;
    modal.classList.remove('dragging');
    document.removeEventListener('mousemove', dragMove, false);
    document.removeEventListener('mouseup', dragEnd, false);
    document.removeEventListener('touchmove', dragMove, false);
    document.removeEventListener('touchend', dragEnd, false);
  }
}
