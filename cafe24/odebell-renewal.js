/* Cafe24 compatibility adapter. Do not load another jQuery or override EC modules. */
(function(){
'use strict';
function init(){
  var header=document.querySelector('.ode-header');
  if(!header)return;
  var toggle=header.querySelector('.ode-menu-toggle');
  var nav=header.querySelector('.ode-primary');
  if(toggle&&nav){toggle.addEventListener('click',function(){var open=nav.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open));});}
  var search=header.querySelector('.ode-search-toggle');
  var panel=header.querySelector('.ode-search-panel');
  if(search&&panel){search.addEventListener('click',function(){var open=panel.hasAttribute('hidden');if(open)panel.removeAttribute('hidden');else panel.setAttribute('hidden','');search.setAttribute('aria-expanded',String(open));});}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();