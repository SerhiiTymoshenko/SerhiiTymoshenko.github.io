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


