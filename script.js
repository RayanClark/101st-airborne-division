(function(){
var intro=document.getElementById('intro');
if(intro){
  var close=function(){intro.classList.add('off')};
  intro.addEventListener('click',close);
  intro.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' ')close()});
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){close()}
  else{
    intro.querySelectorAll('p').forEach(function(p,i){setTimeout(function(){p.classList.add('on')},500+i*850)});
    setTimeout(close,5200);
  }
}
var burger=document.getElementById('burger'),menu=document.getElementById('menu');
burger.addEventListener('click',function(){var s=menu.classList.toggle('show');burger.setAttribute('aria-expanded',s)});
document.querySelectorAll('nav li > button').forEach(function(b){
  b.addEventListener('click',function(e){
    e.stopPropagation();
    var li=b.parentNode,was=li.classList.contains('open');
    document.querySelectorAll('nav li.open').forEach(function(o){o.classList.remove('open');o.firstElementChild.setAttribute('aria-expanded','false')});
    if(!was){li.classList.add('open');b.setAttribute('aria-expanded','true')}
  });
});
document.addEventListener('click',function(){document.querySelectorAll('nav li.open').forEach(function(o){o.classList.remove('open')})});
})();
