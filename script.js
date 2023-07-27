const USER_GRID_PROMPT = "How many squares per side do you want? (Limit: 100)";
const RETRY_GRID_PROMPT = "Invalid input, please try another number(1-100) or press cancel.";
const defaultSquaresPerSide = 16;

function generateGrid(numOfSquaresPerSide){
    const sketchGrid = document.querySelector(".container");

    for(let i = 1; i <= numOfSquaresPerSide; i++){
        const row = document.createElement("div");
        row.classList.add("row-container");

        for(let j = 1; j <= numOfSquaresPerSide; j++){
            const square = initializeSquare();
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

function initializeSquare() {
    const newSquare = document.createElement("div");
    newSquare.classList.add("square");
    newSquare.addEventListener("mouseover", paintSquare);
    return newSquare;
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
    let isValidInput = false;
    let numOfSquaresPerSide;

    do {
        numOfSquaresPerSide = Number(userInput);
        if(userInput === null)
            return;
        else if(numOfSquaresPerSide === NaN || numOfSquaresPerSide > 100
                   || numOfSquaresPerSide < 1)
            userInput = prompt(RETRY_GRID_PROMPT, "64");
        else
            isValidInput = true;
    }while(!isValidInput);

    deleteGrid();
    generateGrid(numOfSquaresPerSide);
}

const generateButton = document.querySelector(".generateBtn");
generateButton.addEventListener("click", propmtUserForGrid);

generateGrid(defaultSquaresPerSide);