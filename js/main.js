const burger = document.querySelector('.header__burger');
const menuBody = document.querySelector('.header__menu');
const formInput = document.querySelector('.form__input');
const formLabel = document.querySelector('.form__label');

document.addEventListener("click", menuNav);

function menuNav(event){
   if(event.target.closest('.header__burger')){
      burger.classList.toggle('_active');
      menuBody.classList.toggle('_active');
      document.body.classList.toggle('lock')
   }
}

var minOffset = 55;
  window.onscroll = function() { 
    let has_class = document.body.classList.contains("is_scrolled");
 
    if (minOffset < document.documentElement.scrollTop ) {
      if (!has_class) {
          document.body.classList.add("is_scrolled");
          menuBody.classList.add('_scrolled')
          burger.classList.add('_scrolled')
      } 
    } else if (has_class) {
      document.body.classList.remove("is_scrolled");
      menuBody.classList.remove('_scrolled');
      burger.classList.remove('_scrolled');
    } 
  }

