// HEADER BG SCROLL
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.style.background = window.scrollY > 50 
        ? "rgba(15, 4, 35, 0.9)" 
        : "rgba(15, 4, 35, 0.6)";
});

// MENU MOBILE
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});
