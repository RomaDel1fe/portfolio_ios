$(document).ready(function(){
  $('.header__menu a').each(function(){
    let location = window.location.protocol + '//' + window.location.host + window.location.pathname;
    let link = this.href;
    if(location == link){
        $(this).addClass('_active');
    }
  })
})

$(document).ready(function(){
  $('.accordion__title').click(function(event){
     if($('.accordion').hasClass('one')){
        $('.accordion__title').not($(this)).removeClass('_active');
        $('.accordion__content').not($(this).next()).slideUp(300);
     }
     $(this).toggleClass('_active').next().slideToggle(400);
  });
});

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

var content = ' I study web technologies every day and this is my portfolio.';
var ele = '<span>' + content.split('').join('</span><span>') + '</span>';

$(ele).hide().appendTo('.hello__text p').each(function (i) {
  $(this).delay(600);  
  $(this).delay(50 * i).css({
        display: 'inline',
        opacity: 0
    }).animate({
        opacity: 1
    }, 50);
});


"use strict"

document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form');
	const loader = document.querySelector('.loader-ios');
  const handThis = document.querySelector('.contact__hand');
  const handOk = document.querySelector('.thank__hand');
  const thank = document.querySelector('.contact__thank');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);

		let formData = new FormData(form);

		if (error === 0) {
			form.classList.add('_sending');
      loader.classList.add('_sending');
			let response = await fetch('sendmail.php', {
				method: 'POST',
				body: formData
			});
			if (response.ok) {
				let result = await response.json();
				// alert(result.message);
				form.reset();
				form.classList.remove('_sending');
        loader.classList.remove('_sending');
        handThis.classList.remove('_active');
        form.classList.add('_deactivate');
        handThis.classList.add('_deactivate');
        thank.classList.add('_active');
        handOk.classList.add('_active');
			} else {
				alert("Ошибка");
				form.classList.remove('_sending');
        loader.classList.remove('_sending');
			}
		} else {
			// alert('Заполните обязательные поля');
		}
	}


	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('_email')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
				formAddError(input);
				error++;
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}
	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
	//Функция теста email
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}
});

const contactHand = document.querySelector('.contact__hand');

document.addEventListener("click", inputTracker);

function inputTracker(event){
  if(event.target.closest('#email')){
    contactHand.classList.add('_tracker-e');
  }else{
    contactHand.classList.remove('_tracker-e');
  }
  if(event.target.closest('#message')){
    contactHand.classList.add('_tracker-m');
  }else{
    contactHand.classList.remove('_tracker-m');
  }
}

