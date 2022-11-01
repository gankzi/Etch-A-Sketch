let container = document.querySelector(".container");
let setGrid = document.getElementById("setgrid");
let slider = document.getElementById("myRange");
let gridSize = document.getElementById("gridSize");
let reset = document.getElementById("reset");
let colorChoice = document.getElementById("color-choice");
let color = document.getElementById("input-color");

let currentGrid = 16;

// Set slider value and new grid size
slider.oninput = function () {
    gridSize.innerHTML = this.value;
    currentGrid = this.value;    
};

// Change Grid Size when button pressed
setGrid.addEventListener("click", () => {makeGrid(currentGrid)});

// reset to a blank grid
reset.addEventListener("click", () => {
    let grids = container.querySelectorAll("div");
    grids.forEach(grid => grid.style.backgroundColor = "white");
});

if(colorChoice) {
    colorChoice.addEventListener("click", () => {
    colorDiv();
})
};

function makeGrid(x) {
    container.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${x}, 1fr)`;
    
    refreshDiv();

    let gridNumber = x * x;

    for (i = 0; i < gridNumber; i++) {
        let grid = document.createElement("div");
        grid.classList.add("grid");
        grid.addEventListener("mouseover", colorDiv);
        container.appendChild(grid);
    };
}

function refreshDiv() {
    while(container.firstChild) {
        container.firstChild.remove();
    }
}

function colorDiv(event) {
    event.target.style.backgroundColor = color.value;
}

makeGrid(16);




