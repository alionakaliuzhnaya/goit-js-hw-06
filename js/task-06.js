const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', OnInputValid);

function OnInputValid(event) {
  if (inputEl.value.length === 6) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
}
