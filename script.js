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
    console.log(event.target);
    const square = event.target;
    square.classList.add("hovered-over");
}

generateGrid(numOfSquaresPerSide);