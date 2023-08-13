// Desktop menu

const menu = document.querySelector('.menu');
let prevScrollpos = window.scrollY;
let windowHeight = window.innerHeight;
let menuHeight = menu.offsetHeight;

menu.classList.add('menu--visible');

window.addEventListener('scroll', function () {
    let currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
        menu.classList.remove('menu--hidden');
    } else {
        menu.classList.add('menu--hidden');
    }
    prevScrollpos = currentScrollPos;

    let menuTop = menu.getBoundingClientRect().top;
    if (menuTop <= 0) {
        menu.classList.add('menu--visible');
    } else {
        menu.classList.remove('menu--visible');
    }
});

window.addEventListener('resize', function () {
    windowHeight = window.innerHeight;
    menuHeight = menu.offsetHeight;
});


// Mobile version menu — burger

const links = document.querySelector(".main-menu__links");
const burger = document.querySelector(".nav-burger");
const icon = document.querySelector(".nav-burger i");

burger.onclick = (event) => {
    event.preventDefault();
    links.classList.toggle("show");

    if (icon.classList.contains("la-bars")) {
        icon.classList.remove("la-bars");
        icon.classList.add("la-times");
    } else {
        icon.classList.remove("la-times");
        icon.classList.add("la-bars");
    }
}