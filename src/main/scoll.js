window.onscroll = function() {
    shrinkNavbar();
};

function shrinkNavbar() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) { // When the page is scrolled more than 50px
        navbar.classList.add("shrink");
    } else {
        navbar.classList.remove("shrink");
    }
}