window.onload = function() {
    document.getElementById('contact_form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('portfolio_inquiry', 'contact_form', this)
        .then(function() {
            console.log('SUCCESS!');
            alertComplete();
            clearForm();
        }, function(error) {
            console.log('FAILED...', error);
        });
        
        function alertComplete() {
            alert('Form submitted successfully!');
        }
        function clearForm() {
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('query').value = '';
        }
            // Add function to clear the email form and provide feedback to user that the form was submitted successfully!
    });
}
