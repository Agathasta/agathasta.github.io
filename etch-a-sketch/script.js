const container = document.querySelector("#container");

function makeGrid(rows) {
    container.innerHTML = "";
    container.style.setProperty("--rows", rows);
    container.style.setProperty("--cols", rows);

    for (i = 0; i < (rows * rows); i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener("mouseenter", () => {
            cell.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
        })
        container.appendChild(cell);
    };
};
let rows = prompt("How many rows? Enter a number from 2 - 80");
makeGrid(rows);

const btnReset = document.querySelector("#reset");
btnReset.addEventListener("click", function () {
    rows = prompt("How many rows? Enter a number from 2 - 80");
    makeGrid(rows)
});

