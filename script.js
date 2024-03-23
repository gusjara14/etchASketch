//declare variables through DOM
let mainDiv = document.querySelector(".main");
let button = document.querySelector(".button");
let body = document.querySelector("body");

//Event listener that will create a new grid based on input from user
button.addEventListener("click", function() {
    let gridSize = 0;

    //This is so that if there was already a grid created it will remove it
    body.removeChild(mainDiv);
    
    //Creating + appending a new main div that will hold the grid
    //Also adding a "main" class to this div element for CSS
    mainDiv = document.createElement("div");
    body.appendChild(mainDiv);
    mainDiv.classList.add("main");

    // gridSize = parseInt(prompt("Please enter a grid size between 1-100", 100));

    //Ask the user for a grid size between 1-100
    while(gridSize>100 || gridSize<1 || gridSize == NaN) {
        gridSize = parseInt(prompt("Please enter a grid size BETWEEN 1-100", "1-100"));
        console.log(gridSize);
        // return gridSize;
    }

    // if(gridSize>100) {
    //     gridSize = parseInt(prompt("Please enter a grid size LESS than 100", 100));
    // } else if(gridSize<1) {
    //     gridSize = parseInt(prompt("Please enter a grid size GREATER than 0", 100));
    // }

    //This loop is what creates the rows and cells for the grid
    //we are using the "gridSize" variable that was given by user input as the exit condition
    for(let index=0;index<gridSize;index++) {
        let newRow = document.createElement("div");
        newRow.classList.add("rows");
        newRow.classList.add("etch");
    
        for(let rowIndex = 0;rowIndex<gridSize;rowIndex++) {
            let newDiv = document.createElement("div");
            newDiv.classList.add("blocks");
            newDiv.classList.add("etch");
    
            // newDiv.textContent = index;
            newDiv.style.backgroundColor = "white";
            newRow.appendChild(newDiv);
            newDiv.addEventListener("mouseover", function() {
                newDiv.style.backgroundColor = "black";
            })
        }
        mainDiv.appendChild(newRow);
    }
})