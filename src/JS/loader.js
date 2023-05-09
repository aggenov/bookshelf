const loader = document.querySelector('.mask');

// решение со слушателем не подходит, поскольку картинки загружаются динамически

// window.addEventListener('load', () => {
//   loader.style.display = 'none';
// });

// на картинку я (андрей) передаю эту функцию как колбек в атрибут onload
export function disableLoader() {
  loader.style.display = 'none';
  console.log('loaded');
}
