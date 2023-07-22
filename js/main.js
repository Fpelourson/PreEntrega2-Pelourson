const nav = document.querySelector("#menu");
const navb = document.querySelector("#menu");
const abrirB = document.querySelector("#menu-bar-b");
const abrir = document.querySelector("#menu-bar");
const cerrar = document.querySelector("#hero");


abrir.addEventListener('click', () => {
    nav.classList.add('visible');
})

cerrar.addEventListener('click', () => {
    nav.classList.remove('visible');
})