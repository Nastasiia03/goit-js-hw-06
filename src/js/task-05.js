const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

const nameInput = () => {
    if (textInput.value !== "") {
        textOutput.textContent = textInput.value;
    } else {
        textOutput.textContent = "Anonymous";
    }
}

textInput.addEventListener("input", nameInput);