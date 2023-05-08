const btnUp = document.querySelector('.btn-up');
window.addEventListener('scroll', function () {
  btnUp.hidden = scrollY < document.documentElement.clientHeight / 2;
});

btnUp.onclick = function () {
  window.scrollTo(scrollX, 0);
  // после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
};
