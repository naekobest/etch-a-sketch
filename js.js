const container = document.querySelector("#container");

// Create a grid with x-rows, x-cols size
function makeGrid(rows, cols){

    for (c = 0; c < (rows * cols); c++){
        container.style.setProperty('--grid-rows', rows);
        container.style.setProperty('--grid-cols', cols);
        let cell = document.createElement("div");
        cell.addEventListener("mouseenter", function(){
            const gridCells = document.querySelectorAll("grid-item");
            gridCells.forEach(e => {
                e.style.background = "red";
            })
        });
        container.appendChild(cell).className = "grid-item";
        
    }
}

// Get a random color in hex
function getRandomColor(){
    const letters = "0123456789ABCDEF";
    const color = "#";
    for (let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

makeGrid(16, 16);