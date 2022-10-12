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

// let uname = getElemrntById('name').value;
// let email = getElemrntById('email').value;
// let message = getElemrntById('message').value;

// let tg = {
//   token: "5500736755:AAGEQqzkirRvnB94ZiCaUC3qfkTbjh76s5A", // Your bot's token that got from @BotFather
//   chat_id: "353959478" // The user's(that you want to send a message) telegram chat id
// }

// /**
// * By calling this function you can send message to a specific user()
// * @param {String} the text to send
// *
// */
// function sendMessage(text){
//   const url = `https://api.telegram.org/bot${tg.token}/sendMessage` // The url to request

//   const obj = {
//       chat_id: tg.chat_id, // Telegram chat id
//       text: text // The text to send
//   };

//   const xht = new XMLHttpRequest();
//   xht.open("POST", url, true);
//   xht.setRequestHeader("Content-type", "application/json; charset=UTF-8");
//   xht.send(JSON.stringify(obj));
// }

// // Now you can send any text(even a form data) by calling sendMessage function.
// // For example if you want to send the 'hello', you can call that function like this:

// sendMessage("hello");

// // sendMessage("Имя"+uname+"Почта"+email+"Сообщение"+message);

// // document.addEventListener("click", formMessage);

// // function formMessage(event){
// //   if(event.target.closest('#btn_form')){
// //    sendMessage(uname);
// //    sendMessage(email);
// //    sendMessage(message);
// //   }
// // }

let tg = {
  token: "5500736755:AAGEQqzkirRvnB94ZiCaUC3qfkTbjh76s5A", // Your bot's token that got from @BotFather
  chat_id: "353959478" // The user's(that you want to send a message) telegram chat id
}

/**
* By calling this function you can send message to a specific user()
* @param {String} the text to send
*
*/
function sendMessage(text)
{
  const url = `https://api.telegram.org/bot${tg.token}/sendMessage` // The url to request

  const obj = {
      chat_id: tg.chat_id, // Telegram chat id
      text: text // The text to send
  };

  const xht = new XMLHttpRequest();
  xht.open("POST", url, true);
  xht.setRequestHeader("Content-type", "application/json; charset=UTF-8");
  xht.send(JSON.stringify(obj));
}

// Now you can send any text(even a form data) by calling sendMessage function.
// For example if you want to send the 'hello', you can call that function like this:

sendMessage("hello");