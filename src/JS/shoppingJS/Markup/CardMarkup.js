

// import Erase from './images/svg/icons.svg#erase' 
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
  return `<div class="shopping-list__item">
    <li class="book-in-shopping-list" data-modal-id="${_id}">
      <button
        type="button"
        data-action="delete"
        value="remove"
        class="shopping-button shopping-list-button"

        <svg class="erase" width="30px" height="30px">
        <use href="./images/svg/icons.svg#erase"></use>
      </svg>
      
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
      <p class="shopping-list__titleText">${list_name}</p>
      <p class="shopping-list__text">${description}</p>
      <p class="shopping-list__author">${author}</p>
      <ul class="list-link-book-shop shopping-list-button">
      ${buy_links.map(createShopIcon).join('')}
      </ul>
    </li>
    </div>
    `;
}

// говорит андрей!
// СТИЛИ ДЛЯ list-link-book-shop ТРОГАТЬ НЕЛЬЗЯ ПОТОМУ ЧТО ОНИ ОБЩИЕ
