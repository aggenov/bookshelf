import { saveStorage, loadStorage, removeStorage } from './localStorageAdd';

// Запис в локальне сховище нової книги через обєкт значень і id
const saveStorage = (id, bookInfo) => {
  // считування масиву обєктів з сховища
  let booksArrayOld = loadStorage('books');
  if (booksArrayOld === null) {
    booksArrayOld = [];
  }
// перевірка наявності даного id в масиві id
  if (booksArrayOld.some(book => book.id === id)) {
    console.log('this book is already saved in local storage');
  } else {
    booksArrayOld.push(bookInfo)
    saveStorage('books', bookInfo);
  }
};
