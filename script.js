// Smooth Scrolling Effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const currentYear = new Date().getFullYear();
document.getElementById("year").innerText = currentYear;
// Animated Hero Text
const heroText = document.querySelector(".hero-content h1");
let text = heroText.innerText;
heroText.innerText = "";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        heroText.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
typeWriter();