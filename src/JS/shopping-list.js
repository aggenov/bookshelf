const shoppingList = document.querySelector('.shopping-main-list-js');
const emptyList = document.querySelector('.empty-list');


const URL = 'https://books-backend.p.goit.global/books/_id';


// Отримуємо збережені у localStorage книги користувача
let dataBooks = JSON.parse(localStorage.getItem('books-data')) || [];
let selectedPage = 1;


const renderShoppingList = dataBooks => {
    if (Array.isArray(dataBooks)) {
      const cardMarkup = createCardMarkup(dataBooks);
      shoppingList.insertAdjacentHTML('beforeend', cardMarkup);
      shoppingList.addEventListener('click', removeCardMarkup);
    } else {
      shoppingList.classList.add('visually-hidden');
      emptyList.classList.remove('visually-hidden');
    }
  };

  function createCardMarkup(dataBooks) {
    if (!dataBooks || dataBooks.length === 0) {
      shoppingList.classList.add('visually-hidden');
      
    }
    if (dataBooks.length > 0) {
      emptyList.classList.add('visually-hidden');
      shoppingList.classList.remove('visually-hidden');

      return dataBooks
      .map(book => {
        const amazonUrl = book.buy_links.find(
          link => link.name === 'Amazon'
        ).url;
        const appleBooksUrl = book.buy_links.find(
          link => link.name === 'Apple Books'
        ).url;
        const barnesAndNobleUrl = book.buy_links.find(
          link => link.name === 'Barnes and Noble'
        ).url;
  
          return 
          `<li class="shopping__item shopping__item-mobile" data-id=${ book._id }>

          <button type="button" data-action='delete' value="remove" class="shopping-button">

          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.8333 10.8333V7.33333C17.8333 4.11167 15.2217 1.5 12 1.5C8.77834 1.5 6.16667 4.11167 6.16667 7.33333V10.8333M7.1 22.5H16.9C18.8602 22.5 19.8403 22.5 20.589 22.1185C21.2475 21.783 21.783 21.2475 22.1185 20.589C22.5 19.8403 22.5 18.8602 22.5 16.9V16.4333C22.5 14.4731 22.5 13.4931 22.1185 12.7444C21.783 12.0858 21.2475 11.5504 20.589 11.2148C19.8403 10.8333 18.8602 10.8333 16.9 10.8333H7.1C5.13982 10.8333 4.15972 10.8333 3.41103 11.2148C2.75247 11.5504 2.21703 12.0858 1.88148 12.7444C1.5 13.4931 1.5 14.4731 1.5 16.4333V16.9C1.5 18.8602 1.5 19.8403 1.88148 20.589C2.21703 21.2475 2.75247 21.783 3.41103 22.1185C4.15972 22.5 5.13982 22.5 7.1 22.5Z" stroke="#F6F6F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<button/>


<div class='shopping-tablet'>
<div class='flex-box-tablet'>
            <img
              src="${book.book_image}"
              alt="book"
              class="shopping__img"
              loading="lazy"
            />
    <div class="flex-box__text-tablet">
          <div class='flex-box__information'>
            <h2 class="shopping__title">${book.title}</h2>
            <p class="shopping__titleText">${book.list_name}</p>
            <p class='shopping__text'>${book.description}</p>
          </div>
          <div class="shopping-box-tablet">
            <p class='shopping__author'>${book.author}</p>
            <ul class="shops-list">
              <li>
                <a
                  class="shops-list__link amazon"
                  href="${amazonUrl}"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <img class='shops-list__img' srcset="
                ${('')} 48w,
                ${('')} 96w,
                "
                sizes="48px" src="${require('')}" width="48" height="15" />
                </a>
              </li>
              <li>
                <a
                  class="shops-list__link"
                  href="${appleBooksUrl}"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <img class='shops-list__img' srcset="
                ${('')} 28w,
                ${('')} 56w,
                "
                sizes="28px" src="${('')}" width="28" height="27" />
                </a>
              </li>
              <li>
                <a
                  class="shops-list__link"
                  href="${barnesAndNobleUrl}"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <img class='shops-list__img' srcset="
                ${('')} 32w,
                ${('')} 64w,
                "
                sizes="32px" src="${('')}" width="32" height="30" />
                </a>
              </li>
            </ul>
          </div>
    </div> 
</div>
</div>
</li>`;
})
.join('');
}
}

          

  async function removeCardMarkup(event) {
    if (event.target.dataset.action !== 'delete') {
      return;
    }
}


