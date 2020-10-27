const container = document.querySelector("#container");

function makeGrid(rows, cols){

    for (c = 0; c < (rows * cols); c++){
        container.style.setProperty('--grid-rows', rows);
        container.style.setProperty('--grid-cols', cols);
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    }
}

makeGrid(16, 16);