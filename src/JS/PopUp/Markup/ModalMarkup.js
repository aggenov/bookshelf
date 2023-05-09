import { createShopIcon } from './BookshopMarkup';

// функция, которая отрисует модалку из полученной инфы
export function createModalMarkup({
  _id,
  book_image,
  title,
  author,
  description,
  buy_links,
}) {
  // если в описании пусто, то вместо него выводим сообщение, что описания нет.
  if (!description) {
    description = `
    There is no description for this book yet. 
    Try visiting any of the stores provided below.
    `;
  }

  return `
  <div class="modal-book-container">
    <div class="modal-image-wrapper">
      <img class="book-title" src="${book_image}" alt="">
    </div>
    <div class="content-box">
      <p class="title-style"> ${title}</p>
      <p class="style-author"> ${author}</p>
      <p class="book-description"> ${description}</p>
      <ul class="list-link-book-shop">
      ${buy_links.map(createShopIcon).join('')}
      </ul>
    </div>
  </div>  
    <button 
      class="add-to-shoping-list" 
      type="button"
      data-modal-id="${_id}"
    >
      Add to shopping list
    </button>
   `;
}
