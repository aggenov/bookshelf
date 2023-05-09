const LOCAL_KEY = "LOCAL_KEY";

let InfoAboutBook = {};

const refs = {

  backdropModalBook: document.querySelector(".backdrop-modal"),
  bookDescription: document.querySelector(".modal"),
  buttonCloseModal: document.querySelector(".close-modal-single-book"),

}
refs.backdropModalBook.addEventListener("click", onModalClose);
refs.buttonCloseModal.addEventListener("click", ()=>{
  refs.backdropModalBook.classList.add('is-hidden-modal-book')
  console.log("button close n")
});

function onModalClose(){
  refs.backdropModalBook.classList.add('is-hidden-modal-book')
}
function onModalOpen(){
  refs.backdropModalBook.classList.remove('is-hidden-modal-book')
}

// Отримання id книжки  наразі проблема тут
document.addEventListener('click', getPersonalBookId)

function getPersonalBookId(event){
  onModalOpen()
  fetchBooksInfo()
 

  if(event.target.matches('.book-item[data-modal-id]')){
    let personalBookId = event.target.getAttribute('data-modal-id')
     console.log(personalBookId)
    //  цю змінну personalBookId не можу передати на 47 рядок в кінці запиту щоб динамічно підставляти id

     

    return personalBookId;
  }

}
document.removeEventListener('click', getPersonalBookId)

// Запит на бек за детальною інформацією по обраній книжці за id
 const fetchBooksInfo = async () => {
    const response = await fetch("https://books-backend.p.goit.global/books/643282b1e85766588626a085");
    const books = await response.json();
    console.log(books);

  // console.log(books.buy_links)
// створення об'єкту з потрібними полями опису вибраної книги
InfoAboutBook ={
    image: `${books.book_image}`,
    title: `${books.title}`,
    author: `${books.author}`,
    description: `${books.description}`,
    _id: `${books._id}`
  };
  console.log(InfoAboutBook);

    // let sale = books.buy_links.map(({name, url})=> {
    
    //     return `<ul> 
    //     <li>
    //     <a href="${url}" target="_blank"> 
    //     <img src="/js/images/amazon.png"></img>
    //     </a>
    //     </li>
    //     </ul>`

    // })
// розмітка для вмісту модального вікна 
      const renderModalMark = `
  <div>
      <img class="book-title" src="${books.book_image}" alt="">
  </div>
  <div class="content-box">
      <p class="title-style"> ${books.title}</p>
      <p class="style-author"> ${books.author}</p>
      <p class="book-description"> ${books.description}</p>

  </div>
   `

  //  <div> ${sale}</div> 
      
// слухач на кнопку Add to shoping list
      const buttonAddToShopingList = document.querySelector(".add-to-shoping-list")
      buttonAddToShopingList.addEventListener("click", onCliclAddToShopingList); 



// рендер розмітки модалки
refs.bookDescription.insertAdjacentHTML("afterbegin", renderModalMark);

    return books;
  };



  // події після кліку на кнопку Add to shoping list
  function onCliclAddToShopingList(event){
    event.target.textContent = "remove from the shopping list";
        
 localStorage.setItem("LOCAL_KEY", JSON.stringify(InfoAboutBook))
    
 const explanToButton = `
 <p>Сongratulations! You have added the book to the shopping list. 
 To delete, press the button “Remove from the shopping list”.</p>`;

 refs.bookDescription.insertAdjacentHTML("beforeend", explanToButton)
    
console.log(event.target.textContent);
console.log(InfoAboutBook);


  }


  fetchBooksInfo()

  
 