let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide) => slide.classList.remove("active")); // Remove active class from all
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; } // Reset to first slide
    slides[slideIndex - 1].classList.add("active"); // Add active class to current slide
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}
