const burger = document.querySelector('.header__burger');
const menuBody = document.querySelector('.header__menu');

document.addEventListener("click", menuNav)

function menuNav(event){
   if(event.target.closest('.header__burger')){
      burger.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   }
}