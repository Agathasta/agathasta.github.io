const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const displayNum = document.querySelector("#display-num");
const displayOp = document.querySelector("#display-op");
let num1; // stores number 1
let operator; // stores the operator
let result; // stores the result
let calculateResult = false; // check if an operation should be performed
let clearDisplay = false // check if display needs to be cleared
let numLock = true;
let opLock = false;

// display numbers
for (i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", displayNumbers)
}
function displayNumbers(n) {
    if (numLock) {
        if (clearDisplay) {
            num1 = displayNum.textContent;
            displayNum.textContent = "";
        }
        displayNum.textContent += n.target.value;
        clearDisplay = false;
        opLock = true;
    }
}

// display operators
for (i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", storeOperator);
}
function storeOperator(o) {
    if (opLock) {
        displayOp.textContent = o.target.value;
        opLock = false;
        if (calculateResult) {
            operate(num1, displayNum.textContent, operator);
        }
        operator = displayOp.textContent;
        calculateResult = true;
        clearDisplay = true;
        operator === "=" ? numLock = false : numLock = true;

    }
}

function operate(num1, num2, operator) {
    if (operator === "+") {
        result = Number(num1) + Number(num2);
    } else if (operator === "-") {
        result = Number(num1) - Number(num2);
    } else if (operator === "*") {
        result = Number(num1) * Number(num2);
    } else if (operator === "/") {
        displayNum.textContent == 0 ? result = "b" + "a" + +"a" + "a" : result = Number(num1) / Number(num2);
    }
    displayNum.textContent = result;
    opLock = true;
}
