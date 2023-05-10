import {
  saveStorage,
  loadStorage,
  removeStorage,
} from '..//localStorage/localStorageAdd';

// Запис в локальне сховище нової книги через обєкт значень
export const saveStorageBooks = bookInfo => {
  const id = bookInfo._id;
  // считування масиву обєктів з сховища
  let booksArrayOld = loadStorage('books');

  // перевірка наявності даного id в масиві
  if (booksArrayOld.some(book => book._id === id)) {
    console.log('this book is already saved in local storage');
  } else {
    booksArrayOld.push(bookInfo);
    saveStorage('books', booksArrayOld);
  }
};

// Видалення книги через обєкт значень
export const removeElStorage = bookInfo => {
  const id = bookInfo._id;
  // зчитування масиву обєктів з сховища
  const booksArrayOld = loadStorage('books');

  // перевірка наявності даного id в масиві id
  if (booksArrayOld.some(book => book._id === id)) {
    const newBooksArray = booksArrayOld.filter(book => book._id !== id);
    saveStorage('books', newBooksArray);
  }
};
//очищення сховище від books
export const removeStorageBooks = () => {
  removeStorage('books');
};
// Зчитування масиву обєктів значень книг з сховища
export const loadStorageBooks = () => {
  return loadStorage('books');
};
