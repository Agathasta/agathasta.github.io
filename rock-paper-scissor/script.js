const main = document.querySelector("main");

let roundText = document.querySelector("#round");
roundText.addEventListener("click", start);

function start() {
    roundText.textContent = "Round 1";
    main.appendChild(roundText);
    userScoreText.textContent = 0;
    computerScoreText.textContent = 0;
    userScore = 0;
    computerScore = 0;
    winText.textContent = "";
}

// Define computer choice, user choice and start playing:
const btns = document.querySelectorAll(".icon");
btns.forEach(button => button.addEventListener("click", function () {
    computerPlay();
    let option = button.id.charAt(0).toUpperCase() + button.id.slice(1);
    let userChoice = document.querySelector("#user-choice");
    userChoice.textContent = "You choose " + option;
    playFiveRounds();
}));

// Declare a function computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    let computerChoice = document.querySelector("#computer-choice");
    computerChoice.textContent = "Computer chooses " + choices[Math.floor(Math.random() * 3)];
}
// Stop the game after 5 rounds
let rounds = 2;
let userScore = 0;
let userScoreText = document.querySelector("#user-score");
let computerScore = 0;
let computerScoreText = document.querySelector("#computer-score");
let winText = document.querySelector("#winner");

function playFiveRounds() {
    if (rounds < 6) {
        playRound();
    }
    else if (rounds >= 6) {
        playRound();
        computerScore < userScore
            ? winText.textContent = "YOU WIN!!!!!"
            : winText.textContent = "YOU LOOSE... OH WELL";
        main.appendChild(winText);
        roundText.textContent = "START OVER";
        main.appendChild(roundText);
        rounds = 2;
    }
}
// Play one round. Compare both choices, declare if winner or loser and why. Actualize user score
function playRound() {
    let userChoice = document.querySelector("#user-choice").textContent.split(" ").pop();
    let computerChoice = document.querySelector("#computer-choice").textContent.split(" ").pop();
    let result = computerChoice + " " + userChoice;

    if (computerChoice === userChoice) {
        winText.textContent = "You're tied, try again";
        winText.setAttribute("style", "color: black")
    } else if (
        result === "Rock Paper" ||
        result === "Paper Scissors" ||
        result === "Scissors Rock"
    ) {
        roundText.textContent = "Round " + rounds++;
        winText.textContent = `You win, ${userChoice} beats ${computerChoice}`;
        userScore++;
        winText.setAttribute("style", "color: #4F5D2F")
        userScoreText.textContent = userScore;
    } else {
        roundText.textContent = "Round " + rounds++;
        winText.textContent = `You loose, ${computerChoice} beats ${userChoice}`;
        computerScore++;
        winText.setAttribute("style", "color: #B53C17")
        computerScoreText.textContent = computerScore;
    }
}