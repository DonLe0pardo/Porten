const burger = document.querySelector('.burger');
const menu = document.querySelector(".header-mobil");

  (function() {
    burger.addEventListener('click', () => {
      menu.classList.toggle('header-mobil__active');
    });
}());


(function() {
  burger.addEventListener('click', () => {
    burger.classList.toggle('burger__active');
  });
}());







