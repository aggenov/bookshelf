import {
  loadStorageBooks,
  removeElStorage,
} from '../localStorage/savingInStorage';
import { createBookMarkup } from './Markup/CardMarkup';

const shoppingList = document.querySelector('.shopping-cart');
const emptyList = document.querySelector('.empty-list');
const supportBlock = document.querySelector('.support-block');

if (supportBlock) {
  supportBlock.classList.add('support-in-shopping-list');
}

function renderShoppingList(BooksArray) {
  if (BooksArray.length != 0) {
    // проходимся мапом по каждому объекту из массива
    const cardMarkup = BooksArray.map(createBookMarkup).join(' ');

    shoppingList.insertAdjacentHTML('beforeend', cardMarkup);
  }

  emptyListState();
}

// вызов функции loadStorageBooks() вернет массив книг из локалсторедж.
// соответственно этот массив я передаю в функцию для отрисовки.
renderShoppingList(loadStorageBooks());

document.addEventListener('click', e => {
  if (e.target.matches('.shopping-list-remove-button[data-shopping-list-id]')) {
    // удаляем в localStorage
    const id = e.target.getAttribute('data-shopping-list-id');
    removeElStorage({ _id: id });

    // обновляем интерфейс
    e.target.closest('.shopping-list-item').classList.add('visually-hidden');
    emptyListState();
  }
});

function emptyListState() {
  if (loadStorageBooks().length == 0) {
    emptyList.classList.remove('visually-hidden');
    return;
  }
}
