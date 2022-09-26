let password = document.getElementById('pwd');
let confirm_password = document.getElementById('password-again');
let submit = document.getElementById('submit-button');
let message = document.getElementById('mismatch');

function match () {
  if (password.value == confirm_password.value) {
    message.textContent = ''
    submit.disabled = false
    console.log("ok")
  } else if (password.value.length > 1 && password.value != confirm_password.value) {
    message.textContent = "Slaptažodžiai nesutampa."
    submit.disabled = true
    console.log("not ok")
  }
};
