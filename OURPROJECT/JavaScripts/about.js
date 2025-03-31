document.addEventListener("DOMContentLoaded", function() {
  // --- SLIDER FUNCTIONALITY ---
  // Select all slide elements and the slider container
  const slides = document.querySelectorAll('.slide');
  const slider = document.querySelector('.slider');
  // Select the previous and next navigation buttons for the slider
  const prevBtn = document.querySelector('.slider-btn.prev');
  const nextBtn = document.querySelector('.slider-btn.next');
  // Initialize the current slide index and get the total number of slides
  let currentIndex = 0;
  const totalSlides = slides.length;
  
  // Function to display the slide corresponding to the given index
  function showSlide(index) {
    // If index is less than 0, wrap to the last slide
    if (index < 0) {
      currentIndex = totalSlides - 1;
    } 
    // If index exceeds the last slide, wrap to the first slide
    else if (index >= totalSlides) {
      currentIndex = 0;
    } 
    // Otherwise, simply set the current index to the given index
    else {
      currentIndex = index;
    }
    // Translate the slider container to show the current slide
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
  
  // Event listener for the "previous" button: show the previous slide when clicked
  prevBtn.addEventListener('click', () => {
    showSlide(currentIndex - 1);
  });
  
  // Event listener for the "next" button: show the next slide when clicked
  nextBtn.addEventListener('click', () => {
    showSlide(currentIndex + 1);
  });
  
  // Automatically advance the slider every 5 seconds
  setInterval(() => {
    showSlide(currentIndex + 1);
  }, 5000);
  
  // --- Animate Owner Cards on Scroll ---
  // Select all owner cards (team member sections)
  const ownerCards = document.querySelectorAll('.owner-card');
  // Set options for the Intersection Observer (20% visibility threshold)
  const observerOptions = { threshold: 0.2 };
  
  // Create an Intersection Observer to animate owner cards as they enter the viewport
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // If the owner card is in view, add the 'visible' class to animate it
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Stop observing this element after it has been animated
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe each owner card for scroll animations
  ownerCards.forEach(card => {
    observer.observe(card);
  });
  
  // --- "See More" Toggle for Owner Messages ---
  // Select all toggle buttons in owner info sections
  const toggleButtons = document.querySelectorAll('.toggle-btn');
  
  // Add click event listener to each toggle button
  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Get the owner text container (assumed to be the previous sibling)
      const ownerText = btn.previousElementSibling;
      // Select the extra text span within the owner text
      const extraText = ownerText.querySelector('.extra-text');
      
      // Toggle the display of the extra text
      if (extraText.style.display === "inline") {
        // Hide extra text and update button text
        extraText.style.display = "none";
        btn.textContent = "see more...";
      } else {
        // Show extra text and update button text
        extraText.style.display = "inline";
        btn.textContent = "see less...";
      }
    });
  });
});
