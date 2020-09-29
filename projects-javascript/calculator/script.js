const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const displayNum = document.querySelector("#display-num");
const displayOp = document.querySelector("#display-op");
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
        displayNum.textContent = "";
    }
    displayNum.textContent += n.target.value;
    clearDisplay = false;
}

// display operators
for (i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", storeOperator);
}
function storeOperator(o) {
    clearDisplay = true;
    displayOp.textContent = o.target.value;
}
