document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Here you can add code to handle the form data, like sending an AJAX request
        alert('Form submitted successfully!');
    } else {
        alert('Please fill in all fields.');
    }
});
