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
  if (booksArrayOld === undefined || booksArrayOld === null) {
    booksArrayOld = [];
  }
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
  if (booksArrayOld === null || booksArrayOld === undefined) {
    console.log('there are no books in local storage');
    // перевірка наявності даного id в масиві id
  } else if (booksArrayOld.some(book => book.bookId === id)) {
    const newBooksArray = booksArrayOld.filter(book => book.bookId !== id);
    saveStorage('books', newBooksArray);
  } else {
    console.log('this book in not local storage');
  }
};
//очищення сховище від books
export const removeStorageBooks = () => {
  removeStorage('books');
};
// Зчитування масиву обєктів значень книг з сховища
export const loadStorageBooks = () => {
  return loadStorage('books')
}
