import axios from 'axios';
import { getData } from './BestSellers/request';
import { BASE_URL } from './home-by-category';

const categoryList = document.querySelector('.categories-list');

getData('/books/category-list').then(console.log);

async function GetCategoryList() {
  const resp = await axios.get(`${BASE_URL}category-list`);
  console.log(resp.data);
  return resp.data;
}

function renderCategories(data) {
  return data
    .map(
      data =>
        `<li>
            <button type="button" class="category-item" data-category="${data.list_name}>${data.list_name}</button>
        </li>`
    )
    .join('');
}

async function titlesCategories() {
  try {
    const data = await GetCategoryList();
    const markup = renderCategories(data);
    // console.log(markup);

    categoryList.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    console.log(error);
  }
}
titlesCategories();
