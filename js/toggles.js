document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('lang-toggle');
    const themeToggle = document.getElementById('theme-toggle');

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            window.dispatchEvent(new CustomEvent('toggle-lang'));
        });
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            window.dispatchEvent(new CustomEvent('toggle-theme'));
        });
    }
});
