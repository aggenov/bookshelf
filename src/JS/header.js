import { getUserData } from './autorisation';
import { clearUserData } from './autorisation';
import { parsData } from './autorisation';

const burgerMenu = document.querySelector('.modal-mobile-menu');
const btnOpen = document.querySelector('.header-burger');
const closeModalMenu = document.querySelector('.mobile-close-btn');

export const checkbox = document.querySelector('.theme-switch');
export const colorTheme = localStorage.getItem('ui-theme');

const headerNav = document.querySelector('.header-nav');
const userBar = document.querySelector('.dropdown');
const btnSignup = document.querySelector('.btn-signup');
const btnLogout = document.querySelector('.btn-logout');

//__________________________ isNonAutorised User  --  Hidden nav menu
(function checkUserKey() {
  if (getUserData()) {
    headerNav.classList.remove('is-hidden');
    userBar.style.display = 'flex';
    btnSignup.style.display = 'none';
  } else {
    headerNav.classList.add('is-hidden');
    userBar.style.display = 'none';
    btnOpen.style.display = 'none';
    btnSignup.style.display = 'flex';
  }
})();

//
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
  burgerMenu.style.display = 'block';
});

closeModalMenu.addEventListener('click', () => {
  burgerMenu.style.display = 'none';
});

checkbox.addEventListener('click', toggleCheckbox);

function toggleCheckbox() {
  if (!checkbox.attributes.type.ownerElement.checked) {
    localStorage.setItem('ui-theme', 'light');
  } else {
    localStorage.setItem('ui-theme', 'dark');
  }
}

//   UserBar
//--------------------------------------------------
// устанавливает имя полбзователя на кнопку
userBar.children[0].children[1].textContent = parsData.userName;

userBar.addEventListener('click', myFunction);
// открывает выпадающее меню из кнопки
function myFunction() {
  document.getElementById('myDropdown').classList.toggle('show');
}

// Закрывает выпадающее меню, если пользователь щелкает за его пределами
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName('dropdown-content');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
