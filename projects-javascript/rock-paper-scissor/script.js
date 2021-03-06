let scoreUser = 0;
let scoreComputer = 0;

const btnStart = document.querySelector("#button");
const choiceUser = document.querySelector("#choice-user");
const choiceComputer = document.querySelector("#choice-computer");
const scoreUserText = document.querySelector("#score-user");
const scoreComputerText = document.querySelector("#score-computer");
const winner = document.querySelector("#winner");

// set everything to 0
btnStart.addEventListener("click", startGame);
function startGame() {
    btnStart.textContent = "First to reach 5 points wins!";
    choiceUser.textContent = "";
    choiceComputer.textContent = "";
    scoreUserText.textContent = 0;
    scoreComputerText.textContent = 0;
    winner.textContent = "";
    scoreUser = 0;
    scoreComputer = 0;
}

// choice computer
function playComputer() {
    const choices = ["Rock", "Paper", "Scissors"];
    choiceComputer.textContent = "Computer chooses " + choices[Math.floor(Math.random() * choices.length)];
}
// choice user
const btns = document.querySelectorAll(".icon");
btns.forEach(button => button.addEventListener("click", function () {
    playComputer();
    let option = button.id.charAt(0).toUpperCase() + button.id.slice(1);
    choiceUser.textContent = "You choose " + option;
    playRound();
}));

// play round
function playRound() {
    if (scoreUser == 5 || scoreComputer == 5) {
        if (scoreComputer < scoreUser) {
            winner.textContent = "YOU WIN!!!!!";
            winner.setAttribute("style", "color: #4F5D2F");
        } else {
            winner.textContent = "YOU LOOSE... OH WELL";
            winner.setAttribute("style", "color: #B53C17");
        }
        btnStart.textContent = "START OVER";
        //icons.setAttribute("style", "display: none");
    } else {
        let user = choiceUser.textContent.split(" ").pop();
        let computer = choiceComputer.textContent.split(" ").pop();
        let result = computer + " " + user;
        if (computer === user) {
            winner.textContent = "You're tied, try again";
            winner.setAttribute("style", "color: black");
        } else if (
            result === "Rock Paper" ||
            result === "Paper Scissors" ||
            result === "Scissors Rock") {
            winner.textContent = `You win, ${user} beats ${computer}`;
            winner.setAttribute("style", "color: #4F5D2F");
            scoreUser++;
            scoreUserText.textContent = scoreUser;
        } else {
            winner.textContent = `You loose, ${computer} beats ${user}`;
            winner.setAttribute("style", "color: #B53C17");
            scoreComputer++;
            scoreComputerText.textContent = scoreComputer;
        }
    }
}