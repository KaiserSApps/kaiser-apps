/* MachArt-Lichtakzent folgt der Maus auf Karten und Funktionsangeboten. */
(() => {
  if (!window.matchMedia('(hover:hover) and (pointer:fine) and (prefers-reduced-motion:no-preference)').matches) return;
  const cards = document.querySelectorAll('.apps .app,main>.card,.cards>.card,.features>.feature,.featuregrid>.feature');
  cards.forEach(card => {
    card.addEventListener('pointermove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--machart-x', ((e.clientX-r.left)/r.width*100).toFixed(1)+'%');
      card.style.setProperty('--machart-y', ((e.clientY-r.top)/r.height*100).toFixed(1)+'%');
    }, {passive:true});
    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--machart-x','50%');
      card.style.setProperty('--machart-y','50%');
    });
  });
})();
