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

/* ---------- Simple submit stubs ---------- */
qs('#joinForm').onsubmit=e=>{e.preventDefault();alert('Join form submitted');qs('#joinModal').classList.remove('active')};
qs('#contactForm').onsubmit=e=>{e.preventDefault();alert('Contact form submitted');qs('#contactModal').classList.remove('active')};
