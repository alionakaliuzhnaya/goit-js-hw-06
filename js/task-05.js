'use strict';

const inputEl = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);
  output.textContent = event.currentTarget.value;

  if (inputEl.value === '') {
    output.innerHTML = 'Anonymous';
  }
}
