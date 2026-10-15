// Existing ODEBELL public storefront snapshot (2026-10-14). These are STATIC preview values,
// not live Cafe24 inventory or prices. Replace with Cafe24 modules before launch.
const products=[
{code:'01',name:'글로우 스킨핏 콜라겐 마스크',price:'52,000원',original:'70,000원',tone:'#e9e5da',url:'https://odebell.com/product/detail.html?product_no=1723'},
{code:'02',name:'피토 뮤신 리페어 크림',price:'52,000원',original:'52,000원',tone:'#e4e4d9',url:'https://odebell.com/product/detail.html?product_no=2059'},
{code:'03',name:'-8kg 혈당 다이어트 ! 애사비',price:'32,000원',original:'32,000원',tone:'#e8dfd6',url:'https://odebell.com/product/detail.html?product_no=2021'}
];
products.push(
{code:'04',name:'제품 이미지 준비 중',price:'',tone:'#e8e6df',url:'',placeholder:true},
{code:'05',name:'제품 이미지 준비 중',price:'',tone:'#e2e1db',url:'',placeholder:true}
);
const grid=document.querySelector('#product-grid');
if(grid)grid.innerHTML=products.map(p=>p.placeholder
?`<article class="product-card product-card-pending"><div class="product-picture" style="--tone:${p.tone}"><span>PRODUCT ${p.code} / IMAGE PENDING</span></div><div class="product-info"><small>ODEBELL / COMING SOON</small><h3>${p.name}</h3><p>최종 상품 자료 확인 후 적용</p></div></article>`
:`<a class="product-card" href="./product.html?product_no=${new URL(p.url).searchParams.get('product_no')}"><div class="product-picture" style="--tone:${p.tone}"><span>PRODUCT IMAGE PENDING · ${p.code}</span></div><div class="product-info"><small>OFFICIAL STORE / ${p.code}</small><h3>${p.name}</h3><p>${p.price}${p.original!==p.price?' · 정상가 '+p.original:''}</p></div></a>`).join('');

if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}})},{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el))}else document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));
// Shared search overlay with verified featured products; server search runs on the official Cafe24 store.
function setupStoreSearch(){
const trigger=document.querySelector('.search-trigger'),panel=document.querySelector('#search-panel'),close=document.querySelector('.search-close');
if(!trigger||!panel)return;
const input=panel.querySelector('input[name="keyword"]'),suggestions=panel.querySelector('#search-suggestions');
const products=[['글로우 스킨핏 콜라겐 마스크','https://odebell.com/product/detail.html?product_no=1723'],['피토 뮤신 리페어 크림','https://odebell.com/product/detail.html?product_no=2059'],['애사비','https://odebell.com/product/detail.html?product_no=2021']];
const render=()=>{const q=input.value.trim().toLocaleLowerCase();suggestions.replaceChildren();if(!q)return;const items=products.filter(p=>p[0].toLocaleLowerCase().includes(q));items.forEach(([name,url])=>{const a=document.createElement('a');a.href=url;a.target='_blank';a.rel='noopener';a.textContent=name+' ↗';suggestions.appendChild(a)})};
const setOpen=open=>{panel.hidden=!open;trigger.setAttribute('aria-expanded',String(open));document.body.classList.toggle('search-open',open);if(open){input.focus()}else{trigger.focus()}};
trigger.addEventListener('click',()=>setOpen(panel.hidden));close.addEventListener('click',()=>setOpen(false));
input.addEventListener('input',render);
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!panel.hidden)setOpen(false)});
document.addEventListener('click',e=>{if(!panel.hidden&&!panel.contains(e.target)&&!trigger.contains(e.target))setOpen(false)});
}
setupStoreSearch();

// Secondary collection presentation, keeping Cafe24-bound content in one dataset.
const moreGrid=document.querySelector('#all-products-grid');
if(moreGrid&&grid){moreGrid.innerHTML=grid.innerHTML;}

// Retain original store navigation, mobile submenu access, and language menu.
function setupOriginalHeader(){
 const btn=document.querySelector('.menu-toggle'),nav=document.querySelector('#navigation');
 if(btn&&nav){btn.addEventListener('click',()=>{const expanded=nav.classList.toggle('open');btn.setAttribute('aria-expanded',String(expanded))});}
 document.querySelectorAll('.nav-group > a').forEach(a=>{a.addEventListener('click',e=>{if(window.innerWidth>700)return;const group=a.closest('.nav-group');if(!group.classList.contains('expanded')){e.preventDefault();document.querySelectorAll('.nav-group.expanded').forEach(x=>{if(x!==group)x.classList.remove('expanded')});group.classList.add('expanded')}})});
 const lang=document.querySelector('.language-trigger'),menu=document.querySelector('.language-panel');lang?.addEventListener('click',()=>{const opening=menu.hidden;menu.hidden=!opening;lang.setAttribute('aria-expanded',String(opening))});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu&&!menu.hidden){menu.hidden=true;lang.setAttribute('aria-expanded','false')}});
}
setupOriginalHeader();
