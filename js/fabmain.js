/* ---------- Helper ---------- */
const qs=(sel,ctx=document)=>ctx.querySelector(sel);
const qsa=(sel,ctx=document)=>[...ctx.querySelectorAll(sel)];

/* ---------- Mobile nav + toggles ---------- */
qs('#menuToggle').onclick=()=>qs('#mobileNav').classList.toggle('active');
qs('#mobile-services-toggle').onclick=()=>qs('#mobile-services-menu').classList.toggle('active');
qs('#mobile-language-toggle').onclick=()=>{
 const isEN=qs('#mobile-language-toggle').textContent==='EN';
 qsa('[data-en]').forEach(el=>el.textContent=isEN?el.dataset.es:el.dataset.en);
 qs('#mobile-language-toggle').textContent=isEN?'ES':'EN';
};
qs('#mobile-theme-toggle').onclick=()=>{
 const light=qs('#mobile-theme-toggle').textContent==='Light';
 document.body.classList.toggle('dark',light);
 qs('#mobile-theme-toggle').textContent=light?'Dark':'Light';
};

/* ---------- Join dynamic sections ---------- */
qsa('#joinModal .form-section').forEach(section=>{
 const inputs   =qs('.inputs',section);
 const addBtn   =qs('.add',section);
 const rmBtn    =qs('.remove',section);
 const accBtn   =qs('.accept-btn',section);
 const editBtn  =qs('.edit-btn',section);
 if(!addBtn)return; // skip plain sections
 addBtn.onclick=()=>{const ip=document.createElement('input');ip.type='text';ip.placeholder=`Enter ${qs('h2',section).textContent}`;inputs.appendChild(ip);ip.focus()};
 rmBtn.onclick =()=>inputs.lastElementChild&&inputs.removeChild(inputs.lastElementChild);
 accBtn.onclick=()=>{
   if(!inputs.children.length)return alert('Add at least one entry.');
   inputs.querySelectorAll('input').forEach(i=>i.disabled=true);
   section.classList.add('completed');accBtn.style.display='none';editBtn.style.display='inline-block';
 };
 editBtn.onclick=()=>{
   inputs.querySelectorAll('input').forEach(i=>i.disabled=false);
   section.classList.remove('completed');accBtn.style.display='inline-block';editBtn.style.display='none';
 };
});

/* ---------- Draggable Modal ---------- */
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "Header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "Header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

dragElement(document.getElementById("contactModal"));

document.querySelector('a[href="pages/contact.html"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('contactModal').classList.add('active');
});

/* ---------- Simple submit stubs ---------- */
qs('#joinForm').onsubmit=e=>{e.preventDefault();alert('Join form submitted');qs('#joinModal').classList.remove('active')};
qs('#contactForm').onsubmit=e=>{e.preventDefault();alert('Contact form submitted');qs('#contactModal').classList.remove('active')};
