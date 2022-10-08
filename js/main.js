const burger = document.querySelector('.header__burger');
const menuBody = document.querySelector('.header__menu');
const formInput = document.querySelector('.form__input');
const formLabel = document.querySelector('.form__label');

document.addEventListener("click", menuNav);

function menuNav(event){
   if(event.target.closest('.header__burger')){
      burger.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   }
}

// document.addEventListener("mouseover", formHover);

// function formHover(event){
//    if(event.target.closest('.form__input')){
//       formLabel.classList.add('_hover');
//    }
//    else{
//       formLabel.classList.remove('_hover');
//    }
// }

