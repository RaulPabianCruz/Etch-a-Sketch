const USER_GRID_PROMPT = "How many squares per side do you want? (Limit: 100)";
let numOfSquaresPerSide = 16;

function generateGrid(numOfSquares){
    const sketchGrid = document.querySelector(".container");

    for(let i = 1; i <= numOfSquares; i++){
        const row = document.createElement("div");
        row.classList.add("row-container");
        for(let j = 1; j <= numOfSquares; j++){
            const square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseover", paintSquare);
            row.appendChild(square);
        }
        sketchGrid.appendChild(row);
    }
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
    let numOfSquares = Number(userInput);
    deleteGrid();
    generateGrid(numOfSquares);
}

const generateButton = document.querySelector(".generateBtn");
generateButton.addEventListener("click", propmtUserForGrid);

generateGrid(numOfSquaresPerSide);