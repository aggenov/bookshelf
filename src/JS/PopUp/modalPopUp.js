import { getData } from '../BestSellers/request';
import { createModalMarkup } from './Markup/ModalMarkup';

const modalBookInfoRef = document.querySelector('.modal-book-info');

document.addEventListener('click', event => {
  if (event.target.matches('.book-item[data-modal-id]')) {
    // если таргет это элемент книги с атрибутом, то забираем значение атрибута
    const bookId = event.target.getAttribute('data-modal-id');

    // открываем модалку
    openModalWindow();

    // отправляем запрос за информацией о конкретной книге
    getData(`/books/${bookId}`).then(bookInfo => {
      // создаем разметку модалки из полученной от бекенда информации
      const markup = createModalMarkup(bookInfo);

      // вставляем через innerHTML, чтоб удалить старую разметку, и добавить новую
      modalBookInfoRef.innerHTML = markup;
    });
  }
});

// все что выше - написал андрей (пытался использовать то, что уже было)

// все что ниже - код из modal-single-book.js (некоторые вещи дописал)

// import {
//   saveStorageBooks,
//   removeElStorage,
//   removeStorageBooks,
//   loadStorageBooks,
// } from '../localStorage/savingInStorage';

// const LOCAL_KEY = 'LOCAL_KEY';

// let InfoAboutBook = {};

const refs = {
  backdropForModal: document.querySelector('.backdrop-modal'),
  bookDescription: document.querySelector('.modal'),
  closeModalWindow: document.querySelector('.close-modal-single-book'),
};

refs.closeModalWindow.addEventListener('click', onCloseWindow);

function onCloseWindow(event) {
  refs.backdropForModal.classList.add('is-hidden');

  // при закрытии модалки удаляем содержимое
  modalBookInfoRef.innerHTML = '';
}

function openModalWindow() {
  refs.backdropForModal.classList.remove('is-hidden');
}

// // const allBooks = async () => {
// //   const response = await fetch("https://books-backend.p.goit.global/books/top-books ");
// //   const books = await response.json();

// // console.log(books);

// // }
// // allBooks()

// const fetchUsers = async () => {
//   const response = await fetch(
//     'https://books-backend.p.goit.global/books/643282b1e85766588626a085'
//   );
//   const books = await response.json();
//   // console.log(books);

//   // console.log(books.buy_links);

//   InfoAboutBook = {
//     image: `${books.book_image}`,
//     title: `${books.title}`,
//     author: `${books.author}`,
//     description: `${books.description}`,
//     bookId: `${books._id}`,
//   };
//   // console.log(InfoAboutBook);

//   // let sale = books.buy_links.map(({name, url})=> {

//   //     return `<ul>
//   //     <li>
//   //     <a href="${url}" target="_blank">
//   //     <img src="/js/images/amazon.png"></img>
//   //     </a>
//   //     </li>
//   //     </ul>`

//   // })

// const renderModalMark = `
// <div>
//     <img class="book-title" src="${books.book_image}" alt="">
// </div>
// <div class="content-box">
//     <p class="title-style"> ${books.title}</p>
//     <p class="style-author"> ${books.author}</p>
//     <p class="book-description"> ${books.description}</p>

// </div>
//  `;

//   //  <div> ${sale}</div>

//   const buttonAddToShopingList = document.querySelector('.add-to-shoping-list');
//   buttonAddToShopingList.addEventListener('click', onCliclAddToShopingList);

//   // console.log(buttonAddToShopingList);

//   refs.bookDescription.insertAdjacentHTML('afterbegin', renderModalMark);

//   return books;
// };

// function onCliclAddToShopingList(event) {
//   event.target.textContent = 'remove from the shopping list';

//   // localStorage.setItem("LOCAL_KEY", JSON.stringify(InfoAboutBook))

//   // *****************добавлена функція додавання в локал сторидж тест ************************
//   saveStorageBooks(InfoAboutBook);
//   // *************************************

//   const explanToButton = `
//  <p>Сongratulations! You have added the book to the shopping list.
//  To delete, press the button “Remove from the shopping list”.</p>`;

//   refs.bookDescription.insertAdjacentHTML('beforeend', explanToButton);

//   // console.log(event.target.textContent);
//   // console.log(InfoAboutBook);
// }

// fetchUsers();
