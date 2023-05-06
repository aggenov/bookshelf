export function bookMarkup({ _id, book_image, title, author }) {
  return `
    <div class="book-item" data-modal-id="${_id}">
      <div class="book-image-wrapper">
        <img class="book-image-container" src="${book_image}" />
      </div>
      <h4 class="book-item-title">${title}</h4>
      <p class="book-item-author">${author}</p>
    </div>
    `;
}
