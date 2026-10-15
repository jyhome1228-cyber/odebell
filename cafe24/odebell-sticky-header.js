/* Use on every Cafe24 page containing .ode-header. Avoid duplicating this script in the same page. */
(function(){
'use strict';
function initializeSticky(){
 var header=document.querySelector('.ode-header');
 if(!header || header.dataset.odeStickyInitialized==='1')return;
 header.dataset.odeStickyInitialized='1';
 var anchor=document.createElement('div');
 anchor.className='ode-header-spacer';
 anchor.setAttribute('aria-hidden','true');
 header.parentNode.insertBefore(anchor,header);
 var start=0,active=false,scheduled=false;
 function measure(){
   var wasFixed=header.classList.contains('ode-is-fixed');
   if(wasFixed)header.classList.remove('ode-is-fixed');
   anchor.classList.remove('ode-active');
   start=header.getBoundingClientRect().top+window.scrollY;
   if(wasFixed){anchor.classList.add('ode-active');header.classList.add('ode-is-fixed');}
 }
 function update(){
   scheduled=false;
   var shouldFix=window.scrollY>start;
   if(shouldFix===active)return;
   active=shouldFix;
   if(shouldFix){anchor.style.height=header.offsetHeight+'px';anchor.classList.add('ode-active');header.classList.add('ode-is-fixed');}
   else {header.classList.remove('ode-is-fixed');anchor.classList.remove('ode-active');anchor.style.height='0px';}
 }
 function queue(){if(!scheduled){scheduled=true;window.requestAnimationFrame(update);}}
 measure();update();
 window.addEventListener('scroll',queue,{passive:true});
 window.addEventListener('resize',function(){measure();queue()},{passive:true});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initializeSticky);
else initializeSticky();
})();