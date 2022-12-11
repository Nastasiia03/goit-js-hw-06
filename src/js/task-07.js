const fontSizeControl = document.querySelector("#font-size-control");
const textFontSize = document.querySelector("#text"); 


const range = (event) => {
    textFontSize.style.fontSize = event.currentTarget.value + "px";
};

fontSizeControl.addEventListener("input", range);

