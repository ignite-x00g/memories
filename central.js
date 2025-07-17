// central.js
document.addEventListener('DOMContentLoaded', () => {
  const chatBody = document.getElementById('chat-body');
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');
  // Print bot greeting
  function addMessage(text, sender = 'bot') {
    const msg = document.createElement('div');
    msg.className = sender === 'bot' ? 'chat-msg bot' : 'chat-msg user';
    msg.style.margin = "0.8em 0";
    msg.textContent = text;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }
  addMessage("Hello, I'm Chattia, your OPS AI assistant. How can I help you today?");
  chatForm.onsubmit = function(e) {
    e.preventDefault();
    const text = chatInput.value.trim();
    if (!text) return;
    addMessage(text, 'user');
    chatInput.value = '';
    // Very basic "AI" logic for MVP
    setTimeout(() => {
      let reply = "I'm just a demo bot. Our team will reach out soon!";
      if (/contact|correo|email/i.test(text)) reply = "Please use the Contact Us button below to reach our team directly.";
      else if (/join|aplicar|aplicación/i.test(text)) reply = "Interested in joining? Click Join Us below!";
      else if (/business|operaciones/i.test(text)) reply = "For Business Operations, visit the Services section or click the relevant card.";
      addMessage(reply, 'bot');
    }, 850);
  };
});

