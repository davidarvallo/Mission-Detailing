const brand = document.querySelector('.brand');
let scheduled = false;
function updateLogo() {
  const progress = Math.min(window.scrollY / 230, 1);
  brand.style.opacity = String(1 - progress);
  brand.style.transform = `translateY(${-progress * 12}px)`;
  brand.style.visibility = progress === 1 ? 'hidden' : 'visible';
  scheduled = false;
}
window.addEventListener('scroll', () => {
  if (!scheduled) { scheduled = true; requestAnimationFrame(updateLogo); }
}, { passive: true });
updateLogo();
