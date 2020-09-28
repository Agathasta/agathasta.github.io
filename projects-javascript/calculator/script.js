const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector("#display")
let number; // stores number
let operator; // stores the operator
let result;
let clearDisplay = false // check if display needs to be cleared

// display numbers
for (i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", displayNumbers)
}
function displayNumbers(n) {
    if (clearDisplay) {
        display.textContent = "";
    }
    display.textContent += n.target.value;
    clearDisplay = false;
}

// display operators
for (i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", storeOperator)
}
function storeOperator(o) {
    clearDisplay = true;
    display.textContent = o.target.value;
}
