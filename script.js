// Efeito no header ao rolar
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "rgba(15, 4, 35, 0.9)";
    } else {
        header.style.background = "rgba(15, 4, 35, 0.6)";
    }
});

// Animação simples nos botões
document.querySelectorAll(".btn-primary, .btn-secondary").forEach(btn => {
    btn.addEventListener("mouseover", () => {
        btn.style.transform = "scale(1.08)";
    });

    btn.addEventListener("mouseout", () => {
        btn.style.transform = "scale(1)";
    });
});
