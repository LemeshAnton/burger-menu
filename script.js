const burgerBtn = document.querySelector('.header__button');
const menu = document.querySelector('.header__menu');
const closeTitle = document.querySelector('.section__title--close');
const openTitle = document.querySelector('.section__title--open');


  burgerBtn.addEventListener('click', function(){
    burgerBtn.classList.toggle('active');
    menu.classList.toggle('active');
    closeTitle.classList.toggle('close');
    openTitle.classList.toggle('open');
});
