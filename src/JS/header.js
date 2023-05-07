

const burgerMenu = document.querySelector('.modal-mobile-menu');
const btnOpen = document.querySelector('.header-burger');
const closeModalMenu = document.querySelector('.mobile-close-btn');

console.log(burgerMenu);
console.log(btnOpen);
console.log(closeModalMenu);

btnOpen.addEventListener("click", () => {
    burgerMenu.style.display = "block";
});

closeModalMenu.addEventListener("click", () => {
    burgerMenu.style.display = "none";
});
