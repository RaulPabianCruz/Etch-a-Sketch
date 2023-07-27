const USER_GRID_PROMPT = "How many squares per side do you want? (Limit: 100)";
const defaultSquaresPerSide = 16;

function generateGrid(numOfSquaresPerSide){
    const sketchGrid = document.querySelector(".container");

    for(let i = 1; i <= numOfSquaresPerSide; i++){
        const row = document.createElement("div");
        row.classList.add("row-container");
        for(let j = 1; j <= numOfSquaresPerSide; j++){
            const square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseover", paintSquare);
            row.appendChild(square);
        }
        sketchGrid.appendChild(row);
    }
}

function deleteGrid() {
    const sketchGrid = document.querySelector(".container");
    const numOfSquaresPerSide = sketchGrid.children.length;

    for(let i = 1; i <= numOfSquaresPerSide; i++)
        sketchGrid.removeChild(sketchGrid.firstChild);
}

function paintSquare(event) {
    const square = event.target;
    const isPainted = square.classList.contains("hovered-over");
    if(!isPainted){
        square.classList.add("hovered-over");
    }
}

function propmtUserForGrid() {
    let userInput = prompt(USER_GRID_PROMPT, "64");
    let numOfSquaresPerSide = Number(userInput);
    deleteGrid();
    generateGrid(numOfSquaresPerSide);
}

const generateButton = document.querySelector(".generateBtn");
generateButton.addEventListener("click", propmtUserForGrid);

generateGrid(defaultSquaresPerSide);