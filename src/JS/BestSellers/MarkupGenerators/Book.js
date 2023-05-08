export function bookMarkup({ _id, book_image, title, author }) {
  return `
    <li class="book-item" data-modal-id="${_id}">
      <div class="book-image-wrapper">
        <img 
          class="book-image-container" 
          src="${book_image}" 
          alt="${title}"
          loading="lazy"
        />
      </div>
      <p class="book-item-title">${title}</p>
      <p class="book-item-author">${author}</p>
    </li>
    `;
}
