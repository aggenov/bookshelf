

const burgerMenu = document.querySelector('.modal-mobile-menu');
const btnOpen = document.querySelector('.header-burger');
const closeModalMenu = document.querySelector('.mobile-close-btn');


btnOpen.addEventListener("click", () => {
    burgerMenu.style.display = "block";
});

closeModalMenu.addEventListener("click", () => {
    burgerMenu.style.display = "none";
});
