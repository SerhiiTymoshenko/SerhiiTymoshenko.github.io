function setMarginLeft() {
  const container = document.querySelector('.container');
  const SecContainer = document.querySelector('.section1__container');
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

window.addEventListener('load', setMarginLeft);

window.addEventListener('resize', setMarginLeft);