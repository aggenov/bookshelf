import axios from 'axios';
import { sectionRef } from '../JS/BestSellers/bestSellers';
import { bookMarkup } from "../JS/BestSellers/MarkupGenerators/Book";
const BASE_URL = 'https://books-backend.p.goit.global/books/';

document.addEventListener('click', (e) => {
    if (e.target.matches('.see-more-btn[data-category]')) {
        const categoryBook = e.target.getAttribute('data-category');
        sectionRef.innerHTML = '';
        renderCategoryList(categoryBook);
    };
});

async function GetBooksByCategory(category) {
    const resp = await axios.get(`${BASE_URL}category?category=${category}`);
    console.log(resp.data);
    return resp.data;
};

function getBooks(data, category) {
    return `
        <h3 class="best-sellers-header">${category}</h3>
        <div class="bookshelf">
            ${data.map(bookMarkup).join('')}
        </div>`;
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