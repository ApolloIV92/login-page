console.log("test");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const passwordText = document.getElementById("passwordMatch")

function validatePassword() {
    if (confirmPassword.value && 
        password.value!=confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords don't match");
        passwordText.textContent = "Passwords don't match!";
    } else {
        confirmPassword.setCustomValidity("");
        passwordText.textContent = "";
    }
}

password.onchange = validatePassword;
confirmPassword.addEventListener("focusout", () => validatePassword());