import { colorTheme, checkbox } from './header';
console.log('colorTheme: ', colorTheme);

//устанавливаем для root: атрибут ui-theme === 'dark'
document.addEventListener('DOMContentLoaded', () => {
  init();
});

function init() {
  if (localStorage.getItem('ui-theme') === 'dark') {
    document.documentElement.setAttribute('ui-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('ui-theme');
  }
  console.log(document.documentElement.hasAttribute('ui-theme'));
}

//слушатель checkbox для root: атрибут ui-theme === 'dark'
checkbox.addEventListener('click', function () {
  if (document.documentElement.hasAttribute('ui-theme')) {
    document.documentElement.removeAttribute('ui-theme');
  } else {
    document.documentElement.setAttribute('ui-theme', 'dark');
  }
});
