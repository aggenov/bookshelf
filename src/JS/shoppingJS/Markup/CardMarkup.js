
// import remove from './images/svg/icons.svg#erase';
// ‘./images/svg/erase.svg’ - отдельно
// ‘./images/svg/icons.svg#erase’ - в спрайте
import { createShopIcon } from '../../PopUp/Markup/BookshopMarkup';

export function createBookMarkup({
  _id,
  book_image,
  title,
  author,
  list_name,
  description,
  buy_links,
}) {
  return `
    <li class="book-in-shopping-list shopping-list__item" data-modal-id="${_id}">
      <button
        type="button"
        data-action="delete"
        value="remove"
        class="shopping-button shopping-list-button"
        src="${remove}"
      >
      </button>

      <div class="придумайте сами">
        <img 
          class="shopping-list__img" 
          src="${book_image}" 
          alt="${title}"
          loading="lazy"
        />
      </div>

      <p class="shopping-list__title">${title}</p>
      <p class="придумайте сами">${list_name}</p>
      <p class="придумайте сами">${description}</p>
      <p class="придумайте сами">${author}</p>
      <ul class="list-link-book-shop shopping-list-button">
      ${buy_links.map(createShopIcon).join('')}
      </ul>
    </li>
    `;
}

// говорит андрей!
// СТИЛИ ДЛЯ list-link-book-shop ТРОГАТЬ НЕЛЬЗЯ ПОТОМУ ЧТО ОНИ ОБЩИЕ
