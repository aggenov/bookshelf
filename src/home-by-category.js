import axios from 'axios';
const BASE_URL = 'https://books-backend.p.goit.global/books/';

const refs = {
    seeMoreBtn: document.querySelector('.see-more-btn'),
    categoryBooksList: document.querySelector('.category-books-list'),
    categoryBooksTitle: document.querySelector('.category-books-title'),
    categoryBooksSection: document.querySelector('.category-books-sec')
}

refs.seeMoreBtn.addEventListener('click', onClick)

async function GetBooksByCategory(category) {
    const resp = await axios.get(`${BASE_URL}category?category=${category}`);
    console.log(resp.data);
    return resp.data;
};

async function GetCategoryList() {
    const resp = await axios.get(`${BASE_URL}category-list`);
    console.log(resp.data[0].list_name);
    
    return GetBooksByCategory(resp.data[0].list_name)
};

function renderCategoryList(data) {
    const categoryBooksTitle = document.createElement("h2");
    
    categoryBooksTitle.classList.add("category-books-title")
    
    categoryBooksTitle.textContent = data[0].list_name;
    console.log(categoryBooksTitle)
    refs.categoryBooksList.before(categoryBooksTitle);
    const markup = data.map((book) => 
        `<li class="book-card-preview">
            <img class="book-img-preview" src="${book.book_image}" alt="${book.description}">
            <h3 class="book-title-preview">${book.title}</h3>
            <p class="book-name-preview">${book.author}</p>
        </li>`
    ).join('');

    refs.categoryBooksList.insertAdjacentHTML('beforeend', markup);
};

async function getFirstGallary() {
    try {
        const data = await GetCategoryList();
        console.log(data)
        renderCategoryList(data)
    } catch (error) {
        console.log(error)
    };
};

function onClick(e) {
    refs.categoryBooksSection.innerHTML = '';
    getFirstGallary()
};