// central.js
import { sanitizeForms, setupAutoSanitize } from './security.js';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  sanitizeForms();
  setupAutoSanitize();

  const langBtn = document.getElementById('lang-toggle');
  const themeBtn = document.getElementById('theme-toggle');
  const mobileLangBtn = document.getElementById('mobile-language-toggle');
  const mobileThemeBtn = document.getElementById('mobile-theme-toggle');

  langBtn && langBtn.addEventListener('click', () => {
    window.dispatchEvent(new Event('toggle-lang'));
  });

  mobileLangBtn && mobileLangBtn.addEventListener('click', () => {
    window.dispatchEvent(new Event('toggle-lang'));
  });

  themeBtn && themeBtn.addEventListener('click', () => {
    window.dispatchEvent(new Event('toggle-theme'));
  });

  mobileThemeBtn && mobileThemeBtn.addEventListener('click', () => {
    window.dispatchEvent(new Event('toggle-theme'));
  });

  function applyLanguage(toES) {
    root.lang = toES ? 'es' : 'en';
    document.querySelectorAll('#lang-toggle,#mobile-language-toggle,#langCtrl').forEach(btn => {
      if (btn) btn.textContent = toES ? 'EN' : 'ES';
    });
    document.querySelectorAll('[data-es]').forEach(el => {
        if (!el.dataset.en) el.dataset.en = el.textContent;
        el.textContent = toES ? el.dataset.es : el.dataset.en;
    });
    document.querySelectorAll('[data-es-ph]').forEach(el => {
        if (!el.dataset.enPh) el.dataset.enPh = el.placeholder;
        el.placeholder = toES ? el.dataset.esPh : el.dataset.enPh;
    });
  }

  function applyTheme(dark) {
    document.body.classList.toggle('dark', dark);
    document.querySelectorAll('#theme-toggle,#mobile-theme-toggle,#themeCtrl').forEach(btn => {
      if (btn) btn.textContent = dark ? 'Light' : 'Dark';
    });
  }

  window.addEventListener('toggle-lang', () => {
    const toES = root.lang === 'en';
    applyLanguage(toES);
  });

  window.addEventListener('toggle-theme', () => {
    const dark = !document.body.classList.contains('dark');
    applyTheme(dark);
  });

  // initialize based on current DOM state
  applyLanguage(root.lang === 'es');
  applyTheme(document.body.classList.contains('dark'));
});
