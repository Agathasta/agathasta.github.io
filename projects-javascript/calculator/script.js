const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const ac = document.querySelector("#ac");

const displayNum = document.querySelector("#display-num");
const displayOp = document.querySelector("#display-op");
let num1, operator, result;
let calculateResult = false; // check if an operation should be performed
let clearDisplay = false // check if display needs to be cleared
let numLock = false;
let opLock = true;

// display numbers
numbers.forEach(number => number.addEventListener("click", n => {

    if (!numLock) {
        // new number
        if (clearDisplay) {
            num1 = displayNum.textContent;
            displayNum.textContent = "";
        }
        // display number unless it's 2nd float point
        if (n.target.id === "float" && displayNum.textContent.includes(".")) {
            displayNum.textContent = displayNum.textContent
        } else {
            displayNum.textContent += n.target.value;
        }
        // delete one digit or change sign
        if (!clearDisplay && n.target.id === "del") {
            displayNum.textContent = displayNum.textContent.substring(0, displayNum.textContent.length - 1);
            displayNum.textContent === "" ? opLock = true : opLock = false;
        } else if (!clearDisplay && n.target.id === "+/-") {
            displayNum.textContent *= -1;
        }
        clearDisplay = false;
        opLock = false;
    }
}))

// display operators
operators.forEach(operator => operator.addEventListener("click", storeOperator))

function storeOperator(o) {
    if (!opLock) {
        displayOp.textContent = o.target.value;
        opLock = true;
        numLock = false;
        if (calculateResult) {
            operate(num1, displayNum.textContent, operator);
        }
        operator = displayOp.textContent;
        calculateResult = true;
        clearDisplay = true;
        if (operator === "=") {
            numLock = true;
            opLock = false;
        }
    }
}

function operate(num1, num2, operator) {
    if (operator === "+") {
        result = +num1 + +num2;
    } else if (operator === "-") {
        result = +num1 - +num2;
    } else if (operator === "*") {
        result = +num1 * +num2;
    } else if (operator === "/") {
        if (+num2 === 0) {
            displayNum.textContent = "b" + "a" + +"a" + "a";
            numLock = true;
            opLock = true;
            return;
        } else {
            result = +num1 / +num2;
        }
    }
    displayNum.textContent = +result.toFixed(3);
}

ac.addEventListener("click", clear)

function clear(d) {
    if (d.target.id === "ac") {
        numLock = false;
        opLock = true;
        clearDisplay = true;
        calculateResult = false;
        displayNum.textContent = "";
        displayOp.textContent = "";
    }
}