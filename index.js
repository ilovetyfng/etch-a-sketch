function createGrid (height = 16, width = 16) {
    row.innerHTML = '';
    container.innerHTML = '';
    for (i = 0; i < width; i++) {
        row.appendChild(square.cloneNode(true));
    }
    for (i = 0; i < height; i++) {
        container.appendChild(row.cloneNode(true));
    }
    attachEListen();
}

function resetGrid () {
    let height = prompt('Enter number of row:');
    let width = prompt('Enter number of column:');
    createGrid(height, width);
}


function attachEListen () {
    document.querySelectorAll('.square').forEach(feSlave);
}

function feSlave (e) {
    e.addEventListener('mouseover', changeColor);
}

function changeColor (e){
    e.target.classList.add('hovering');
}

const container = document.querySelector('#container');
const row = document.createElement('div');
const square = document.createElement('div');

row.setAttribute('id', 'row');
square.setAttribute('class', 'square');

createGrid();
