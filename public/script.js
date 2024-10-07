document.addEventListener('DOMContentLoaded', function() {
    // Register Form Submission
    document.getElementById('register-form').addEventListener('submit', async function(event) {
        event.preventDefault();

        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;

        try {
            const response = await fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                alert('Registration successful!');
            } else {
                alert('Registration failed: ' + await response.text());
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred during registration.');
        }
    });

    // Login Form Submission
    document.getElementById('login-form').addEventListener('submit', async function(event) {
        event.preventDefault();

        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data = await response.json();
                alert('Login successful!');
                // You can store the token for future requests (e.g., localStorage)
                localStorage.setItem('authToken', data.token);
            } else {
                alert('Login failed: ' + await response.text());
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred during login.');
        }
    });

    // Contact Form Submission (Existing Code)
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Contact form submitted!');
    });
});

