// main.js

import { openModal } from './connector.js';

document.addEventListener('DOMContentLoaded', function() {
  // Card triggers
  document.getElementById('card-business').onclick = () =>
    openModal('business-modal');
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
