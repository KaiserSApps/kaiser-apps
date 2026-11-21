/* Sanfter Cursor-Lichtreflex auf MachArt-App-Karten */
(() => {
  if (!window.matchMedia('(hover:hover) and (pointer:fine)').matches) return;
  for (const card of document.querySelectorAll('.apps .app')) {
    card.addEventListener('pointermove', event => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', ((event.clientX - rect.left) / rect.width * 100).toFixed(1) + '%');
      card.style.setProperty('--my', ((event.clientY - rect.top) / rect.height * 100).toFixed(1) + '%');
    }, { passive:true });
    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--mx','50%');
      card.style.setProperty('--my','50%');
    });
  }
})();
