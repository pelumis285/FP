// Attach a submit event listener to the contact form using its ID 'contactForm'
document.getElementById('contactForm').addEventListener('submit', function(e) {
  // Prevent the default form submission (which would refresh the page)
  e.preventDefault();
  
  // Retrieve and trim the values from each form field
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();
  
  // Check that all required fields have a value (non-empty)
  if (name && email && phone && subject && message) {
    // If valid, remove the 'hidden' class to show the success message
    document.getElementById('successMessage').classList.remove('hidden');
    // Reset the form fields to empty
    this.reset();
    
    // After 3 seconds, hide the success message again by adding back the 'hidden' class
    setTimeout(() => {
      document.getElementById('successMessage').classList.add('hidden');
    }, 3000);
  }
});

// Handle asterisk color changes for required fields in the contact form
// This section updates the asterisk color in the label based on whether the input is empty or not
const requiredInputs = document.querySelectorAll('#contactForm [required]');

// Loop through each required input field
requiredInputs.forEach((input) => {
  // Listen for any input event on each required field
  input.addEventListener('input', () => {
    // Find the label element associated with this input (assuming the asterisk is inside the label)
    const label = input.parentNode.querySelector('label');
    // Get the asterisk element from the label
    const asterisk = label.querySelector('.asterisk');
    
    // If the input is empty, set the asterisk color to red; otherwise, change it to yellow
    if (input.value.trim() === '') {
      asterisk.style.color = 'red';   // Field is empty: asterisk appears red
    } else {
      asterisk.style.color = 'yellow'; // Field has value: asterisk appears yellow
    }
  });
});
