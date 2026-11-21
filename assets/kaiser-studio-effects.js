/* Kaiser Studio – gemeinsamer, barrierearmer Effekt für alle Seiten */
(function(){
  "use strict";
  var path=location.pathname.toLowerCase();
  var page=path.split("/").pop();
  if(page==="reichtum-manifestieren.html")document.body.classList.add("ks-page-wealth");
  if(page==="herzarchiv.html")document.body.classList.add("ks-page-heart");
  if(page==="heilkraeuter.html")document.body.classList.add("ks-page-herbs");

  // Globaler, rein dekorativer Partikel-Layer auf jeder Kaiser-Studio-Seite.
  // Keine Elemente überlagern Links oder Buttons.
  var globalParticles=document.createElement("div");
  globalParticles.className="ks-global-particles";
  globalParticles.setAttribute("aria-hidden","true");
  for(var i=0;i<16;i++)globalParticles.appendChild(document.createElement("span")).className="ks-global-spark";
  document.body.prepend(globalParticles);

  var hero=document.querySelector(".hero, .top");
  if(hero){
    var atmosphere=document.createElement("div");
    atmosphere.className="ks-hero-atmosphere";
    atmosphere.setAttribute("aria-hidden","true");
    atmosphere.innerHTML='<span class="ks-orb"></span><span class="ks-orb"></span><span class="ks-orb"></span><span class="ks-arc"></span><span class="ks-arc"></span><span class="ks-spark"></span><span class="ks-spark"></span><span class="ks-spark"></span><span class="ks-spark"></span>';
    hero.prepend(atmosphere);
  }

  var reduced=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if(reduced||!("IntersectionObserver" in window))return;
  var targets=document.querySelectorAll("main .app, main .card, main .feature, main section.content > h2, main .section > h2, main .mission-inner");
  var observer=new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.remove("ks-pending");
        entry.target.classList.add("ks-visible");
        observer.unobserve(entry.target);
      }
    });
  },{rootMargin:"0px 0px -25px 0px",threshold:.08});
  targets.forEach(function(el){
    el.classList.add("ks-reveal");
    if(el.getBoundingClientRect().top>window.innerHeight*.85){
      el.classList.add("ks-pending");
      observer.observe(el);
    }else{
      el.classList.add("ks-visible");
    }
  });
})();