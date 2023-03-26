const hamburger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav');
const topbar = document.querySelector('.topbar');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
  topbar.classList.toggle('active');
});

navMenu.addEventListener('click', () => {
  navMenu.classList.remove('active');
  hamburger.classList.remove('active');
  topbar.classList.remove('active');
});
  