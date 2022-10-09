$(document).ready(function(){
  $('.header__menu a').each(function(){
    let location = window.location.protocol + '//' + window.location.host + window.location.pathname;
    let link = this.href;
    if(location == link){
        $(this).addClass('_active');
    }
  })
})

const burger = document.querySelector('.header__burger');
const menuBody = document.querySelector('.header__menu');
const menuLink = document.querySelector('.header__link');
const formInput = document.querySelector('.form__input');
const formLabel = document.querySelector('.form__label');
const animItems = document.querySelectorAll('._anim');

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
onscroll()


if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll(){
    for (let index = 0; index < animItems.length; index++){
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight){
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
        animItem.classList.add('_active');
      } else{
        animItem.classList.remove('_active');
      }
    }
  }
}
function offset(el){
  const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
}

animOnScroll();