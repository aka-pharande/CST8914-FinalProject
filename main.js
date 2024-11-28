// JavaScript for form validation and interaction

// Vrinda's Section

// Talwinder's Section
const modal = document.getElementById("lightboxModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

// Open modal
openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
  modal.setAttribute("aria-hidden", "false");
  modal.querySelector(".modal-content").setAttribute("tabindex", "0"); // Make modal content focusable
  modal.querySelector(".modal-content").focus(); // Focus on modal content
  trapFocus(modal);
});

// Close modal function
function closeModal() {
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
  openModalBtn.focus(); // Return focus to open button
}

// Close modal when close button is clicked
closeModalBtn.addEventListener("click", closeModal);

// Close modal when close button is focused and "Enter" or "Space" is pressed
closeModalBtn.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault(); // Prevent default behavior
    closeModal();
  }
});

// Close modal when clicking outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// Close modal on pressing "Escape" key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.style.display === "block") {
    closeModal();
  }
});

// Trap focus inside the modal
function trapFocus(modal) {
  const focusableElements = modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  modal.addEventListener("keydown", (event) => {
    const isTabPressed = event.key === "Tab" || event.keyCode === 9;

    if (!isTabPressed) return;

    if (event.shiftKey) {
      // If shift + tab is pressed
      if (document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
    } else {
      // If tab is pressed
      if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  });
}

// Aakanksha's Section

("use strict");

class Switch {
  constructor(domNode) {
    this.switchNode = domNode;
    this.switchNode.addEventListener("click", () => this.toggleStatus());
    this.switchNode.addEventListener("keydown", (event) =>
      this.handleKeydown(event)
    );
  }

  handleKeydown(event) {
    // Only do something when space or return is pressed
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      this.toggleStatus();
    }
  }

  // Switch state of a switch
  toggleStatus() {
    const currentState =
      this.switchNode.getAttribute("aria-checked") === "true";
    const newState = String(!currentState);

    this.switchNode.setAttribute("aria-checked", newState);
  }
}

// Initialize switches
window.addEventListener("load", function () {
  // Initialize the Switch component on all matching DOM nodes
  Array.from(document.querySelectorAll("[role^=switch]")).forEach(
    (element) => new Switch(element)
  );
});

// Toggle the event details section visibility based on checkbox selection
function toggleEventDetails() {
  const eventDetailsContainer = document.getElementById(
    "event-details-container"
  );
  const speakerCheckbox = document.getElementById("speaker");

  if (speakerCheckbox.checked) {
    eventDetailsContainer.style.display = "block";
  } else {
    eventDetailsContainer.style.display = "none";
  }
}

// Form submission handler
document
  .getElementById("schedule-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let responseMessage =
      "Thank you for scheduling a call. We will get back to you shortly.";

    // Check if all required fields are filled
    const businessName = document.getElementById("business-name").value;
    const email = document.getElementById("email").value;

    if (!businessName || !email) {
      responseMessage = "Please fill out all required fields.";
    }

    document.getElementById("form-response").innerHTML = responseMessage;
  });
