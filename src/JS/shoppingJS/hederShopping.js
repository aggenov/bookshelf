import { colorTheme } from '../colorTheme';

const modalMenuShopping = document.querySelector('#modalShopping');
const btnOpen = document.querySelector('#openShopping');
const closeModalMenu = document.querySelector('#closeShopping');
export const checkbox = document.querySelector('#switch');
// export const checkbox = document.querySelector('#mob-switch');
// console.dir(checkbox);
export const colorTheme = localStorage.getItem('ui-theme');

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
