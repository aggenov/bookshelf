import { loadStorageBooks } from '../localStorage/savingInStorage';
import { createBookMarkup } from './Markup/CardMarkup';

const shoppingList = document.querySelector('.shopping-cart');
const emptyList = document.querySelector('.empty-list');

function renderShoppingList(BooksArray) {
  if (loadStorageBooks().length == 0) {
    emptyList.classList.remove('visually-hidden');
    return;
  }

  if (Array.isArray(BooksArray)) {
    // проходимся мапом по каждому объекту из массива
    const cardMarkup = BooksArray.map(createBookMarkup).join(' ');

    shoppingList.insertAdjacentHTML('beforeend', cardMarkup);
  }
}

// вызов функции loadStorageBooks() вернет массив книг из локалсторедж.
// соответственно этот массив я передаю в функцию для отрисовки.
renderShoppingList(loadStorageBooks());
