console.log("testtesttest");

let mainDiv = document.querySelector(".main");

for(let index=1;index<=256;index++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("etch");
    newDiv.textContent = index;
    mainDiv.appendChild(newDiv);
    newDiv.addEventListener("mouseover", function() {
        newDiv.style.backgroundColor = "black";
    })
}