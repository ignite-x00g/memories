const SANITIZE_CONFIG = {
  ALLOWED_TAGS: [
    'b', 'i', 'em', 'strong', 'a', 'div', 'span', 'p', 'h1', 'h2', 'h3', 'h4',
    'h5', 'h6', 'button', 'ul', 'ol', 'li', 'img', 'video', 'source', 'form',
    'label', 'input', 'textarea', 'select', 'option'
  ],
  ALLOWED_ATTR: [
    'href', 'target', 'src', 'alt', 'type', 'value', 'class', 'id', 'role',
    'aria-label', 'aria-labelledby', 'aria-modal', 'style'
  ],
};

/**
 * Sanitize an HTML string to prevent XSS.
 * @param {string} dirty - The dirty HTML string.
 * @returns {string} The sanitized HTML string.
 */
export function sanitize(dirty) {
  const temp = document.createElement('div');
  temp.innerHTML = dirty;

  const sanitizeNode = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      return;
    }

    if (node.nodeType !== Node.ELEMENT_NODE || !SANITIZE_CONFIG.ALLOWED_TAGS.includes(node.tagName.toLowerCase())) {
      node.remove();
      return;
    }

    const attributes = Array.from(node.attributes);
    for (const { name } of attributes) {
      if (!SANITIZE_CONFIG.ALLOWED_ATTR.includes(name)) {
        node.removeAttribute(name);
      }
    }

    const children = Array.from(node.children);
    for (const child of children) {
      sanitizeNode(child);
    }
  };

  const children = Array.from(temp.children);
  for (const child of children) {
    sanitizeNode(child);
  }

  return temp.innerHTML;
}

/**
 * Sanitize all form inputs on the page.
 */
export function sanitizeForms() {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', (event) => {
      const inputs = form.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        if (input.type === 'file' || input.type === 'password') {
          return;
        }
        input.value = sanitize(input.value);
      });
    });
  });
}
