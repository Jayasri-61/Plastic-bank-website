// Function to open the modal
function openModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'flex'; // Show the modal
}

// Function to close the modal
function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none'; // Hide the modal
}

// Function to smoothly scroll to the given section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

// Function for redeeming reward
function redeemReward() {
  alert("Congratulations! You have redeemed your reward.");
  // You can add more logic here like reducing points or triggering animations
}

// Handle modal form submission (if applicable)
const plasticForm = document.getElementById('plasticForm');
if (plasticForm) {
  plasticForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page reload
    const name = plasticForm.querySelector('input[type="text"]').value;
    const weight = plasticForm.querySelector('input[type="number"]').value;
    const plasticType = plasticForm.querySelector('select').value;

    // Assuming you want to log the values (you can replace with an actual submission logic)
    console.log(`Name: ${name}, Weight: ${weight} kg, Plastic Type: ${plasticType}`);

    // Close the modal after submission
    closeModal();
    alert('Plastic submitted successfully!');
  });
}

// Close the modal when clicking outside of it
window.addEventListener('click', function(event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    closeModal();
  }
});
