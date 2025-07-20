// bot.js

export function openChatbot() {
  // Remove existing modal if present
  let old = document.getElementById('chatbot-container');
  if (old) old.remove();

  const chatbotContainer = document.createElement('div');
  chatbotContainer.id = 'chatbot-container';
  chatbotContainer.setAttribute('role', 'dialog');
  chatbotContainer.setAttribute('aria-modal', 'true');

  chatbotContainer.innerHTML = `
    <div id="chatbot-header">
      <span id="title" data-en="OPS AI Chatbot" data-es="Chatbot OPS AI">OPS AI Chatbot</span>
      <div>
        <span id="langCtrl" class="ctrl">ES</span>
        &nbsp;|&nbsp;
        <span id="themeCtrl" class="ctrl">Dark</span>
        <button id="chatbot-x" aria-label="Close" style="background: none; border: none; color: white; font-size: 1.5rem; cursor: pointer;">×</button>
      </div>
    </div>
    <div id="chat-log" aria-live="polite"></div>
    <div id="chatbot-form-container">
      <form id="chatbot-input-row" autocomplete="off">
        <input id="chatbot-input" type="text" placeholder="Type your message..." required maxlength="256"
               data-en-ph="Type your message..." data-es-ph="Escriba su mensaje...">
        <button id="chatbot-send" type="submit" disabled aria-label="Send">
          <i class="fas fa-paper-plane"></i>
        </button>
      </form>
      <label class="human-check">
        <input type="checkbox" id="human-check">
        <span id="human-label" data-en="I am human" data-es="Soy humano">I am human</span>
      </label>
    </div>
  `;

  document.body.appendChild(chatbotContainer);
  makeModalDraggable(chatbotContainer, chatbotContainer.querySelector('#chatbot-header'));
  centerModal(chatbotContainer);


  const qs=s=>document.querySelector(s);

  /* === Language toggle === */
  const langCtrl = qs('#langCtrl');
  if (langCtrl) langCtrl.onclick = () =>
    window.dispatchEvent(new Event('toggle-lang'));

  /* === Theme toggle === */
  const themeCtrl = qs('#themeCtrl');
  if (themeCtrl) themeCtrl.onclick = () =>
    window.dispatchEvent(new Event('toggle-theme'));

  /* === Chatbot core === */
  const log   = qs('#chat-log'),
        form  = qs('#chatbot-input-row'),
        input = qs('#chatbot-input'),
        send  = qs('#chatbot-send'),
        guard = qs('#human-check');

  guard.onchange = () => send.disabled = !guard.checked;

  function addMsg(txt,cls){
    const div = document.createElement('div');
    div.className = 'chat-msg '+cls;
    div.textContent = txt;
    log.appendChild(div);
    log.scrollTop = log.scrollHeight;
  }

  addMsg("Hello, I'm Chattia, your OPS AI assistant. How can I help you today?", 'bot');

  form.onsubmit = async e=>{
    e.preventDefault();
    if(!guard.checked) return;

    const msg = input.value.trim();
    if(!msg) return;
    addMsg(msg,'user');
    input.value='';
    addMsg('…','bot');

    setTimeout(() => {
        let reply = "I'm just a demo bot. Our team will reach out soon!";
        if (/contact|correo|email/i.test(msg)) reply = "Please use the Contact Us button below to reach our team directly.";
        else if (/join|aplicar|aplicación/i.test(msg)) reply = "Interested in joining? Click Join Us below!";
        else if (/business|operaciones/i.test(msg)) reply = "For Business Operations, visit the Services section or click the relevant card.";
        log.lastChild.textContent = reply;
    }, 850);
  };

  // Close button
  document.getElementById('chatbot-x').onclick = () => chatbotContainer.remove();
}

function centerModal(modal) {
    modal.style.left = '50%';
    modal.style.top = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
}

export function makeModalDraggable(modal, header) {
    if (!header) return;
    let startX = 0, startY = 0, dragging = false;

    header.addEventListener('mousedown', dragStart, false);
    header.addEventListener('touchstart', dragStart, { passive: false });

    function dragStart(e) {
        dragging = true;
        modal.classList.add('dragging');
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        startX = clientX - modal.offsetLeft;
        startY = clientY - modal.offsetTop;
        document.addEventListener('mousemove', dragMove, false);
        document.addEventListener('mouseup', dragEnd, false);
        document.addEventListener('touchmove', dragMove, { passive: false });
        document.addEventListener('touchend', dragEnd, false);
        e.preventDefault();
    }

    function dragMove(e) {
        if (!dragging) return;
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        let x = clientX - startX;
        let y = clientY - startY;
        // Limit to viewport
        x = Math.max(10, Math.min(x, window.innerWidth - modal.offsetWidth - 10));
        y = Math.max(10, Math.min(y, window.innerHeight - modal.offsetHeight - 10));
        modal.style.left = x + 'px';
        modal.style.top = y + 'px';
        modal.style.right = 'auto'; // Prevent centering override
        modal.style.margin = 0;
        if(e.touches) e.preventDefault();
    }

    function dragEnd() {
        dragging = false;
        modal.classList.remove('dragging');
        document.removeEventListener('mousemove', dragMove, false);
        document.removeEventListener('mouseup', dragEnd, false);
        document.removeEventListener('touchmove', dragMove, { passive: false });
        document.removeEventListener('touchend', dragEnd, false);
    }
}
