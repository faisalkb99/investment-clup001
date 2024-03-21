import smtp from 'smtp.js';
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('send-email').addEventListener('click', function() {

        // Assuming smtp.js exposes a sendMail function globally
        const email = {
            from: 'faisalkb99@gmail.com', // Specify your email
            to: document.getElementById('email-to').value, // Get recipient from input
            subject: document.getElementById('subject').value, // Get subject from input
            text: document.getElementById('message').value, // Get message from textarea
        };
        
        // Call the sendMail function or whatever SMTP.js uses
        smtp.sendMail(email).then(info => {
            console.log(info);
            alert("Email sent successfully!");
        }).catch(err => {
            console.error(err);
            alert("Failed to send the email.");
        });
    });
});