export function bookMarkup({ _id, book_image, title, author }) {
  return `
    <div class="book-item" data-id="${_id}">
      <img class="book-image-container" src="${book_image}" />
      <h4 class="book-item-title">${title}</h4>
      <p class="book-item-author">${author}</p>
    </div>
    `;
}
