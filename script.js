document.querySelectorAll('a[href^="http"]').forEach(link => {
  if (!link.href.includes(location.hostname)) {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('email');
  if (!el) return;
  const encoded = el.dataset.enc;
  const email = String.fromCharCode(...encoded.split(',').map(n => parseInt(n, 10)));
  el.href = 'mailto:' + email;
  el.textContent = email;
});