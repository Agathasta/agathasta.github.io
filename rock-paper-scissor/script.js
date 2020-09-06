const main = document.querySelector("main");

// Declare a function computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
const choices = ["Rock", "Paper", "Scissors"];
function computerPlay() {
    let computerChoice = document.querySelector("#computer-choice");
    computerChoice.textContent = "Computer chooses " + choices[Math.floor(Math.random() * 3)];
    main.appendChild(computerChoice);
}
const btns = document.querySelectorAll("button");
btns.forEach(button => button.addEventListener("click", function () {
    computerPlay();
    let option = button.id.charAt(0).toUpperCase() + button.id.slice(1);
    let userChoice = document.querySelector("#user-choice");
    userChoice.textContent = "User chooses " + option;
    main.appendChild(userChoice);
    playFiveRounds();

}));
let userScore = 0;
let computerScore = 0;

function playFiveRounds() {
    let rounds = 1;
    for (let i = 1; i <= 5; i++) {
        console.log("Round " + rounds++);
        playRound();
    }
    computerScore < userScore
        ? alert("YOU WIN!!!!!")
        : alert("you loose, oh well");
}

function playRound() {
    let userChoice = document.querySelector("#user-choice").textContent.split(" ").pop();
    let computerChoice = document.querySelector("#computer-choice").textContent.split(" ").pop();

    // Compare both choices, declare if winner or loser and why. Actualize user score
    let result = computerChoice + " " + userChoice;

    if (computerChoice === userChoice) {
        alert("You're tied, try again");
    } else if (
        result === "Rock Paper" ||
        result === "Paper Scissors" ||
        result === "Scissors Rock"
    ) {
        alert(`You win, ${userChoice} beats ${computerChoice}`);
        userScore++;
        console.log("User score: " + userScore);
    } else {
        alert(`You loose, ${computerChoice} beats ${userChoice}`);
        computerScore++;
        console.log("Computer score: " + computerScore);
    }
}



/* OLD SCRIPT
const choices = ["Rock", "Paper", "Scissors"];
// Declare a function computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
function computerPlay() {
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    return computerChoice;
}

// Prompt an input from the user. Make it case insensitive
function userPlay() {
    let userChoice = prompt("Choose one");
    userChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase();

    while (!choices.includes(userChoice)) {
        alert("Wrong item!");
        userPlay();
    }
    return userChoice;
}
// Declare a function with 2 parameters: computer + user choice
function playRound() {
    let userChoice = userPlay();
    let computerChoice = computerPlay();

    // Compare both choices, declare if winner or loser and why. Actualize user score
    let result = computerChoice + " " + userChoice;
    console.log(result);
    if (computerChoice === userChoice) {
        alert("You're tied, try again");
        playRound();
    } else if (
        result === "Rock Paper" ||
        result === "Paper Scissors" ||
        result === "Scissors Rock"
    ) {
        alert(`You win, ${userChoice} beats ${computerChoice}`);
        userScore++;
        console.log("User score: " + userScore);
    } else {
        alert(`You loose, ${computerChoice} beats ${userChoice}`);
        computerScore++;
        console.log("Computer score: " + computerScore);
    }
}

// Play 5 rounds, keep track and declare a winner
let userScore = 0;
let computerScore = 0;
function playFiveRounds() {
    let rounds = 1;
    for (let i = 1; i <= 5; i++) {
        console.log("Round " + rounds++);
        playRound();
    }
    computerScore < userScore
        ? alert("YOU WIN!!!!!")
        : alert("you loose, oh well");
}
playFiveRounds();
*/