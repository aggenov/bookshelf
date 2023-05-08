import { getData } from './BestSellers/request';

const categoryList = document.querySelector('.categories-list');

// привет от андрея :)
getData('/books/category-list').then(data => {
  const markup = data.map(CategoryItem).join('');
  // console.log(markup);

  categoryList.insertAdjacentHTML('beforeend', markup);
});

function CategoryItem({ list_name }) {
  return `
    <li class="category-name" data-category=${list_name}>${list_name}</li>
  `;
}
