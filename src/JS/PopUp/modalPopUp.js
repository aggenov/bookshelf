import { getData } from '../BestSellers/request';
import { createModalMarkup } from './Markup/ModalMarkup';

import {
  saveStorageBooks,
  removeElStorage,
  loadStorageBooks,
} from '../localStorage/savingInStorage';

const modalBookInfoRef = document.querySelector('.modal-book-info');

document.addEventListener('click', event => {
  if (event.target.matches('.book-item[data-modal-id]')) {
    // если таргет это элемент книги с атрибутом, то забираем значение атрибута
    const bookId = event.target.getAttribute('data-modal-id');

    // открываем модалку
    openModalWindow();

    // отправляем запрос за информацией о конкретной книге
    getData(`/books/${bookId}`).then(bookInfo => {
      // создаем разметку модалки из полученной от бекенда информации
      const markup = createModalMarkup(bookInfo);

      // вставляем через innerHTML, чтоб удалить старую разметку, и добавить новую
      modalBookInfoRef.innerHTML = markup;
    });
  }

  // сохранение книги в localstorage (button)
  if (event.target.matches('.add-to-shoping-list[data-book-id]')) {
    const bookId = event.target.getAttribute('data-book-id');
    const isAdded = loadStorageBooks().some(book => book._id === bookId);

    getData(`/books/${bookId}`).then(data => {
      // если нет - сохраняем
      if (!isAdded) {
        saveStorageBooks(data);
      }
      // если есть - удаляем
      if (isAdded) {
        removeElStorage(data);
      }

      // перерисовка в зависимости от актуального localStorage
      modalBookInfoRef.innerHTML = createModalMarkup(data);
    });
  }
});


const refs = {
  backdropForModal: document.querySelector('.backdrop-modal'),
  bookDescription: document.querySelector('.modal'),
  closeModalWindow: document.querySelector('.close-modal-single-book'),
  body: document.querySelector('body'),
};

// закриття модалки кліком по бекдропу
refs.backdropForModal.addEventListener('click', event => {
  if (event.target.matches('.backdrop-modal')) {
    onCloseWindow();
  }
});

// закриття модалки натисканням на клавішу Escape
document.addEventListener('keydown', evt => {
  if (evt.key === 'Escape') {
    onCloseWindow();
  }
});

// закриття модалки по кліку на іконку close +
refs.closeModalWindow.addEventListener('click', onCloseWindow);

function onCloseWindow() {
  refs.backdropForModal.classList.add('is-hidden');
  refs.body.classList.remove('modal-open');

  // при закрытии модалки удаляем содержимое
  modalBookInfoRef.innerHTML = '';
}

function openModalWindow() {
  refs.backdropForModal.classList.remove('is-hidden');
  refs.body.classList.add('modal-open');
}

