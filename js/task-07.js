const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', changeOfSize);

function changeOfSize(event) {
  textEl.style.fontSize = inputEl.value + 'px';
}
