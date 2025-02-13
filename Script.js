document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const music = document.getElementById("bg-music");
    const surpriseButton = document.querySelector(".surprise-btn");
    const surpriseContent = document.getElementById("surprise-content");

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            slide.style.display = (i === index) ? "block" : "none";
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Ensure the music plays properly on user interaction
    document.addEventListener("click", function () {
        if (music.paused) {
            music.play().catch(error => console.log("Autoplay blocked: " + error));
        }
    });

    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);

    window.showSurprise = function() {
        surpriseButton.style.display = "none";
        surpriseContent.classList.remove("hidden");
    }

    showSlide(currentSlide);
});
