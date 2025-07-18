// connector.js

const translations = {
  en: {
    "home": "Home",
    "business-ops": "Business Operations",
    "contact-center": "Contact Center",
    "it-support": "IT Support",
    "professionals": "Professionals",
    "business-ops-title": "Business Operations",
    "business-ops-content": "Streamline your processes, maximize efficiency, ensure compliance, and scale your business with precision.",
    "contact-center-title": "Contact Center",
    "contact-center-content": "Enhance customer engagement with multilingual, multichannel support—24/7, data-driven, and empathetic.",
    "it-support-title": "IT Support",
    "it-support-content": "Proactive, secure, real-time tech help, cloud management, and cyber defense for every business size.",
    "professionals-title": "Professionals",
    "professionals-content": "OPS-vetted talent for IT, HR, projects, finance—contract or full-time, ready when you are.",
    "fab-join": "Join Us",
    "fab-contact": "Contact Us",
    "fab-chat": "Chat",
    "modal-title-business": "About Business Operations",
    "modal-content-business": "Detailed content about our Business Operations services. We help optimize your processes, improve efficiency, and drive growth through strategic operational support. Key areas include process optimization, supply chain management, and quality assurance.",
    "modal-list-business": [
      "Workflow digitization and automation",
      "Logistics and inventory efficiency strategies",
      "Risk and compliance frameworks (aligned to NIST, ISO, CISA)",
      "Performance metrics dashboards and analysis",
      "Remote training and Lean operations"
    ],
    "modal-title-contactcenter": "About the Contact Center",
    "modal-content-contactcenter": "Explore our comprehensive Contact Center solutions designed to enhance customer satisfaction and engagement across all touchpoints. We offer inbound and outbound call services, multichannel support (email, chat, social media), and advanced analytics.",
    "modal-list-contactcenter": [
      "24/7 inbound and outbound call management",
      "Multilingual chat and email support",
      "CRM platform integration (e.g., HubSpot, Salesforce)",
      "Social media engagement and sentiment tracking",
      "Customer experience analytics and quality monitoring"
    ],
    "modal-title-itsupport": "About IT Support",
    "modal-content-itsupport": "Our IT Support services provide reliable and timely assistance to keep your systems running smoothly and securely. Services include help desk support, network monitoring, cybersecurity services, and cloud infrastructure management.",
    "modal-list-itsupport": [
      "24/7 help desk and remote troubleshooting",
      "Real-time network and systems monitoring",
      "Cybersecurity audits, patching, and threat detection",
      "Cloud infrastructure setup and maintenance",
      "Compliance with NIST, CISA, and OPS Core CyberSec policies"
    ],
    "modal-title-professionals": "About Professionals",
    "modal-content-professionals": "Access our network of highly skilled and experienced professionals to meet your specific project or long-term staffing needs. We provide experts in various fields, including IT, project management, finance, and human resources, ensuring you get the right talent for your business.",
    "modal-list-professionals": [
      "Remote IT professionals (SysAdmins, DevOps, Analysts)",
      "Project managers and agile consultants",
      "Finance and accounting professionals",
      "Human resources and recruitment experts",
      "OPS-vetted talent with NDAs, compliance training, and role-specific training",
      "Ask AI"
    ]
  },
  es: {
    "home": "Inicio",
    "business-ops": "Operaciones de Negocio",
    "contact-center": "Centro de Contacto",
    "it-support": "Soporte de TI",
    "professionals": "Profesionales",
    "business-ops-title": "Operaciones de Negocio",
    "business-ops-content": "Optimice sus procesos, maximice la eficiencia, garantice el cumplimiento y escale su negocio con precisión.",
    "contact-center-title": "Centro de Contacto",
    "contact-center-content": "Mejore la participación del cliente con soporte multilingüe y multicanal: 24/7, basado en datos y empático.",
    "it-support-title": "Soporte de TI",
    "it-support-content": "Ayuda técnica proactiva, segura y en tiempo real, gestión de la nube y ciberdefensa para empresas de todos los tamaños.",
    "professionals-title": "Profesionales",
    "professionals-content": "Talento investigado por OPS para TI, recursos humanos, proyectos, finanzas, por contrato o a tiempo completo, listo cuando usted lo esté.",
    "fab-join": "Únete a nosotros",
    "fab-contact": "Contáctanos",
    "fab-chat": "Chat",
    "modal-title-business": "Sobre Operaciones de Negocio",
    "modal-content-business": "Contenido detallado sobre nuestros servicios de Operaciones de Negocio. Ayudamos a optimizar sus procesos, mejorar la eficiencia e impulsar el crecimiento mediante el apoyo operativo estratégico. Las áreas clave incluyen la optimización de procesos, la gestión de la cadena de suministro y el aseguramiento de la calidad.",
    "modal-list-business": [
      "Digitalización y automatización de flujos de trabajo",
      "Estrategias de eficiencia logística y de inventario",
      "Marcos de riesgo y cumplimiento (alineados con NIST, ISO, CISA)",
      "Paneles y análisis de métricas de rendimiento",
      "Capacitación remota y operaciones Lean"
    ],
    "modal-title-contactcenter": "Sobre el Centro de Contacto",
    "modal-content-contactcenter": "Explore nuestras soluciones integrales de Centro de Contacto diseñadas para mejorar la satisfacción y el compromiso del cliente en todos los puntos de contacto. Ofrecemos servicios de llamadas entrantes y salientes, soporte multicanal (correo electrónico, chat, redes sociales) y análisis avanzados.",
    "modal-list-contactcenter": [
      "Gestión de llamadas entrantes y salientes 24/7",
      "Soporte por chat y correo electrónico en varios idiomas",
      "Integración con plataformas CRM (por ejemplo, HubSpot, Salesforce)",
      "Participación en redes sociales y seguimiento de sentimientos",
      "Análisis de la experiencia del cliente y monitoreo de la calidad"
    ],
    "modal-title-itsupport": "Sobre Soporte de TI",
    "modal-content-itsupport": "Nuestros servicios de Soporte de TI brindan asistencia confiable y oportuna para mantener sus sistemas funcionando sin problemas y de forma segura. Los servicios incluyen soporte de mesa de ayuda, monitoreo de red, servicios de ciberseguridad y gestión de infraestructura en la nube.",
    "modal-list-itsupport": [
      "Soporte técnico 24/7 y solución remota de problemas",
      "Monitoreo en tiempo real de redes y sistemas",
      "Auditorías de ciberseguridad, parches y detección de amenazas",
      "Configuración y mantenimiento de la infraestructura en la nube",
      "Cumplimiento de las políticas de ciberseguridad básicas de NIST, CISA y OPS"
    ],
    "modal-title-professionals": "Sobre Profesionales",
    "modal-content-professionals": "Acceda a nuestra red de profesionales altamente cualificados y experimentados para satisfacer sus necesidades específicas de proyectos o de personal a largo plazo. Proporcionamos expertos en diversos campos, incluyendo TI, gestión de proyectos, finanzas y recursos humanos, asegurando que obtenga el talento adecuado para su negocio.",
    "modal-list-professionals": [
      "Profesionales de TI remotos (administradores de sistemas, DevOps, analistas)",
      "Gerentes de proyecto y consultores ágiles",
      "Profesionales de finanzas y contabilidad",
      "Expertos en recursos humanos y reclutamiento",
      "Talento investigado por OPS con NDA, capacitación en cumplimiento y capacitación específica para el rol",
      "Preguntar a la IA"
    ]
  }
};

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
    title: "Sobre Gestion",
    img: "img/business.jpg",
    imgAlt: "Gestion",
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
export function openModal(type, isFab = false) {
  // Remove existing modal if present
  let old = document.getElementById('ops-modal-backdrop');
  if (old) old.remove();

  const modal = document.createElement('div');
  modal.className = 'modal-backdrop';
  modal.id = 'ops-modal-backdrop';
  if (isFab) {
    let content = '';
    if (type === 'join') {
      content = `<iframe src="join.html" frameborder="0" class="fab-modal-iframe"></iframe>`;
    } else if (type === 'contact') {
      content = `<iframe src="contact.html" frameborder="0" class="fab-modal-iframe"></iframe>`;
    } else if (type === 'chat') {
      modal.innerHTML = `
        <div id="chatbot-container" tabindex="-1" role="dialog" aria-modal="true">
          <div id="chatbot-header">
            <span id="title" data-en="OPS AI Chatbot" data-es="Chatbot OPS AI">OPS AI Chatbot</span>
            <span>
              <span id="chatbot-lang" class="ctrl">ES</span>
              &nbsp;|&nbsp;
              <span id="chatbot-theme" class="ctrl">Dark</span>
              <button id="chatbot-x" aria-label="Close">×</button>
            </span>
          </div>
          <div id="chat-log" aria-live="polite"></div>
          <div id="chatbot-form-container">
            <form id="chatbot-input-row" autocomplete="off">
              <input id="chatbot-input" type="text" placeholder="Type your message..." required maxlength="256">
              <button id="chatbot-send" type="submit" disabled aria-label="Send">
                <i class="fas fa-paper-plane"></i>
              </button>
            </form>
            <label class="human-check">
              <input type="checkbox" id="human-check">
              <span id="human-label" data-en="I am human" data-es="Soy humano">I am human</span>
            </label>
          </div>
        </div>`;
        document.body.appendChild(modal);
        const chatbotCont = document.getElementById('chatbot-container');
        makeModalDraggable(chatbotCont, chatbotCont.querySelector('#chatbot-header'));
        return;
    }
    modal.innerHTML = `
      <div class="ops-modal" style="max-width:640px; width:96vw; height:560px;">
        <button class="modal-x" aria-label="CERRAR" id="fab-modal-x">X</button>
        ${content}
      </div>
    `;
  } else {
    const lang = document.getElementById('lang-toggle').textContent === 'EN' ? 'en' : 'es';
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
          <button class="modal-btn">Learn More</button>
          <button class="modal-btn">Ask Chattia</button>
          <button class="modal-btn cta" onclick="window.location.href='contact.html'">Contact Us</button>
          <button class="modal-btn" id="cancel-btn">Cancel</button>
        </div>
      </div>
    `;
  }

  document.body.appendChild(modal);

  // Trap focus, close events
  const closeModal = () => modal.remove();
  modal.querySelector('.modal-x, #fab-modal-x, #cancel-btn').onclick = closeModal;
  modal.onclick = e => (e.target === modal ? closeModal() : null);
  document.addEventListener('keydown', function esc(e) {
    if (e.key === "Escape") {
      closeModal();
      document.removeEventListener('keydown', esc);
    }
  });

  if (!isFab) {
    makeModalDraggable(document.getElementById('draggable-modal'));
  } else {
    const fabModal = modal.querySelector('.ops-modal');
    if (fabModal) {
      makeModalDraggable(fabModal);
    }
  }
}


// Global toggles (all files listen to these events)
window.addEventListener('toggle-lang', () => {
  const btn = document.getElementById('lang-toggle');
  const currentLang = btn.textContent === 'EN' ? 'es' : 'en';
  const newLang = currentLang === 'es' ? 'en' : 'es';
  btn.textContent = newLang === 'es' ? 'EN' : 'ES';
  const mobileBtn = document.getElementById('mobile-lang-toggle');
  if (mobileBtn) {
    mobileBtn.textContent = newLang === 'es' ? 'ES' : 'EN';
  }

  const elements = document.querySelectorAll('[data-lang-en], [data-lang-es]');
  elements.forEach(el => {
    const enText = el.dataset.langEn;
    const esText = el.dataset.langEs;
    if (newLang === 'es' && esText) {
      el.textContent = esText;
    } else if (newLang === 'en' && enText) {
      el.textContent = enText;
    }
  });
});
window.addEventListener('toggle-theme', () => {
  document.body.classList.toggle('dark');
  const t = document.getElementById('theme-toggle');
  t.textContent = document.body.classList.contains('dark') ? 'Light' : 'Dark';
  const mobileT = document.getElementById('mobile-theme-toggle');
  if (mobileT) {
    mobileT.textContent = t.textContent;
  }
});

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
