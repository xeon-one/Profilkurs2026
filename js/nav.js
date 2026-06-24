/* nav.js – Markiert den aktiven Navigationspunkt anhand der aktuellen Seite */
(function () {
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav__links a').forEach(function (link) {
    const linkFile = link.getAttribute('href').split('/').pop();
    if (linkFile === currentFile) {
      link.classList.add('active');
    }
  });
})();

/* Automatische Orientierungserkennung für .photo-grid */
(function () {
  function classifyImage(img) {
    const ratio = img.naturalWidth / img.naturalHeight;
    const figure = img.closest('figure.photo');
    if (!figure) return;
    if (ratio >= 1.8) {
      figure.classList.add('photo--wide');
    } else if (ratio >= 1) {
      figure.classList.add('photo--landscape');
    }
    // Hochkant bleibt ohne Extra-Klasse (Standard: span 2)
  }

  document.querySelectorAll('.photo-grid figure.photo img').forEach(function (img) {
    if (img.complete && img.naturalWidth > 0) {
      classifyImage(img);
    } else {
      img.addEventListener('load', function () { classifyImage(img); });
    }
  });
})();
