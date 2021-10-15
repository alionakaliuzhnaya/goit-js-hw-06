const bodyEl = document.querySelector('body');
const changeOfColor = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

changeOfColor.addEventListener('click', onButtonClick);

function onButtonClick(event) {
  event.preventDefault();
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorEl.textContent = getRandomHexColor();
}
