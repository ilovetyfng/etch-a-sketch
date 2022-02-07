const container = document.querySelector('#container');
const row = document.createElement('div');
const square = document.createElement('div');

row.setAttribute('id', 'row');
square.setAttribute('id', 'square');

for (i = 0; i < 16; i++) {
    row.appendChild(square.cloneNode(true));
}

for (i = 0; i < 16; i++) {
    container.appendChild(row.cloneNode(true));
}