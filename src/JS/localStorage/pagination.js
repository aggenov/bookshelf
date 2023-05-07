import { saveStorage, loadStorage, removeStorage } from './localStorageAdd';

// Функуія визначення кількості сторінок і виведення результатів пагінацією

const paginationBooks = (booksInPage, ex) => {
  const booksArrayOld = loadStorage('books');
  if (booksArrayOld === null) {
    console.log('there are no books in local storage');
  } else {
    const pageCount = Math.ceil(booksArrayOld.length / booksInPage);
    const startIndex = (ex - 1) * booksInPage;
    const endIndex = ex * booksInPage;
    const exPagination = booksArrayOld.slice(startIndex, endIndex);
    return exPagination;
  }
};
