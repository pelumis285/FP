document.addEventListener("DOMContentLoaded", () => {
    const sliderWrapper = document.getElementById("sliderWrapper");
    const slides = Array.from(sliderWrapper.querySelectorAll(".slide"));
    const sliderDotsContainer = document.getElementById("sliderDots");
  
    let currentIndex = 0;
    const totalSlides = slides.length;
    let slideInterval;
  
    // Create dot indicators
    slides.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      if (index === 0) dot.classList.add("active");
      dot.addEventListener("click", () => goToSlide(index));
      sliderDotsContainer.appendChild(dot);
    });
    const dots = sliderDotsContainer.querySelectorAll(".dot");
  
    // Function to go to a specific slide
    function goToSlide(index) {
      if (index < 0) index = totalSlides - 1;
      if (index >= totalSlides) index = 0;
  
      sliderWrapper.style.transform = `translateX(-${index * 100}%)`;
      currentIndex = index;
  
      // Update dot indicators
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
      });
    }
  
    // Auto Slide every 4 seconds
    function startAutoSlide() {
      slideInterval = setInterval(() => {
        goToSlide(currentIndex + 1);
      }, 4000);
    }
    function stopAutoSlide() {
      clearInterval(slideInterval);
    }
    startAutoSlide();
  
    // Pause on hover
    sliderWrapper.addEventListener("mouseenter", stopAutoSlide);
    sliderWrapper.addEventListener("mouseleave", startAutoSlide);
  });
  