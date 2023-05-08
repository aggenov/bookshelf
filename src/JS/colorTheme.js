import { colorTheme } from './header';
console.log(colorTheme);

const option = {
  main: document.getElementsByTagName('body'),
  section: document.getElementsByTagName('section'),
};
console.dir(option.main[0].style);

if (colorTheme === 'dark') {
  option.main[0].style.backgroundColor = '#111111';
  option.main[0].style.color = '#ffffff';
  option.section[0].style.color = '#ffffff';
  option.section[0].style.backgroundColor = '#111111';
  console.log(option.main[0].style.backgroundColor);
  console.log(option.main[0].style.color);
}
