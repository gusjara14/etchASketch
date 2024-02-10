console.log("testtesttest");

let mainDiv = document.querySelector(".main");

for(let index=1;index<255;index++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("etch");
    newDiv.textContent = index;
    mainDiv.appendChild(newDiv);
}