import { bookMarkup } from './Book';

export function bookshelfMarkup({ list_name, books }) {
  return `
    <h3 class="category-header">${list_name}</h3>
    <div class="bookshelf">
      ${books.map(bookMarkup).join(' ')}
    </div>
    <button class="see-more-btn">SEE MORE</button>
  `;
}
