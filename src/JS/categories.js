import axios from 'axios';
import { getData } from './BestSellers/request';
import { BASE_URL } from './home-by-category';

const categoryList = document.querySelector('.categories-list');

// привет от андрея :)
getData('/books/category-list').then(data => {
  console.log(data);
  const markup = data.map(CategoryItem).join('');

  // console.log(markup);
  categoryList.insertAdjacentHTML('beforeend', markup);
});

function CategoryItem({ list_name }) {
  return `
    <li class="category-name" data-category=${list_name}>${list_name}</li>
  `;
}

// все что ниже нам больше не нужно :)

// async function GetCategoryList() {
//   const resp = await axios.get(`${BASE_URL}category-list`);
//   console.log(resp.data);
//   return resp.data;
// }

// function categoriesMarkup(data) {
//   return data
//     .map(
//       ({ list_name }) =>
//         `<li>
//             <button type="button" class="category-item" data-category="${list_name}>${list_name}</button>
//         </li>`
//     )
//     .join(' ');
// }

// async function titlesCategories() {
//   try {
//     const data = await GetCategoryList();
//     const markup = renderCategories(data);
//     // console.log(markup);
//   } catch (error) {
//     console.log(error);
//   }
// }
// titlesCategories();
