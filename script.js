// HEADER BACKGROUND ON SCROLL
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.style.background = window.scrollY > 50 
        ? "rgba(15, 4, 35, 0.9)" 
        : "rgba(15, 4, 35, 0.6)";
});

// BOTÃO SCALE
document.querySelectorAll(".btn-primary, .btn-secondary").forEach(btn => {
    btn.addEventListener("mouseover", () => btn.style.transform = "scale(1.08)");
    btn.addEventListener("mouseout", () => btn.style.transform = "scale(1)");
});

// MENU HAMBURGUER
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});
