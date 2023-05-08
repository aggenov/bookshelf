

const btnOpen = document.querySelector('.header-burger');
const closeModalMenu = document.querySelector('.mobile-close-btn');
const checkbox = document.querySelector('.switch');


btnOpen.addEventListener("click", () => {
    burgerMenu.style.display = "block";
});

closeModalMenu.addEventListener("click", () => {
    burgerMenu.style.display = "none";
});

checkbox.addEventListener("click", toggleCheckbox);

function toggleCheckbox() {
    localStorage.setItem("ui-theme", "light");
const themeLight = localStorage.getItem("ui-theme");
    console.log(themeLight);
    if (themeLight != "light") {
        localStorage.setItem("ui-theme", "dark");
        const themeDark = localStorage.getItem("ui-theme");
        console.log(themeDark);
    }
}


