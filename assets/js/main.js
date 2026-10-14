// Existing ODEBELL public storefront snapshot (2026-10-14). These are STATIC preview values,
// not live Cafe24 inventory or prices. Replace with Cafe24 modules before launch.
const products=[
{code:'01',name:'글로우 스킨핏 콜라겐 마스크',price:'52,000원',original:'70,000원',tone:'#e9e5da',url:'https://odebell.com/product/detail.html?product_no=1723'},
{code:'02',name:'피토 뮤신 리페어 크림',price:'52,000원',original:'52,000원',tone:'#e4e4d9',url:'https://odebell.com/product/detail.html?product_no=2059'},
{code:'03',name:'-8kg 혈당 다이어트 ! 애사비',price:'32,000원',original:'32,000원',tone:'#e8dfd6',url:'https://odebell.com/product/detail.html?product_no=2021'}
];
const grid=document.querySelector('#product-grid');
if(grid)grid.innerHTML=products.map(p=>`<a class="product-card" href="${p.url}" target="_blank" rel="noopener"><div class="product-picture" style="--tone:${p.tone}"><span>PRODUCT IMAGE PENDING · ${p.code}</span></div><div class="product-info"><small>OFFICIAL STORE / ${p.code}</small><h3>${p.name}</h3><p>${p.price}${p.original!==p.price?' · 정상가 '+p.original:''}</p></div></a>`).join('');
const nav=document.querySelector('#navigation'),toggle=document.querySelector('.menu-toggle');
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'메뉴 닫기':'메뉴 열기')});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle?.setAttribute('aria-expanded','false')}));
if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}})},{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el))}else document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));