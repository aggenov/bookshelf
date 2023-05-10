import axios from 'axios';
import { bookMarkup } from "../JS/BestSellers/MarkupGenerators/Book";
import { getData } from "../JS/BestSellers/request";
import { isActiveCategoryItem, isDisableCategoryItem } from "../JS/categories";
export const BASE_URL = 'https://books-backend.p.goit.global/books/';

export const sectionRef = document.querySelector('.by-category-container');

// Додав слухача по кліку на книгу
// document.addEventListener('click', onClickBookItem);
// Функція, яка записує у localStorage клацнуту книгу
// function onClickBookItem(e) {
// 	if (e.target.matches('.book-item[data-modal-id]')) {
// 		const idBook = e.target.getAttribute('data-modal-id');

// 		getData(`/books/${idBook}`).then(data => {
// 			const bookById = data;
// 			localStorage.setItem('data-book-by-id', JSON.stringify(bookById));
// 		});
// 	};
// };

document.addEventListener('click', onClickSeeMoreBtn);

function onClickSeeMoreBtn(e) {
  if (e.target.matches('.see-more-btn[data-category]')) {
		const categoryBook = e.target.getAttribute('data-category');

		isDisableCategoryItem();
		isActiveCategoryItem(categoryBook);

    sectionRef.innerHTML = '';
		renderCategoryList(categoryBook, sectionRef);
  };
}

async function getBooksByCategory(category) {
  const resp = await axios.get(`${BASE_URL}category?category=${category}`);
  return resp.data;
};

function getBooks(data, category) {
  return `
    <h3 class="best-sellers-header">${colorizeMarkup(category)}</h3>
    <ul class="bookshelf" data-category="${category}">
      ${data.map(bookMarkup).join('')}
    </ul>`;
};

export async function renderCategoryList(category, node) {
  try {
    const data = await getBooksByCategory(category);
		const markup = getBooks(data, category);

    node.insertAdjacentHTML('beforeend', markup); 
  } catch (error) {
      console.log(error);
  };
};

function colorizeMarkup(textContent) {
  const wordArr = textContent.split(' ');
  const midpoint = Math.floor(wordArr.length / 2);

  const firstHalf = wordArr.slice(0, midpoint).join(' ');
  const secondHalf = wordArr.slice(midpoint).join(' ');

  return `${firstHalf} <span>${secondHalf}</span>`;
};
