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

for (i = 0; i < 16; i++) {
    row.appendChild(square.cloneNode(true));
}

for (i = 0; i < 16; i++) {
    container.appendChild(row.cloneNode(true));
}



console.log(document.querySelectorAll('.square'))
document.querySelectorAll('.square').forEach(feSlave);
