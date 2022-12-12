function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyColor = document.querySelector("body");
const changeColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");


changeColor.addEventListener("click", () => {
  const backColor = getRandomHexColor();
  bodyColor.style.backgroundColor = backColor;
  spanColor.textContent = backColor;
});
