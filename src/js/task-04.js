const increaseBtn = document.querySelector('[data-action="increment"]'); 
const decreaseBtn = document.querySelector('[data-action="decrement"]');
const counter = document.querySelector('#value');

let counterValue = 0; 

const handleClick = () => {
    return counterValue += 1;
};
const handleClick2 = () => {
    return counterValue -= 1;
};
increaseBtn.addEventListener("click", () => {
    counter.textContent = handleClick();
});

decreaseBtn.addEventListener("click", () => {
    counter.textContent = handleClick2();
});

