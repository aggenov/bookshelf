let offset = 0;
const sliderLine = document.querySelector('.slider-line');
const buttonDown = document.querySelector('.slider-down');
const buttonUp = document.querySelector('.slider-up');

buttonDown.addEventListener('click', function () {
  offset = offset - 52;
  if (offset < -260) {
    offset = 0;
    // buttonDown.style.visibility = "hidden";
    // buttonUp.style.visibility = "visible";
  }
  sliderLine.style.top = offset + 'px';
});
