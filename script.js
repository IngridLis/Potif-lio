// Modo Escuro
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    darkModeToggle.textContent = body.classList.contains("dark-mode")
        ? "Modo Claro"
        : "Modo Escuro";
});

// Texto Rolante
const carouselText = document.getElementById("carousel-text");
const texts = [
    "Desenvolvedora em formação",
    "Java",
    "SQL",
    "Full Stack Aspirante"
];

let index = 0;

function updateCarouselText() {
    carouselText.textContent = texts[index];
    index = (index + 1) % texts.length;
}

setInterval(updateCarouselText, 2000);

// Scroll Suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});
