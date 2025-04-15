const headerButtonHidden = document.querySelector(".header__button-hidden");
const headerHidden = document.querySelector(".header__hidden");

headerButtonHidden.addEventListener("click", () => {
    headerHidden.classList.toggle("hidden");
})
