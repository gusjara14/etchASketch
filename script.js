console.log("testtesttest");

let mainDiv = document.querySelector(".main");
let gridSize = 16;

for(let index=1;index<=gridSize;index++) {
    let newRow = document.createElement("div");
    for(let rowIndex = 0;rowIndex<=gridSize;rowIndex++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("etch");
        newDiv.textContent = index;
        newDiv.style.backgroundColor = "white";
        newRow.appendChild(newDiv);
        newDiv.addEventListener("mouseover", function() {
            newDiv.style.backgroundColor = "black";
        })
    }
    mainDiv.appendChild(newRow);


}