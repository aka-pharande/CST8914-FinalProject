# Empower Ability Labs - Accessible SPA

This project is an accessible Single Page Application (SPA) developed for **Empower Ability Labs**. It is designed to meet **WCAG 2.1 AA standards** and incorporates responsive design, interactive components, and accessibility features like screen reader compatibility, keyboard navigation, and clear form error validation.

## Group Members

- **Aakanksha Pharande**  
- **Talwinder Singh**  
- **Vrinda Dua**


## Project Overview and Steps Taken to Meet WCAG 2.1 AA Requirements

| **Feature**            | **Implementation Details**                                                                                     |
|-------------------------|----------------------------------------------------------------------------------------------------------------|
| **Focus Management**    | - Added `tabindex="-1"` to relevant headings (`<h1>` and `<h2>`) to allow programmatic focus.                  |
|                         | - JavaScript dynamically shifts focus to the relevant section heading when a user navigates via the navbar.    |
| **Responsive Design**   | - Used CSS media queries to create a layout that adapts to all screen sizes.                                  |
|                         | - High contrast ratios for text and interactive elements improve readability for all users.                   |
| **HTML Semantics**      | - Used semantic tags (`<header>`, `<main>`, `<section>`, `<footer>`) to ensure proper structure.              |
|                         | - Implemented logical heading hierarchy and meaningful content organization.                                  |
| **Interactive Components** | - Accessible navigation bar with hover and focus styles.                                                  |
|                         | - Modal dialog includes ARIA attributes, focus trapping, and ESC key support.                                |
|                         | - Custom toggle switch with ARIA roles and proper keyboard handling.                                          |
|                         | - Show/Hide form toggles dynamically based on user input.                                                    |
| **Web Form**            | - Real-time validation provides immediate feedback on errors (e.g., required fields or incorrect formats).    |
|                         | - Error messages are displayed using ARIA live regions to notify screen readers.                             |
|                         | - Thank-you messages are displayed dynamically upon successful submission.                                    |


## Repository Structure

Navigate through the repository for an organized structure:

```plaintext
Empower-Ability-Labs-SPA/
├── index.html        # Main HTML file
├── style.css         # Custom CSS for styling
├── main.js           # JavaScript for interactivity and SPA functionality
├── /images           # Assets used in the application
└── README.md         # Project overview
```

## Challenges and Solutions

### Focus Management:
- **Challenge**: Ensuring focus shifts to the correct section without disrupting the user experience.  
- **Solution**: Implemented JavaScript to dynamically set focus on section headings when navigating via the navbar.

### Responsive Design:
- **Challenge**: Maintaining accessibility and usability across various screen sizes.  
- **Solution**: Used CSS media queries and ensured layout consistency for all devices.

### Form Validation:
- **Challenge**: Providing accessible and clear error messages for users with disabilities.  
- **Solution**: Added ARIA live regions to notify screen readers and styled error messages for better visibility.

### Interactive Modal:
- **Challenge**: Trapping focus within the modal for keyboard users.  
- **Solution**: Ensured all focusable elements within the modal are navigable, and the modal closes with the ESC key.


## Live Demo
You can view the live version of the SPA here: [Empower Ability Labs SPA](https://aka-pharande.github.io/CST8914-FinalProject/)
