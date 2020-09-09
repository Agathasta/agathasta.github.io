const container = document.querySelector("#container");
const rows = document.querySelector("#rows");

let paint = false;

container.addEventListener("click", makeGrid);
function makeGrid() {
    paint = !paint;
    const numberOfRows = parseInt(rows.value);
    container.style.setProperty("--rows", numberOfRows);
    container.style.setProperty("--cols", numberOfRows);

    for (i = 0; i < (numberOfRows * numberOfRows); i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.backgroundColor = "white";

        cell.addEventListener("mouseenter", () => {
            if (paint) {
                if (cell.style.backgroundColor == "white") {
                    let r = Math.floor(Math.random() * 255);
                    let g = Math.floor(Math.random() * 255);
                    let b = Math.floor(Math.random() * 255);
                    let color = "rgb(" + r + "," + g + "," + b + ")";
                    cell.style.backgroundColor = color;
                }
                else {
                    let color = cell.style.backgroundColor.substring(4, cell.style.backgroundColor.length - 1);
                    newColor = color.split(",")
                    let r = Math.floor(parseInt(newColor[0]) * 0.8) <= 0 ? 0 : Math.floor(parseInt(newColor[0]) * 0.8);
                    let g = Math.floor(parseInt(newColor[1]) * 0.8) <= 0 ? 0 : Math.floor(parseInt(newColor[1]) * 0.8);
                    let b = Math.floor(parseInt(newColor[2]) * 0.8) <= 0 ? 0 : Math.floor(parseInt(newColor[2]) * 0.8);
                    color = "rgb(" + r + "," + g + "," + b + ")";
                    cell.style.backgroundColor = color;
                }
            } else {
                cell.style.backgroundColor = "none";
            }
        })
        container.appendChild(cell);
    }
}

const btnReset = document.querySelector("#reset");
btnReset.addEventListener("click", () => {
    container.innerHTML = "";
});