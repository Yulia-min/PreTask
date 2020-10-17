const form = document.getElementById('form');
const password = document.getElementById('password');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let message = []
    if (password.value.length <= 6) {
        password.style.border = "2px solid red";
        message.push("Password must be longer");
    }
    if (password.value.length >= 20) {
        password.style.border = "2px solid red";
        message.push("Password must be less");
    }
    if (message.length > 0) {
        e.preventDefault()
        errorElement.innerText = message.join(',');
    }

})