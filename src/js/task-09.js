function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyColor = document.querySelector("body");
const changeColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

const color = () => {
  bodyColor.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = `${getRandomHexColor()}`;
}

changeColor.addEventListener("click", color)
