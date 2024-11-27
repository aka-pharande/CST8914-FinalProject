// JavaScript for form validation and interaction

// Vrinda's Section

// Talwinder's Section
// Modal and button elements
const modal = document.getElementById("lightboxModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

// Open modal
openModalBtn.onclick = function () {
  modal.style.display = "block";
};

// Close modal
closeModalBtn.onclick = function () {
  modal.style.display = "none";
};

// Close modal when clicking outside the modal content
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


// Aakanksha's Section

'use strict';

class Switch {
  constructor(domNode) {
    this.switchNode = domNode;
    this.switchNode.addEventListener('click', () => this.toggleStatus());
    this.switchNode.addEventListener('keydown', (event) =>
      this.handleKeydown(event)
    );
  }

  handleKeydown(event) {
    // Only do something when space or return is pressed
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggleStatus();
    }
  }

  // Switch state of a switch
  toggleStatus() {
    const currentState =
      this.switchNode.getAttribute('aria-checked') === 'true';
    const newState = String(!currentState);

    this.switchNode.setAttribute('aria-checked', newState);
  }
}

// Initialize switches
window.addEventListener('load', function () {
  // Initialize the Switch component on all matching DOM nodes
  Array.from(document.querySelectorAll('[role^=switch]')).forEach(
    (element) => new Switch(element)
  );
});


// Toggle the event details section visibility based on checkbox selection
function toggleEventDetails() {
  const eventDetailsContainer = document.getElementById('event-details-container');
  const speakerCheckbox = document.getElementById('speaker');

  if (speakerCheckbox.checked) {
    eventDetailsContainer.style.display = 'block';
  } else {
    eventDetailsContainer.style.display = 'none';
  }
}

// Form submission handler
document.getElementById("schedule-form").addEventListener("submit", function (event) {
  event.preventDefault();

  let responseMessage = "Thank you for scheduling a call. We will get back to you shortly.";

  // Check if all required fields are filled
  const businessName = document.getElementById("business-name").value;
  const email = document.getElementById("email").value;

  if (!businessName || !email) {
    responseMessage = "Please fill out all required fields.";
  }

  document.getElementById("form-response").innerHTML = responseMessage;
});


