document.addEventListener("DOMContentLoaded", function() {
    const slideshowImages = [
        "assets/carousel2.png",
        "assets/carouseler.png",
        // Add more image URLs here if you want to have additional slides
    ];

    let currentSlide = 0;
    const homeSection = document.getElementById("home");

    function showSlide() {
        homeSection.style.backgroundImage = `url("${slideshowImages[currentSlide]}")`;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideshowImages.length;
        showSlide();
    }

    showSlide();
    setInterval(nextSlide, 10000); // Change slide every 3 seconds (adjust as needed)
});
