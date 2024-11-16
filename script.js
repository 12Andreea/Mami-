// Wait for the DOM to load before attaching the click event
console.log('Script loaded')
document.addEventListener('DOMContentLoaded', function() {
    const surpriseButton = document.getElementById('surpriseButton');
    const surpriseMessage = document.getElementById('surpriseMessage');
    
    // When the button is clicked, show the surprise message
    surpriseButton.addEventListener('click', function() {
      surpriseMessage.classList.toggle('hidden'); // Toggles the hidden class
    });
  });
  