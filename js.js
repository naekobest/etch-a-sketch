const container = document.querySelector("#container");
const colorButton = document.querySelector("#color");
const resetButton = document.querySelector("#reset");
const sizeButton = document.querySelector("#size");

// Create a grid with x-rows, x-cols size
function makeGrid(rows, cols){

    for (c = 0; c < (rows * cols); c++){
        container.style.setProperty('--grid-rows', rows);
        container.style.setProperty('--grid-cols', cols);
        const div = document.createElement("div");
        container.appendChild(div);

        // EventListener for bg-color red
        div.addEventListener("mouseover", function(){
            this.style.backgroundColor = "red";
        });
    }
}

// reset the grid to original status
function resetGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    };
};

// Eventlistener to reset the grid
resetButton.addEventListener("click", () => {
    resetGrid();
    makeGrid(16, 16);
});

// Eventlistener to pick random color
colorButton.addEventListener("click", () => {
    let color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    this.style.backgroundColor = color;
    console.log(this);
});

makeGrid(16, 16);