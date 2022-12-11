function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumber = document.querySelector("#number");
const divBox = document.querySelector("#boxes");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");


const getAmount = () => {
  const amount = inputNumber.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const basicSize = 30;
  const fragment = document.createDocumentFragment();
  const boxes = [];
  boxes.forEach(box => {
    const size = basicSize + 10;
    const b = document.createElement("div");
    b.classList.add("box");
    b.style.width = size + "px";
    b.style.height = size + "px";
    b.style.backgroundColor = getRandomHexColor();
    divBox.append(fragment);
  })
};

createButton.addEventListener("click", getAmount)