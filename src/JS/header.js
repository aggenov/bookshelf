const burgerMenu = document.querySelector('.modal-mobile-menu');
const btnOpen = document.querySelector('.header-burger');
const closeModalMenu = document.querySelector('.mobile-close-btn');
const checkbox = document.querySelector('.switch');
export const colorTheme = localStorage.getItem('ui-theme');

(function checkColorTheme() {
  if (!colorTheme) {
    localStorage.setItem('ui-theme', 'light');
  }
  if (colorTheme === 'light') {
    checkbox.childNodes[1].checked = false;
  } else {
    checkbox.childNodes[1].checked = true;
  }
})();

btnOpen.addEventListener('click', () => {
  burgerMenu.style.display = 'block';
});

closeModalMenu.addEventListener('click', () => {
  burgerMenu.style.display = 'none';
});

checkbox.addEventListener('click', toggleCheckbox);

function toggleCheckbox() {
  if (!checkbox.childNodes[1].checked) {
    localStorage.setItem('ui-theme', 'light');
  } else {
    localStorage.setItem('ui-theme', 'dark');
  }
}
