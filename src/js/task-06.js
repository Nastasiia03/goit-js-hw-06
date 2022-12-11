const validation = document.querySelector("#validation-input"); 
const validationLength = Number(validation.dataset.length);

validation.addEventListener("blur", () => {
    if (validation.value.length === validationLength) {
        validation.classList.add("valid");
    } else {
        validation.classList.add("invalid");
    }
});

validation.addEventListener("focus", () => {
    if (validation.classList.contains("valid")) {
        validation.classList.remove("valid");
    } else if (validation.classList.contains("invalid")) {
        validation.classList.remove("invalid")
    }
});

