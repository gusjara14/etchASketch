let gridSize = 0;
let mainDiv = document.querySelector(".main");
let button = document.querySelector(".button");
let body = document.querySelector("body");

button.addEventListener("click", function() {
    body.removeChild(mainDiv);
    mainDiv = document.createElement("div");
    body.appendChild(mainDiv);
    mainDiv.classList.add("main");

    gridSize = parseInt(prompt("Please enter a grid size between 1-100", 100));

    while(gridSize>100 || gridSize<1) {
        gridSize = parseInt(prompt("Please enter a grid size BETWEEN 1-100", "1-100"));
        console.log(gridSize);
    }

    // if(gridSize>100) {
    //     gridSize = parseInt(prompt("Please enter a grid size LESS than 100", 100));
    // } else if(gridSize<1) {
    //     gridSize = parseInt(prompt("Please enter a grid size GREATER than 0", 100));
    // }

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

gridSize = 25;
