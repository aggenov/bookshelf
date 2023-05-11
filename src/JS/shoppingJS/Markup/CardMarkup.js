import { createShopIcon } from '../../PopUp/Markup/BookshopMarkup';
import erase from '../../../images/trash-03.png';

export function createBookMarkup({
  _id,
  book_image,
  title,
  author,
  list_name,
  description,
  buy_links,
}) {
  if (!description) {
    description = `
    There is no description for this book yet. 
    Try visiting any of the stores provided below.
    `;
  }

  return `
    <li class="shopping-list-item">
      <button
        class="shopping-list-remove-button"
        type="button"
        data-action="delete"
        data-shopping-list-id="${_id}"
      >
        <img src="${erase}" width="16" height="16"/>
      </button>
      <div class="shopping-list-img-wrapper">
        <img 
          class="shopping-list-img" 
          src="${book_image}" 
          alt="${title}"
          loading="lazy"
        />
      </div>

      <div class="shopping-list-content-wrapper">
        <p class="shopping-list-item-title">${title}</p>
        <p class="shopping-list-item-category">${list_name}</p>
        <p class="shopping-list-item-description">${description}</p>
        <p class="shopping-list-item-author">${author}</p>
      </div>
      
      <ul class="list-link-book-shop shopping-list-book-shops">
      ${buy_links.map(createShopIcon).join('')}
      </ul>
    </li>
    `;
}

// говорит андрей!
// СТИЛИ ДЛЯ list-link-book-shop ТРОГАТЬ НЕЛЬЗЯ ПОТОМУ ЧТО ОНИ ОБЩИЕ
