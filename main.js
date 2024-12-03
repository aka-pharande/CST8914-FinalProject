// JavaScript for form validation and interaction

// Vrinda's Section
document.addEventListener('focusin', (event) => {
  const element = event.target;
  if (element.classList) {
    element.classList.add('focus-visible');
  }
});

document.addEventListener('focusout', (event) => {
  const element = event.target;
  if (element.classList) {
    element.classList.remove('focus-visible');
  }
});

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

window.addEventListener('load', function () {
  // Add padding to the first section when the page is loaded
  const firstSection = document.querySelector('section');
  if (firstSection) {
    firstSection.classList.add('scroll-padding-first');
  }
});

// Function to handle navbar link click and scroll behavior
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', function (event) {
    // Remove padding from all sections
    document.querySelectorAll('section').forEach(section => {
      section.classList.remove('scroll-padding');
    });

    // Add padding to the section being navigated to
    const target = document.querySelector(this.getAttribute('href'));
    target.classList.add('scroll-padding');

    // Optionally, scroll to the target element with smooth behavior
    setTimeout(() => {
      target.scrollIntoView({ behavior: 'smooth' });
    }, 200); // Wait for the class to be added before scrolling
  });
});

// JavaScript for handling hamburger toggle functionality
document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarMenu = document.querySelector('#navbarNav');

  // Toggle navbar on hamburger click
  navbarToggler.addEventListener('click', function () {
    const isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true'; // Check current state

    // Toggle the 'aria-expanded' attribute
    navbarToggler.setAttribute('aria-expanded', !isExpanded);

    // Toggle the collapse class to show or hide the menu
    navbarMenu.classList.toggle('collapse');
  });
});


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

  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('schedule-form');
    const errorSummary = document.getElementById('errorSummary');
    const formResponse = document.getElementById('form-response'); // Where we'll show the success message
    const errorFieldset = document.querySelector('.errors'); // Get the error fieldset
  
    // Function to validate each form field
    function validateField(id, validationFn) {
      const field = document.getElementById(id);
      const errorElement = document.getElementById(id + 'Error');
      const isValid = validationFn(field);
  
      // Initially hide all errors
      errorElement.style.display = 'none'; // Hide the error by default
  
      if (!isValid) {
        // Show error in the summary, not inline
        return errorElement; // Return the error element for the summary
      }
      return null; // If valid, no error
    }
  
    // Function to show error summary with links
    function updateErrorSummary() {
      const errorMessages = [];
  
      // Check for errors in the form and collect messages
      document.querySelectorAll('.error').forEach(error => {
        if (error.style.display === 'inline') {  // Show the errors that are marked 'inline'
          const fieldId = error.id.replace('Error', '');
          const message = error.innerText;
          errorMessages.push({ fieldId, message });
        }
      });
  
      // Clear existing error summary
      errorSummary.innerHTML = '';
  
      if (errorMessages.length > 0) {
        errorMessages.forEach(error => {
          const errorLink = document.createElement('a');
          errorLink.href = `#${error.fieldId}`;
          errorLink.textContent = error.message;
          errorLink.classList.add('error-link');
          errorLink.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById(error.fieldId).focus(); // Focus the input on click
          });
  
          const listItem = document.createElement('li');
          listItem.appendChild(errorLink);
          errorSummary.appendChild(listItem);
        });
  
        // Show the error summary fieldset and focus it
        errorFieldset.style.display = 'block';  // Make the error fieldset visible
        errorFieldset.focus();  // Set focus to the error fieldset for keyboard navigation
  
        // Scroll the error fieldset into view with smooth scroll
        errorFieldset.scrollIntoView({ behavior: 'smooth', block: 'center' });
  
        return false; // Return false if there are errors
      } else {
        errorFieldset.style.display = 'none';  // Hide the error fieldset if no errors
        return true; // Return true if no errors
      }
    }
  
    // Submit handler
    form.addEventListener('submit', function (e) {
      e.preventDefault();  // Prevent the default form submission
  
      let isValid = true;
  
      // Validate email (required)
      const emailError = validateField('email', (field) => field.value.trim() !== '');
      if (emailError) {
        emailError.style.display = 'inline'; // Show error message in the error summary
        isValid = false;
      }
  
      // Validate phone number (only if provided)
      const phoneError = validateField('phone-number', (field) => field.value === '' || /^\d{3}-\d{3}-\d{4}$/.test(field.value));
      if (phoneError) {
        phoneError.style.display = 'inline'; // Show error message in the error summary
        isValid = false;
      }
  
      // Validate business name (optional)
      const businessNameError = validateField('business-name', (field) => field.value.trim() === '' || field.value.trim() !== '');
      if (businessNameError) {
        businessNameError.style.display = 'inline'; // Show error message in the error summary
        isValid = false;
      }
  
      // Show error summary and prevent submission if there are validation issues
      if (!updateErrorSummary() || !isValid) {
        return;  // Prevent form submission if there are errors
      }
  
      // If all validations pass, show a success message
      formResponse.innerHTML = '<p style="color: green; font-weight: bold;">Thank you for scheduling a call. We will get back to you shortly!</p>';
  
      // Add scrollIntoView to the form success message
      formResponse.scrollIntoView({ behavior: 'smooth', block: 'center' });
  
      // Set focus to the "Thank You" message for users who rely on screen readers or keyboard navigation
      formResponse.focus();
  
      // Hide error summary and reset form after success
      errorFieldset.style.display = 'none';  // Hide the error fieldset after successful submission
      form.reset(); // Reset the form after successful submission
    });
  });
  

  document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('switch-toggle');
    const label = document.querySelector('label[for="switch-toggle"]');
    
    // Function to toggle the switch state visually and update aria-checked attribute
    function toggleSwitch() {
      const isChecked = checkbox.checked;
      checkbox.checked = !isChecked;  // Toggle the checkbox state
      updateSwitchState();  // Update visual state
    }
  
    // Function to update the switch state visually
    function updateSwitchState() {
      const isChecked = checkbox.checked;
      checkbox.setAttribute('aria-checked', isChecked);
      const knobs = checkbox.closest('.button-cover').querySelector('.knobs');
      const layer = checkbox.closest('.button-cover').querySelector('.layer');
      
      if (isChecked) {
        layer.style.backgroundColor = '#4CAF50';  // Green for active state
      } else {
        layer.style.backgroundColor = '#ccc';    // Gray for inactive state
      }
    }
  
    // Event listener for keydown to handle Enter and Space keys
    label.addEventListener('keydown', function (e) {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault(); // Prevent scrolling when Space is pressed
        toggleSwitch();  // Toggle the switch on Space or Enter
      }
    });
  
    // Event listener for checkbox change (when clicked)
    checkbox.addEventListener('change', function () {
      updateSwitchState();
    });
  
    // Initialize the switch state when page loads
    updateSwitchState();
  });
  