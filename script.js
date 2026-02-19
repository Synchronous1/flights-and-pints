// contact.js

// Function to validate the form
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    let isValid = true;
    let errorMessage = '';

    // Validate name
    if (!name) {
        errorMessage += 'Name is required.\n';
        isValid = false;
    }

    // Validate email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
    if (!email || !emailRegex.test(email)) {
        errorMessage += 'Valid email is required.\n';
        isValid = false;
    }

    // Validate message
    if (!message) {
        errorMessage += 'Message is required.\n';
        isValid = false;
    }

    // Display error message if validation fails
    if (!isValid) {
        alert(errorMessage);
    }
    return isValid;
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    if (validateForm()) {
        // Proceed with form submission (e.g., send data to the server)
        alert('Form submitted successfully!');
        // Here you would typically send the form data to your server
    }
}

// Attach event listener to the form
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', handleSubmit);