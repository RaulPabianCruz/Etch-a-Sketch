let numOfSquaresPerSide = 16;

function generateGrid(numOfSquares){
    const sketchGrid = document.querySelector(".container");

    for(let i = 1; i <= numOfSquares; i++){
        const row = document.createElement("div");
        row.classList.add("row-container");
        for(let j = 1; j <= numOfSquares; j++){
            const square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
        }
        sketchGrid.appendChild(row);
        console.log(row.children.length);
    }
    console.log(sketchGrid.children.length);
}

generateGrid(numOfSquaresPerSide);