// script.js - simple interactions
document.addEventListener('DOMContentLoaded', function(){
  // navbar scroll
  const navbar = document.querySelector('.navbar');
  if(navbar) window.addEventListener('scroll', ()=> navbar.classList.toggle('scrolled', window.scrollY>30));

  // carousel
  const slidesEl = document.querySelector('#slides');
  if(slidesEl){
    const slides = Array.from(slidesEl.children);
    let index = 0;
    const delay = 4500;
    let timer = setInterval(()=>{ index=(index+1)%slides.length; slidesEl.style.transform = `translateX(-${index*100}%)`; updateDots(index); }, delay);
    document.querySelectorAll('.dot').forEach((d,i)=> d.addEventListener('click', ()=> { index=i; slidesEl.style.transform = `translateX(-${index*100}%)`; updateDots(i); }));
    function updateDots(i){ document.querySelectorAll('.dot').forEach((dd,ii)=> dd.classList.toggle('active', ii===i)); }
  }
});