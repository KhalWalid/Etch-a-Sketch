const gridContainer = document.querySelector('#gridContainer');
const squareDiv = document.createElement('div');
squareDiv.classList.add('squareDiv');
const button = document.querySelector('button');
let askSize = 32;

function random_rgba() {
    let o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function createGrid() {
    for (let i = 0; i < askSize**2; i++) {
        gridContainer.appendChild(squareDiv.cloneNode());
    }
    const squares = document.querySelectorAll('.squareDiv');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.setAttribute('style', `background-color: ${random_rgba()}`)
        });
    });
    gridContainer.setAttribute('style', `grid-template: repeat(${askSize}, 1fr) / repeat(${askSize}, 1fr);`);
}

createGrid()

button.addEventListener('click', () => {
    askSize = 150
    while (askSize>100) askSize = prompt('Enter a size < 101');
    gridContainer.innerHTML = '';
    createGrid();
});
