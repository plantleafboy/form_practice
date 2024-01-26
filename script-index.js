const pw1 = document.getElementById('password1')
const pw2 = document.getElementById('password2')

pw2.addEventListener('input', () => {
    console.log(pw1.value);
    if (pw1.value === pw2.value) {
        pw2.setCustomValidity('')
        console.log(pw1.value);
    } else {
        pw2.setCustomValidity('Passwords do not match')
        console.log(pw1.value);
    }
});