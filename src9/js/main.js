'use strict'; // указываем использование строгого режима

document.addEventListener('click', documentClick);

function documentClick(e) { 
    const targetItem = e.target; // определяем targetItem как e.target
    console.log(targetItem);
    if (targetItem.closest('.icon-menu')) { // вызываем метод closest на targetItem
        document.documentElement.classList.toggle('menu-open');
    }
}

function documentClick(e) {
  const targetItem = e.target;
  if (targetItem.closest('.icon-menu')) {
    document.documentElement.classList.toggle('menu-open');
  } else if (targetItem.closest('.menu') === null) {
    document.documentElement.classList.remove('menu-open');
  } else if (targetItem.closest('.menu a')) {
    document.documentElement.classList.remove('menu-open');
    e.stopPropagation();
    e.preventDefault();
  }
}


const menuLinks = document.querySelectorAll('.menu a');
menuLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.documentElement.classList.remove('menu-open');
    setTimeout(() => {
      window.location.href = e.target.href;
    }, 500);
  });
});



function setMarginLeft1() {
  const container = document.querySelector('.container');
  const SecContainer = document.querySelector('.section3__container');
  const containerWidth = getComputedStyle(SecContainer).width;
  const containerPadding = getComputedStyle(container).paddingLeft;
  const windowWidth = window.innerWidth;
  const marginLeft = (windowWidth - parseInt(containerWidth) - parseInt(containerPadding) * 2) / 2;
  const newWidth = parseInt(containerWidth) + marginLeft + 30;
  container.style.width = `${newWidth}px`;
  if(marginLeft > 0){
    container.style.marginLeft = `${marginLeft}px`;
  }
}

window.addEventListener('load', setMarginLeft1);

window.addEventListener('resize', setMarginLeft1);






// SECTION 9
const btn = document.querySelector('.section9__button');
const cards = Array.from(document.querySelectorAll('.section9__box'));


window.addEventListener('resize', event => {
  if (event.target.window.innerWidth > 991.98) response1();
  if (event.target.window.innerWidth <= 991.98 && event.target.window.innerWidth > 767.98) response2();
  if (event.target.window.innerWidth <= 767.98) response3();
})


function openCatalog() {
  btn.addEventListener('click', () => {
    cards.forEach(item => item.classList.remove('hidden'));
    btn.classList.add('hidden');
  });
}

function response1() {
  if (window.innerWidth > 901) {
    btn.classList.add('hidden');

    cards.forEach((item, index) => {
      item.classList.add('hidden');
      if (index <= 9) {
        item.classList.remove('hidden');
      } else if (index > 1) {
        btn.classList.remove('hidden');
      }
    });
    openCatalog();
  }
}
response1();


function response2() {
  if (window.innerWidth <= 901 && window.innerWidth > 767.98) {
    btn.classList.add('hidden');

    cards.forEach((item, index) => {
      item.classList.add('hidden');
      if (index <= 7) {
        item.classList.remove('hidden');
      } else if (index > 1) {
        btn.classList.remove('hidden');
      }
    });
    openCatalog();
  }
}
response2();


function response3() {
  if (window.innerWidth <= 767.98) {
    btn.classList.add('hidden');

    cards.forEach((item, index) => {
      item.classList.add('hidden');
      if (index <= 3) {
        item.classList.remove('hidden');
      } else if (index > 1) {
        btn.classList.remove('hidden');
      }
    });
    openCatalog();
  }
}
response3();


// кнопка "Вернуться на верх"
$('.back-to-top').click(function () {
    $('body,html').animate({ scrollTop: 0}, 800); // 800 - Скорость анимации
});

$(window).scroll(function() { // Отслеживаем начало прокрутки
    let scrolled = $(window).scrollTop(); // Вычисляем сколько было прокручено.

    if(scrolled > 350) { // Если высота прокрутки больше 350 - показываем кнопку
        $('.back-to-top').addClass('active');
    } else {
        $('.back-to-top').removeClass('active');
    }
});
