import throttle from 'lodash.throttle';
import { setAmountOfDisplayedBooks } from './setAmountOfDisplayedBooks';
import { bookshelfMarkup } from './MarkupGenerators/Bookshelf';
import { getData } from './request';
import { disableLoader } from '../loader';

export const sectionRef = document.querySelector('.home-categories');
let bookshelfsRef = null; // will be updated after render

export async function renderPopularBooks(node) {
  getData('/books/top-books').then(data => {
    // generate markup of all bestsellers
    const markup = data.map(bookshelfMarkup).join(' ');

    node.insertAdjacentHTML('beforeend', markup);

    // просто беру первую картинку из динамической разметки и вешаю onload
    const imageToPlaceLoader = document.querySelector('.book-image-container');
    imageToPlaceLoader.onload = disableLoader;

    // controls how many books to display: 1, 3 or 5
    bookshelfsRef = document.querySelectorAll('.bookshelf');
    setAmountOfDisplayedBooks(bookshelfsRef);
  });
}

// render section
renderPopularBooks(sectionRef);

window.addEventListener(
  'resize',
  throttle(() => {
    setAmountOfDisplayedBooks(bookshelfsRef);
  }, 1000)
);
