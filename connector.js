// connector.js
import { openChatbot } from './bot.js';

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
    img: "memories/img/professionals.jpg",
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
    img: "memories/img/itsupport.jpg",
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
    img: "memories/img/contactcenter.jpg",
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
    img: "memories/img/business.jpg",
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
    if (type === 'join') {
        modal.innerHTML = `
          <div class="modal-content" style="max-width: 610px; width: 96vw; background: rgba(255,255,255,0.95); border-radius: 1.5rem; padding: 2.4rem 2rem 2rem; box-shadow: 0 8px 32px 0 rgba(115,83,234,0.15); position: relative; overflow-y: auto; max-height: 96vh; border: 1.5px solid #f2ebfc;">
            <style>
              :root {
                --ops-pink: #ff3bdc;
                --ops-purple: #7353ea;
                --ops-cyan: #00c4ff;
                --ops-blue: #2e9ffb;
                --ops-lavender: #e8e5fc;
                --glass: rgba(255,255,255,0.95);
                --modal-overlay: rgba(55,33,89,0.18);
                --border: #f2ebfc;
                --shadow: 0 8px 32px 0 rgba(115,83,234,0.15);
                --input-focus: #b2a8fd;
              }
              .modal-content { font-family: 'Segoe UI', Arial, sans-serif; }
              .modal-header h2 { margin: 0; font-size: 2rem; font-weight: 800; letter-spacing: 1px; color: var(--ops-pink); text-shadow: 0 1px 2px #fff, 0 2px 6px #eecafd1f; }
              .close-modal { background: none; border: none; font-size: 2.1rem; color: var(--ops-purple); cursor: pointer; border-radius: 50%; width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; transition: background 0.2s; }
              .close-modal:hover { background: #f3f3fb; }
              .form-row { margin-bottom: 1.2rem; display: flex; flex-direction: column; }
              label { font-weight: 600; margin-bottom: .18rem; color: #352c55; letter-spacing: .01em; }
              input, textarea { border: 1.5px solid #d1c5f5; border-radius: 8px; padding: .77rem .95rem; font-size: 1.01rem; background: #f8f6ff; color: #35314d; margin-top: 2px; transition: border 0.2s, box-shadow 0.18s; }
              input:focus, textarea:focus { outline: none; border-color: var(--input-focus); box-shadow: 0 0 0 2px #e9e0fa; }
              textarea { min-height: 3.7em; resize: vertical; }
              .form-section { border: 1.5px solid #ece8fa; border-radius: 1.1rem; background: #faf6ffb2; margin-bottom: 1.3rem; padding: 1.2rem 1rem 1rem; box-shadow: 0 2px 14px 0 rgba(130,90,210,0.07); position: relative; transition: box-shadow .16s, border .2s; }
              .form-section.completed { border-color: var(--ops-pink); box-shadow: 0 2px 14px 0 var(--ops-pink); }
              .section-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: .7rem; }
              .section-header h3 { margin: 0; font-size: 1.12rem; font-weight: 700; color: var(--ops-purple); letter-spacing: .03em; }
              .section-controls { display: flex; gap: 0.28rem; }
              .circle-btn { width: 29px; height: 29px; border-radius: 50%; border: none; font-size: 1.4rem; font-weight: 700; color: #fff; background: var(--ops-pink); box-shadow: 0 1px 4px rgba(181,137,255,0.19); cursor: pointer; transition: background .17s, box-shadow .19s; display: inline-flex; align-items: center; justify-content: center; }
              .circle-btn.add { background: var(--ops-purple);}
              .circle-btn.remove { background: var(--ops-blue);}
              .circle-btn:disabled { opacity: .45; cursor: not-allowed;}
              .accept-btn, .edit-btn { border: none; border-radius: 6px; padding: .42rem 1.1rem; margin-top: .42rem; font-size: .99rem; font-weight: 700; cursor: pointer; margin-right: 0.3em; box-shadow: 0 2px 8px 0 rgba(115,83,234,0.09); transition: background .2s, color .14s; }
              .accept-btn { background: var(--ops-cyan); color: #fff;}
              .edit-btn { background: var(--ops-pink); color: #fff;}
              .inputs input { margin-bottom: .61rem; }
              .completed h3::after { content: " ✓"; color: var(--ops-pink); font-size: 1.1em; font-weight: 700; margin-left: .15em; }
              .accent-line { height: 3px; width: 38%; margin: 18px 0 0 0; border-radius: 4px; background: linear-gradient(90deg, var(--ops-cyan) 0%, var(--ops-pink) 70%); transition: background 0.4s; }
              .form-footer { text-align: right; margin-top: 2.1rem; }
              .submit-button { padding: .77rem 2.2rem; background: var(--ops-purple); color: #fff; border: none; border-radius: 8px; font-size: 1.1rem; font-weight: 700; letter-spacing: 0.02em; cursor: pointer; box-shadow: 0 1px 6px 0 rgba(87,51,144,0.10); transition: background .15s, box-shadow .17s; }
              .submit-button:hover { background: var(--ops-pink); }
            </style>
            <div class="modal-header">
              <h2>Join Us</h2>
              <button class="close-modal" aria-label="Close">&times;</button>
            </div>
            <form id="join-form" autocomplete="off">
              <div class="form-row">
                <label for="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your full name" required />
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required />
                <label for="phone">Phone</label>
                <input type="tel" id="phone" name="phone" placeholder="Enter your phone (optional)" pattern="^[\\d\\-\\+\\(\\) ]{6,}$" />
              </div>
              <div class="form-section" data-section="Skills">
                <div class="section-header"><h3>Skills</h3><div class="section-controls"><button type="button" class="circle-btn add" title="Add Skill">+</button><button type="button" class="circle-btn remove" title="Remove Skill" disabled>−</button></div></div>
                <div class="inputs"></div><div class="accent-line"></div><button type="button" class="accept-btn">Accept</button><button type="button" class="edit-btn" style="display: none;">Edit</button>
              </div>
              <div class="form-section" data-section="Education">
                <div class="section-header"><h3>Education</h3><div class="section-controls"><button type="button" class="circle-btn add" title="Add Education">+</button><button type="button" class="circle-btn remove" title="Remove Education" disabled>−</button></div></div>
                <div class="inputs"></div><div class="accent-line"></div><button type="button" class="accept-btn">Accept</button><button type="button" class="edit-btn" style="display: none;">Edit</button>
              </div>
              <div class="form-section" data-section="Continued Education">
                <div class="section-header"><h3>Continued Education</h3><div class="section-controls"><button type="button" class="circle-btn add" title="Add Continued Education">+</button><button type="button" class="circle-btn remove" title="Remove Continued Education" disabled>−</button></div></div>
                <div class="inputs"></div><div class="accent-line"></div><button type="button" class="accept-btn">Accept</button><button type="button" class="edit-btn" style="display: none;">Edit</button>
              </div>
              <div class="form-section" data-section="Certification">
                <div class="section-header"><h3>Certification</h3><div class="section-controls"><button type="button" class="circle-btn add" title="Add Certification">+</button><button type="button" class="circle-btn remove" title="Remove Certification" disabled>−</button></div></div>
                <div class="inputs"></div><div class="accent-line"></div><button type="button" class="accept-btn">Accept</button><button type="button" class="edit-btn" style="display: none;">Edit</button>
              </div>
              <div class="form-section" data-section="Hobbies">
                <div class="section-header"><h3>Hobbies</h3><div class="section-controls"><button type="button" class="circle-btn add" title="Add Hobby">+</button><button type="button" class="circle-btn remove" title="Remove Hobby" disabled>−</button></div></div>
                <div class="inputs"></div><div class="accent-line"></div><button type="button" class="accept-btn">Accept</button><button type="button" class="edit-btn" style="display: none;">Edit</button>
              </div>
              <div class="form-row">
                <label for="comment">Tell us about yourself</label>
                <textarea id="comment" name="comment" rows="4" placeholder="Share your interests, motivation, or anything we should know..." maxlength="500"></textarea>
              </div>
              <div class="form-footer"><button type="submit" class="submit-button">Submit</button></div>
            </form>
          </div>`;
        document.body.appendChild(modal);
        const closeModal = () => modal.remove();
        modal.querySelector('.close-modal').onclick = closeModal;
        modal.onclick = e => (e.target === modal ? closeModal() : null);

        const opsAccentSets = [
          { main: '#ff3bdc', alt: '#00c4ff' }, { main: '#7353ea', alt: '#ff3bdc' },
          { main: '#2e9ffb', alt: '#7353ea' }, { main: '#00c4ff', alt: '#ff3bdc' },
          { main: '#e06fff', alt: '#2e9ffb' }
        ];
        modal.querySelectorAll('.form-section').forEach(section => {
          const accentLine = section.querySelector('.accent-line');
          const btns = section.querySelectorAll('.circle-btn, .accept-btn, .edit-btn');
          const accent = opsAccentSets[Math.floor(Math.random() * opsAccentSets.length)];
          accentLine.style.background = `linear-gradient(90deg, ${accent.main} 0%, ${accent.alt} 100%)`;
          btns.forEach(btn => {
            if (btn.classList.contains('add')) btn.style.background = accent.alt;
            if (btn.classList.contains('remove')) btn.style.background = accent.main;
            if (btn.classList.contains('accept-btn')) btn.style.background = accent.main;
            if (btn.classList.contains('edit-btn')) btn.style.background = accent.alt;
          });

          const addBtn = section.querySelector('.add');
          const removeBtn = section.querySelector('.remove');
          const acceptBtn = section.querySelector('.accept-btn');
          const editBtn = section.querySelector('.edit-btn');
          const inputsContainer = section.querySelector('.inputs');
          const sectionName = section.dataset.section;

          addBtn.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'text';
            input.placeholder = `Enter ${sectionName}`;
            input.required = true;
            inputsContainer.appendChild(input);
            removeBtn.disabled = false;
          });

          removeBtn.addEventListener('click', () => {
            const inputs = inputsContainer.querySelectorAll('input');
            if (inputs.length > 0) inputsContainer.removeChild(inputs[inputs.length - 1]);
            if (inputsContainer.children.length === 0) removeBtn.disabled = true;
          });

          acceptBtn.addEventListener('click', () => {
            const inputs = inputsContainer.querySelectorAll('input');
            if (inputs.length === 0) {
              alert(`Please add at least one ${sectionName} entry.`);
              return;
            }
            inputs.forEach(input => input.disabled = true);
            section.classList.add('completed');
            acceptBtn.style.display = 'none';
            editBtn.style.display = 'inline-block';
            addBtn.disabled = true;
            removeBtn.disabled = true;
          });

          editBtn.addEventListener('click', () => {
            const inputs = inputsContainer.querySelectorAll('input');
            inputs.forEach(input => input.disabled = false);
            section.classList.remove('completed');
            acceptBtn.style.display = 'inline-block';
            editBtn.style.display = 'none';
            addBtn.disabled = false;
            if (inputsContainer.children.length > 0) removeBtn.disabled = false;
          });
        });

        modal.querySelector('#join-form').addEventListener('submit', function(e) {
          e.preventDefault();
          let valid = true;
          modal.querySelectorAll('.form-section').forEach(section => {
            const inputs = section.querySelectorAll('.inputs input');
            if (inputs.length === 0 || Array.from(inputs).some(inp => inp.disabled === false)) {
              valid = false;
            }
          });
          if (!valid) {
            alert("Please complete and accept all dynamic sections before submitting!");
            return;
          }
          alert("Thank you for joining! We’ve received your info.");
          this.reset();
          modal.querySelectorAll('.form-section').forEach(section => {
            section.classList.remove('completed');
            section.querySelector('.inputs').innerHTML = '';
            section.querySelector('.accept-btn').style.display = 'inline-block';
            section.querySelector('.edit-btn').style.display = 'none';
            section.querySelector('.add').disabled = false;
            section.querySelector('.remove').disabled = true;
          });
        });
        return;
    } 
      else if (type === 'contact') {
        const url = 'contact/contact.html';
        fetch(url)
          .then(response => response.text())
          .then(content => {
            modal.innerHTML = `
              <div class="ops-modal" style="max-width:640px; width:96vw; height:auto; overflow-y: auto; max-height: 90vh;">
                ${content}
              </div>
            `;
            document.body.appendChild(modal);

            const closeModal = () => modal.remove();

            // Re-add close event listeners
            modal.querySelector('.close-modal').onclick = closeModal;
            modal.onclick = e => (e.target === modal ? closeModal() : null);
            document.addEventListener('keydown', function esc(e) {
                if (e.key === "Escape") {
                    closeModal();
                    document.removeEventListener('keydown', esc);
                }
            });

            const fabModal = modal.querySelector('.ops-modal');
            if (fabModal) {
              makeModalDraggable(fabModal);
            }

            const contactForm = modal.querySelector('#contact-form');
            if (contactForm) {
              contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                // Replace with actual form submission logic
                setTimeout(() => {
                  alert('Form submitted successfully!');
                  window.location.href = 'index.html';
                }, 500);
              });
            }
          });
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
      document.removeEventListener('keydown', esc);
    }
  });
}


// Global toggles (all files listen to these events)
window.addEventListener('toggle-lang', () => {
  const btn = document.getElementById('lang-toggle');
  const isEnglish = btn.textContent === 'EN';
  const newLang = isEnglish ? 'es' : 'en';

  btn.textContent = isEnglish ? 'ES' : 'EN';
  const mobileBtn = document.getElementById('mobile-lang-toggle');
  if (mobileBtn) {
    mobileBtn.textContent = isEnglish ? 'ES' : 'EN';
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
  if (!header) return;
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
