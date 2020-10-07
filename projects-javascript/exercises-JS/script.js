// caesar cipher
const shiftInput = document.querySelector("#shift")
shiftInput.addEventListener("input", caesar);

function caesar() {
  const clearText = document.querySelector("#clearText").value
  const shift = parseInt(shiftInput.value) % 26;

  let asciiNum = [];
  let newStr = [];

  for (let i = 0; i < clearText.length; i++) {

    if (clearText[i].match(/[A-Z]/)) {    // Uppercase: ASCII between 65 and 90
      asciiNum = clearText.charCodeAt(i);
      if (shift > 0 && (asciiNum + shift) > 90) {
        asciiNum = 64 + (shift - (90 - asciiNum));
      } else if (shift < 0 && (asciiNum + shift) < 65) {
        asciiNum = (91 + shift) + (asciiNum - 65);
      } else {
        asciiNum += shift;
      }
      newStr.push(String.fromCharCode(asciiNum))

    } else if (clearText[i].match(/[a-z]/)) {     // Lowercase: ASCII between 97 and 122
      asciiNum = clearText.charCodeAt(i);
      if (shift > 0 && (asciiNum + shift) > 122) {
        asciiNum = 64 + (shift - (90 - asciiNum));
      } else if (shift < 0 && (asciiNum + shift) < 97) {
        asciiNum = (91 + shift) + (asciiNum - 65);
      } else {
        asciiNum += shift;
      }
      newStr.push(String.fromCharCode(asciiNum))

    } else {    // not a character, keep as it is
      asciiNum = clearText[i];
      newStr.push(asciiNum);
    }
  }
  document.querySelector("#cipher").textContent = newStr.join("");
}

// palindromes
const posPalin = document.querySelector("#posPalin")
posPalin.addEventListener("input", palindromes);

function palindromes() {
  const possiblePalindrome = posPalin.value;
  const newStr = possiblePalindrome.toLowerCase().split("").filter((elem) => elem.match(/^[A-Za-z]+$/));
  newStr == "" ? document.querySelector("#pali").textContent = ""
    : newStr.join("") === newStr.reverse().join("") ? document.querySelector("#pali").textContent = "Yes, this is a palindrome!"
      : document.querySelector("#pali").textContent = "No, this is not a palindrome";
}

// tempConversion
/*  Fahrenheit to Celsius - ftoc: [°C] = ([°F] − 32) × ​5⁄9
    Celsius to Fahrenheit - ctof [°F] = [°C] × ​9⁄5 + 32 */

const resultTempF = document.querySelector("#f");
resultTempF.addEventListener("input", ftoc);

function ftoc() {
  const ftoc = parseInt(resultTempF.value);
  let c = (ftoc - 32) * (5 / 9);
  c = (Math.round(c * 10)) / 10;
  document.querySelector("#tempC").textContent = c + " C°";
}

const resultTempC = document.querySelector("#c");
resultTempC.addEventListener("input", ctof);

function ctof() {
  const ctof = parseInt(resultTempC.value);
  let f = (ctof * (9 / 5)) + 32;
  f = (Math.round(f * 10)) / 10;
  document.querySelector("#tempF").textContent = f + " F°";
}

// leapYears
/*  Leap years are divisible by four. 
    Leap years are NOT divisible by 100 unless they are divisible by 400.*/
const resultYears = document.querySelector("#year");
resultYears.addEventListener("input", leapYears)

function leapYears() {
  const year = resultYears.value;
  if ((year % 100 == 0) && (year % 400 != 0)) {
    document.querySelector("#leap-year").textContent = "No leap year";
  } else if (year % 4 == 0) {
    document.querySelector("#leap-year").textContent = "Leap year!";
  } else {
    document.querySelector("#leap-year").textContent = "No leap year";
  }
}

// sumAll
const resultSum = document.querySelector("#sumB");
resultSum.addEventListener("input", sumAll)

function sumAll() {
  const num1 = parseInt(document.querySelector("#sumA").value);
  const num2 = parseInt(resultSum.value);
  if (isNaN(num1) || num1 < 0 || isNaN(num2) || num2 < 0) {
    document.querySelector("#sum").textContent = "ERROR";
  } else {
    let sum = 0;
    for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
      sum += i;
    }
    document.querySelector("#sum").textContent = sum;
  }
}

// removeFromArray
const resultArray = document.querySelector("#args");
resultArray.addEventListener("input", removeFromArray);

function removeFromArray() {
  let arr = document.querySelector("#array").value.split(" ");
  let args = resultArray.value.split(" ");
  let pos, newArr;
  for (let i = 0; i < args.length; i++) {
    if (arr.indexOf(args[i]) != -1) {
      pos = arr.indexOf(args[i]);
      newArr = arr.splice(pos, 1);
    }
  }
  newArr = "["
  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 1) {
      newArr += arr[i] + ", ";
    } else {
      newArr += arr[i] + "]";
    }
  }
  document.querySelector("#new-array").textContent = newArr;
}

// reverseString

const resultReverse = document.querySelector("#string");
resultReverse.addEventListener("input", reverseString);

function reverseString() {
  let str = resultReverse.value;
  document.querySelector("#reverse").textContent = str.split("").reverse().join("");
}

// repeatString

const resultRepeat = document.querySelector("#number-repeats");
resultRepeat.addEventListener("input", repeatString);

function repeatString() {
  let string = document.querySelector("#string-repeat").value;
  let number = parseInt(resultRepeat.value);
  let newString = "";
  if (number > 0) {
    newString = string.repeat(number);
    document.querySelector("#repeated").textContent = newString;
  } else {
    document.querySelector("#repeated").textContent = "ERROR";
  }
}
