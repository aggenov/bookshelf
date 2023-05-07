import axios from 'axios';
import { bookMarkup } from "../JS/BestSellers/MarkupGenerators/Book";
const BASE_URL = 'https://books-backend.p.goit.global/books/';

const sectionRef = document.querySelector('.by-category-container');

document.addEventListener('click', onClickSeeMoreBtn);

function onClickSeeMoreBtn(e) {
    if (e.target.matches('.see-more-btn[data-category]')) {
        const categoryBook = e.target.getAttribute('data-category');
        sectionRef.innerHTML = '';
        renderCategoryList(categoryBook);
    };
}

async function GetBooksByCategory(category) {
    const resp = await axios.get(`${BASE_URL}category?category=${category}`);
    console.log(resp.data);
    return resp.data;
};

function getBooks(data, category) {
    return `
        <h3 class="best-sellers-header">${colorizeMarkup(category)}</h3>
        <ul class="bookshelf">
            ${data.map(bookMarkup).join('')}
        </ul>`;
};

async function renderCategoryList(category) {
    try {
        const data = await GetBooksByCategory(category);
        const markup = getBooks(data, category)
        sectionRef.insertAdjacentHTML('beforeend', markup);
    } catch (error) {
        console.log(error)
    };
};

function colorizeMarkup(textContent) {
  const wordArr = textContent.split(' ');
  const midpoint = Math.floor(wordArr.length / 2);

  const firstHalf = wordArr.slice(0, midpoint).join(' ');
  const secondHalf = wordArr.slice(midpoint).join(' ');

  return `${firstHalf} <span>${secondHalf}</span>`;
}
