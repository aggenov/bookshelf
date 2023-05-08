import { bookMarkup } from './Book';

export function bookshelfMarkup({ list_name, books }) {
  return `
    <li class="popular-in-category">
      <h3 class="category-header">${list_name}</h3>
      <ul class="bookshelf">
        ${books.map(bookMarkup).join(' ')}
      </ul>
      <button class="see-more-btn" data-category="${list_name}">SEE MORE</button>
    </li>
  `;
}
