// main.js

import { openModal } from './connector.js';
import { services } from './app-data.js';

document.addEventListener('DOMContentLoaded', function() {
  const navLinksContainer = document.querySelector('.nav-links');
  const gridContainer = document.querySelector('.grid-container');

  services.forEach(service => {
    // Create nav link
    const navLink = document.createElement('a');
    navLink.href = `${service.id}.html`;
    navLink.className = 'nav-link';
    navLink.dataset.es = service.es;
    navLink.textContent = service.en;
    navLinksContainer.appendChild(navLink);

    // Create card
    const card = document.createElement('div');
    card.className = 'card';
    card.id = `card-${service.id}`;
    card.innerHTML = `
      <div class="title" data-es="${service.es}">${service.en}</div>
      <div class="icon"><i class="fa-thin ${service.icon}"></i></div>
      <div class="content">
        <p data-es="${service.description_es}">${service.description_en}</p>
      </div>
    `;
    card.onclick = () => openModal(`${service.id}-modal`);
    gridContainer.appendChild(card);
  });

  // Language and Theme toggles
  document.getElementById('lang-toggle').onclick = () =>
    window.dispatchEvent(new Event('toggle-lang'));
  document.getElementById('theme-toggle').onclick = () =>
    window.dispatchEvent(new Event('toggle-theme'));
});
