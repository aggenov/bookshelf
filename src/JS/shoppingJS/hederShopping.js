import { colorTheme } from '../colorTheme';

const burgerMenu = document.querySelector('.modal-mobile-menu');
const btnOpen = document.querySelector('.header-burger');
const closeModalMenu = document.querySelector('.mobile-close-btn');

export const checkbox = document.querySelector('.theme-switch');
export const colorTheme = localStorage.getItem('ui-theme');

const headerNav = document.querySelector('.header-nav');
const userBar = document.querySelector('.dropdown');
const btnLogout = document.querySelector('.btn-logout');

(function checkColorTheme() {
  if (!colorTheme) {
    localStorage.setItem('ui-theme', 'light');
  }
  if (colorTheme === 'light') {
    checkbox.attributes.type.ownerElement.checked = false;
  } else {
    checkbox.attributes.type.ownerElement.checked = true;
  }
})();

btnOpen.addEventListener('click', () => {
  modalMenuShopping.style.display = 'block';
});

closeModalMenu.addEventListener('click', () => {
  modalMenuShopping.style.display = 'none';
});

checkbox.addEventListener('click', toggleCheckbox);

function toggleCheckbox() {
  if (!checkbox.attributes.type.ownerElement.checked) {
    localStorage.setItem('ui-theme', 'light');
  } else {
    localStorage.setItem('ui-theme', 'dark');
  }
}
