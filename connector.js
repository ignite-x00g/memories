// connector.js

import { openFabModal } from './fabmain.js';

// Modal content data (all services, DRY, NIST-style compliance)
const modalData = {
  professionals: {
    title: "Sobre Profesionales",
    img: "img/professionals.jpg",
    imgAlt: "Profesionales",
    content: `Acceda a nuestra red de profesionales altamente cualificados y experimentados para satisfacer sus necesidades específicas de proyectos o de personal a largo plazo. Proporcionamos expertos en diversos campos, incluyendo TI, gestión de proyectos, finanzas y recursos humanos, asegurando que obtenga el talento adecuado para su negocio.`,
    video: "Video placeholder",
    list: [
      "Profesionales IT remotos (SysAdmins, DevOps, Analistas)",
      "Gerentes de proyecto y consultores ágiles",
      "Profesionales de finanzas y contabilidad",
      "Expertos en recursos humanos y reclutamiento",
      "Talento validado por OPS con NDA, capacitación en cumplimiento y capacitación específica para el rol",
      "Preguntar AI"
    ]
  },
  itsupport: {
    title: "Sobre Soporte IT",
    img: "img/itsupport.jpg",
    imgAlt: "Soporte IT",
    content: `Nuestros servicios de Soporte de TI brindan asistencia confiable y oportuna para mantener sus sistemas funcionando sin problemas y de forma segura. Los servicios incluyen soporte de mesa de ayuda, monitoreo de red, servicios de ciberseguridad y gestión de infraestructura en la nube.`,
    video: "Video placeholder",
    list: [
      "Soporte técnico 24/7 y solución remota de problemas",
      "Monitoreo en tiempo real de red y sistemas",
      "Auditorías de ciberseguridad, parches y detección de amenazas",
      "Configuración y mantenimiento de infraestructura en la nube",
      "Cumplimiento con NIST, CISA y políticas OPS Core CyberSec"
    ]
  },
  contactcenter: {
    title: "Sobre el Centro de Contacto",
    img: "img/contactcenter.jpg",
    imgAlt: "Centro de Contacto",
    content: `Explore nuestras soluciones integrales de Centro de Contacto diseñadas para mejorar la satisfacción y el compromiso del cliente en todos los puntos de contacto. Ofrecemos servicios de llamadas entrantes y salientes, soporte multicanal (correo electrónico, chat, redes sociales) y análisis avanzados.`,
    video: "Video placeholder",
    list: [
      "Gestión de llamadas entrantes y salientes 24/7",
      "Soporte por chat y correo electrónico en varios idiomas",
      "Integración con plataformas CRM (por ejemplo, HubSpot, Salesforce)",
      "Interacción en redes sociales y seguimiento de sentimiento",
      "Análisis de experiencia del cliente y monitoreo de calidad"
    ]
  },
  business: {
    title: "Sobre Operaciones Empresariales",
    img: "img/business.jpg",
    imgAlt: "Operaciones Empresariales",
    content: `Contenido detallado sobre nuestros servicios de Operaciones Empresariales. Ayudamos a optimizar sus procesos, mejorar la eficiencia e impulsar el crecimiento mediante el apoyo operativo estratégico. Las áreas clave incluyen la optimización de procesos, la gestión de la cadena de suministro y el aseguramiento de la calidad.`,
    video: "Video placeholder",
    list: [
      "Digitalización y automatización del flujo de trabajo",
      "Estrategias de eficiencia logística e inventario",
      "Marcos de riesgo y cumplimiento (alineados a NIST, ISO, CISA)",
      "Cuadros de métricas de rendimiento y análisis",
      "Capacitación remota y operaciones Lean"
    ]
  }
};

// Central modal render function
export function openModal(type) {
  // Remove existing modal if present
  let old = document.getElementById('ops-modal-backdrop');
  if (old) old.remove();

  // Modal markup
  const data = modalData[type];
  if (!data) return;
  const modal = document.createElement('div');
  modal.className = 'modal-backdrop';
  modal.id = 'ops-modal-backdrop';
  modal.innerHTML = `
    <div class="ops-modal" tabindex="-1" role="dialog" aria-modal="true">
      <button class="modal-x" aria-label="CERRAR" id="modal-x">X</button>
      <div class="modal-header">
        <img class="modal-img" src="${data.img}" alt="${data.imgAlt}" />
        <div>
          <div class="modal-title">${data.title}</div>
        </div>
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
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  // Trap focus, close events
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

// Global toggles (all files listen to these events)
window.addEventListener('toggle-lang', () => {
  const btn = document.getElementById('lang-toggle');
  btn.textContent = btn.textContent === 'ES' ? 'EN' : 'ES';
  document.getElementById('mobile-lang-toggle').textContent = btn.textContent;
});
window.addEventListener('toggle-theme', () => {
  document.body.classList.toggle('dark');
  const t = document.getElementById('theme-toggle');
  t.textContent = document.body.classList.contains('dark') ? 'Light' : 'Dark';
  document.getElementById('mobile-theme-toggle').textContent = t.textContent;
});

// FAB/Accordion nav - loaded separately via fabs.html and fabmain.js

export { openFabModal };
