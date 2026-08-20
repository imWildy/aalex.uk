document.querySelectorAll('a[href^="http"]').forEach(link => {
  if (!link.href.includes(location.hostname)) {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  }
});

function getFont(changeFont) {
  const fontBtn = document.getElementById('font-btn');
  let savedFont = localStorage.getItem('font') || 'Hack';

  if (changeFont) {
    savedFont = savedFont === 'Roboto' ? 'Hack' : 'Roboto';
    localStorage.setItem('font', savedFont);
  }

  document.body.classList.toggle('roboto-font', savedFont === 'Roboto');
  document.body.classList.toggle('hack-font', savedFont === 'Hack');

  return savedFont;
}

window.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('email');
  if (!el) return;
  const encoded = el.dataset.enc;
  const email = String.fromCharCode(...encoded.split(',').map(n => parseInt(n, 10)));
  el.href = 'mailto:' + email;
  el.textContent = email;

  // force cancerous browser to play the video
  const video = document.querySelector('video');
  const promise = video.play();
});

const fontBtn = document.getElementById('font-btn');
fontBtn.addEventListener('click', () => {
  const fontPopup = document.getElementById('font-popup');
  const popupText = document.getElementById('popup-text');
  const savedFont = getFont(false);

  popupText.textContent = `Changed font to ${savedFont}.`;
  fontPopup.style.display = 'inline-block';
  fontPopup.style.animation = 'popup-animation 1s';

  fontPopup.addEventListener('animationend', () => {
    fontPopup.style.display = 'none';
  }, { once: true });
});