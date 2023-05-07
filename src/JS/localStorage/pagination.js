import { saveStorage, loadStorage, removeStorage } from './localStorageAdd';

// Функція перевірки і виведення масиву для обробки
const booksArrayOld = () => {
  const booksArrayOld = loadStorage('books');
  if (booksArrayOld === null) {
    console.log('there are no books in local storage');
  } else {
    return booksArrayOld;
  }
};
// Функція визначення кількості сторінок
const amountOfPg = booksInPage => {
  const booksArrayOld = booksArrayOld();
  const pageCount = Math.ceil(booksArrayOld.length / booksInPage);
  return pageCount;
};
// Функуія визначеннявиведення результатів пагінацією
const paginationBooks = (booksInPage, ex) => {
  const booksArrayOld = booksArrayOld();
  const startIndex = (ex - 1) * booksInPage;
  let endIndex = ex * booksInPage;
  if (booksArrayOld.length <= endIndex) {
    endIndex = booksArrayOld.length - 1;
  }
  const exPagination = booksArrayOld.slice(startIndex, endIndex);
  return exPagination;
};
