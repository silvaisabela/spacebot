const menuBtn = document.querySelector(".hamburguer");
const menu = document.querySelector(".menu");
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open')
    menu.classList.toggle('open')
});


