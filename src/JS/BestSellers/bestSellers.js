import throttle from 'lodash.throttle';
import { setAmountOfDisplayedBooks } from './setAmountOfDisplayedBooks';
import { bookshelfMarkup } from './MarkupGenerators/Bookshelf';
import { getData } from './request';

const sectionRef = document.querySelector('.bestsellers-container');

export async function renderPopularBooks(node) {
  getData('/books/top-books').then(data => {
    // generate markup of all bestsellers
    const markup = data.map(bookshelfMarkup).join(' ');

    node.insertAdjacentHTML('beforeend', markup);

    // controls how many books to display: 1, 3 or 5
    bookshelfsRef = document.querySelectorAll('.bookshelf');
    setAmountOfDisplayedBooks(bookshelfsRef);
  });
}

// render section
renderPopularBooks(sectionRef);

window.addEventListener('resize', throttle(setAmountOfDisplayedBooks, 1000));
