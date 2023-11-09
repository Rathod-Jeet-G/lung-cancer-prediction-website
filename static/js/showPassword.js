const passwordInput = document.getElementById('password');
const togglePasswordButton = document.getElementById('togglePassword');

togglePasswordButton.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePasswordButton.innerHTML = '&#x1F440; <label>Hide Password</label>';
    } else {
        passwordInput.type = 'password';
        togglePasswordButton.innerHTML = '&#x1F441; <label>Show Password</label>';
    }

    if(conPasswordInput = document.getElementById('conPassword')){
        if (conPasswordInput.type === 'password') {
            conPasswordInput.type = 'text';
            togglePasswordButton.innerHTML = '&#x1F440; <label>Hide Password</label>';
        } else {
            conPasswordInput.type = 'password';
            togglePasswordButton.innerHTML = '&#x1F441; <label>Show Password</label>';
        }
    }
});