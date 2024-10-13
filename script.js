// script.js

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    let isValid = true;

    // Validate email
    if (!validateEmail(email)) {
        document.getElementById('login-email-error').innerText = 'Please enter a valid email.';
        isValid = false;
    } else {
        document.getElementById('login-email-error').innerText = '';
    }

    // Validate password
    if (password.length < 6) {
        document.getElementById('login-password-error').innerText = 'Password must be at least 6 characters.';
        isValid = false;
    } else {
        document.getElementById('login-password-error').innerText = '';
    }

    if (isValid) {
        document.getElementById('message').innerText = 'Login successful!';
    }
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    let isValid = true;

    // Validate email
    if (!validateEmail(email)) {
        document.getElementById('signup-email-error').innerText = 'Please enter a valid email.';
        isValid = false;
    } else {
        document.getElementById('signup-email-error').innerText = '';
    }

    // Validate password
    if (password.length < 6) {
        document.getElementById('signup-password-error').innerText = 'Password must be at least 6 characters.';
        isValid = false;
    } else {
        document.getElementById('signup-password-error').innerText = '';
    }

    if (isValid) {
        document.getElementById('message').innerText = 'Registration successful!';
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
