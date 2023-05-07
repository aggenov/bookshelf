import { saveStorage, loadStorage, removeStorage } from './localStorageAdd';

// Запис в локальне сховище нової книги через обєкт значень і id
const removeElStorage = (id) => {
    // зчитування масиву обєктів з сховища
  const booksArrayOld = loadStorage('books');
  if (booksArrayOld === null) {
    console.log('there are no books in local storage');
    // перевірка наявності даного id в масиві id
  } else if (booksArrayOld.some(book => book.id === id)) {
    const newBooksArray = booksArrayOld.filter(book => book.id !== id);
    saveStorage('books', newBooksArray);
  } else {
    console.log('this book in not local storage');
  }
};
