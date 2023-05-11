import Pagination from "tui-pagination";
import 'tui-pagination/dist/tui-pagination.min.css';
import { createBookMarkup } from "./shoppingJS/Markup/CardMarkup";
import { loadStorageBooks } from "./localStorage/savingInStorage";

console.log(loadStorageBooks());

const containerPagi = document.querySelector('.tui-pagination')
const booksFromLS = JSON.parse(localStorage.getItem('books')) || [];
const itemsPerPage = 3;
let currentPage = 1;

function renderBooksPage(books, page){
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const showBooks = books.slice(startIndex, endIndex)
    const booksList = document.querySelector('.shopping-cart');

    booksList.innerHTML = '';

    showBooks.forEach((book) =>{
        const bookMarkup = createBookMarkup(book);
        booksList.insertAdjacentHTML('beforeend', bookMarkup);
    })
};

const options = {
    totalItems: booksFromLS.length,
    itemsPerPage: itemsPerPage,
    visiblePages: 3,
    page: currentPage,
    centerAlign: true,
    pageLinkClassName: 'tui-page-link',
    currentPageClassName: 'tui-page-current',
    usageStatistics: false,
    template: {
        page: '<a href="#" class="tui-page-btn">{{page}}</a>',
        currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
        moveButton:
          '<a href="#" class="tui-page-btn tui-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
          '</a>',
        disabledMoveButton:
          '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
          '</span>',
        moreButton:
          '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
          '<span class="tui-ico-ellip">...</span>' +
          '</a>',
    },
}

const pagination = new Pagination(containerPagi, options);

pagination.on('afterMove', (e) => {
    currentPage = e.page;
    options.page = currentPage;
    renderBooksPage(booksFromLS, currentPage);
    // pagination.reset(e.page);
});

renderBooksPage(booksFromLS, currentPage);