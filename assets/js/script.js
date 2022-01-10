const navToggle = document.getElementById("nav__toggle");
const navLists = document.getElementById("nav__lists");
const NavBurgerLines = document.getElementById("nav__burger-lines");
const navItems =  document.querySelectorAll(".nav__item");



navToggle.addEventListener("click", toggleMenu);
navItems.forEach(navItem => {
    navItem.addEventListener("click", toggleMenu);
});

function toggleMenu(){
    navLists.classList.toggle("nav__lists--visible");
    NavBurgerLines.classList.toggle("nav--open");
}

