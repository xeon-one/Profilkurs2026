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
