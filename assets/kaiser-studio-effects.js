/* Kaiser Studio – gemeinsamer, barrierearmer Effekt für alle Seiten */
(function(){
  "use strict";
  var path=location.pathname.toLowerCase();
  var page=path.split("/").pop();
  if(page==="reichtum-manifestieren.html")document.body.classList.add("ks-page-wealth");
  if(page==="herzarchiv.html")document.body.classList.add("ks-page-heart");
  if(page==="heilkraeuter.html")document.body.classList.add("ks-page-herbs");
  if(["impressum.html","datenschutz.html","reichtum-datenschutz.html"].includes(page))document.body.classList.add("ks-page-legal");

  // Aufsteigende Blasen bleiben innerhalb des farbigen Titelbereichs.
  var hero=document.querySelector(".hero, .top");
  if(hero){
    var atmosphere=document.createElement("div");
    atmosphere.className="ks-hero-atmosphere";
    atmosphere.setAttribute("aria-hidden","true");
    for(var i=0;i<3;i++)atmosphere.appendChild(document.createElement("span")).className="ks-orb";
    for(var j=0;j<2;j++)atmosphere.appendChild(document.createElement("span")).className="ks-arc";
    for(var k=0;k<16;k++){
      var spark=document.createElement("span");
      spark.className="ks-spark";
      spark.style.left=(5+(k*37)%91)+"%";
      spark.style.animationDuration=(7+(k%5)*1.7)+"s";
      spark.style.animationDelay=(-1-k*.81)+"s";
      spark.style.width=(k%5===0?11:k%3===0?7:9)+"px";
      spark.style.height=spark.style.width;
      atmosphere.appendChild(spark);
    }
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