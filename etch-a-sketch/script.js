const container = document.querySelector("#container");
const rows = document.querySelector("#rows");
let paint = false;

const btnReset = document.querySelector("#reset");
btnReset.addEventListener("click", () => {
    container.innerHTML = "";
});

container.addEventListener("click", makeGrid);

function makeGrid() {
    paint = !paint;

    const numberOfRows = parseInt(rows.value);
    container.style.setProperty("--rows", numberOfRows);
    container.style.setProperty("--cols", numberOfRows);

    for (i = 0; i < (numberOfRows * numberOfRows); i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");

        cell.addEventListener("mouseenter", () => {
            if (paint) {
                cell.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
            } else {
                cell.style.backgroundColor = "none";
            }
        })
        container.appendChild(cell);
    }
}