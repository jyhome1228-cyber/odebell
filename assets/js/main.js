// Preview-only product entries. Replace with verified Cafe24 modules/data during integration.
const products=[
{code:'01',name:'글로우 스킨핏 콜라겐 마스크',subtitle:'GLOW SKINFIT COLLAGEN MASK',tone:'#e9e5da'},
{code:'02',name:'피토 뮤신 리페어 크림',subtitle:'PHYTO MUCIN REPAIR CREAM',tone:'#e4e4d9'},
{code:'03',name:'오드벨 제품 03',subtitle:'PRODUCT IMAGE / DETAILS PENDING',tone:'#e8dfd6'},
{code:'04',name:'오드벨 제품 04',subtitle:'PRODUCT IMAGE / DETAILS PENDING',tone:'#dfe0d5'},
{code:'05',name:'오드벨 제품 05',subtitle:'PRODUCT IMAGE / DETAILS PENDING',tone:'#e6e0d9'}];
const grid=document.querySelector('#product-grid');
if(grid)grid.innerHTML=products.map(p=>`<article class="product-card"><div class="product-picture" style="--tone:${p.tone}"><span>IMAGE PLACEHOLDER · ${p.code}</span></div><div class="product-info"><small>ODEBELL / ${p.code}</small><h3>${p.name}</h3><p>${p.subtitle}</p></div></article>`).join('');
const nav=document.querySelector('#navigation'),toggle=document.querySelector('.menu-toggle');
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'메뉴 닫기':'메뉴 열기')});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle?.setAttribute('aria-expanded','false')}));
if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}})},{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el))}else document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));