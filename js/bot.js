let lang = 'en';

export function openChatbot() {
    if (document.getElementById('chatbot-modal-backdrop')) {
        document.getElementById('chatbot-modal-backdrop').remove();
        return;
    }
    const c = document.createElement('div');
    c.id = 'chatbot-modal-backdrop';
    c.innerHTML = `
        <div id="chatbot-container">
          <div id="chatbot-header">
            <span>${lang === 'en' ? 'OPS AI Chatbot' : 'Chatbot OPS AI'}</span>
            <button id="chatbot-close" aria-label="Close">×</button>
          </div>
          <div id="chat-log"></div>
          <form id="chatbot-input-row">
            <input id="chatbot-input" placeholder="${lang === 'en' ? 'Type message...' : 'Escriba mensaje...'}"/>
            <button id="chatbot-send">Send</button>
          </form>
        </div>`;
    document.body.appendChild(c);
    c.onclick = e => { if (e.target === c) c.remove(); };
    c.querySelector('#chatbot-close').onclick = () => c.remove();

    const chatLog = c.querySelector('#chat-log');
    const chatInput = c.querySelector('#chatbot-input');
    const chatForm = c.querySelector('#chatbot-input-row');
    const sendBtn = c.querySelector('#chatbot-send');

    chatForm.onsubmit = async e => {
        e.preventDefault();
        const msg = chatInput.value.trim();
        if (!msg) return;
        addMsg(msg, 'user');
        chatInput.value = '';
        addMsg('…', 'bot');

        try {
            const r = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: msg })
            });
            const d = await r.json();
            chatLog.lastChild.textContent = "Thanks for your message!";
        } catch{
            chatLog.lastChild.textContent = 'Error: Can’t reach AI.';
        }
    };

    function addMsg(txt, cls) {
        const div = document.createElement('div');
        div.className = 'chat-msg ' + cls;
        div.textContent = txt;
        chatLog.appendChild(div);
        chatLog.scrollTop = chatLog.scrollHeight;
    }
}

window.openChatbot = openChatbot;

window.addEventListener('lang-changed', (e) => {
    lang = e.detail.lang;
});

export function makeModalDraggable(container, handle) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (handle) {
        handle.onmousedown = dragMouseDown;
    } else {
        container.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        container.style.top = (container.offsetTop - pos2) + "px";
        container.style.left = (container.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
