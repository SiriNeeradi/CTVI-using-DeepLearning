document.addEventListener('DOMContentLoaded', () => {
    const emailScreen = document.getElementById('email-screen');
    const passwordScreen = document.getElementById('password-screen');
    const nextToPasswordButton = document.getElementById('next-to-password');
    const emailInput = document.getElementById('email-input');
    const displayEmail = document.getElementById('display-email');

    nextToPasswordButton.addEventListener('click', () => {
        if (emailInput.value.trim() === '') {
            alert('Please enter your email or phone number.');
            return;
        }

        // Set email in the password screen
        displayEmail.textContent = emailInput.value;

        // Switch screens
        emailScreen.classList.add('hidden');
        passwordScreen.classList.remove('hidden');
    });
});
