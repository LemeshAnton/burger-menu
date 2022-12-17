const burgerBtn = document.querySelector('.header__button');
const menu = document.querySelector('.header__menu');
burgerBtn.addEventListener('click', function(){
    burgerBtn.classList.toggle('active');
    menu.classList.toggle('active');
});