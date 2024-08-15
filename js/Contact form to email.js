// Avoid putting sensitive information in the client-side code.
// Consider using a backend server to handle the email sending process securely.

document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault();
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "your-email@example.com", // Use environment variables or a secure method to store this
        Password: "your-secure-password",  // Avoid hardcoding sensitive information
        To: 'your-email@example.com',
        From: document.getElementById("email").value,
        Subject: "New contact form submission",
        Body: `
            Name: ${document.getElementById("name").value}<br>
            Email: ${document.getElementById("email").value}<br>
            Phone: ${document.getElementById("phone").value}<br>
            Message: ${document.getElementById("comments").value}
        `
    }).then(
        message => alert("Message sent successfully!")
    ).catch(
        error => alert("An error occurred: " + error)
    );
});
