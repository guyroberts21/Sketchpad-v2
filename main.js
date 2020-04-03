let n = 20;
let erase = false;

function createGrid(n) {
    const grid = document.getElementById('grid');
    grid.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${n}, 1fr)`;
    // Create grid items (squares) within the grid
    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= n; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            grid.appendChild(square);
        }
    }

    // Change the color of the boxes when hover
    const squares = document.querySelectorAll('div.square')
    squares.forEach(square => {
        square.addEventListener('mouseover', function(e) {
            if (erase === true) {
                e.target.style.backgroundColor = '#eee';
            } else {
                e.target.style.backgroundColor = getRandomColor(); 
            }
        })
    });
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function resize() {
    n = prompt('What size grid would you like?');
    while (isNaN(n)) {
        n = prompt('Sorry. What size grid would you like?');
    }
    clear();
    resetGrid();
    createGrid(n);
}

// Remove all child elements... 
// https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
function resetGrid() {
    const grid = document.getElementById('grid');
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
}

function clear() {
    const squares = document.querySelectorAll('div.square');
    squares.forEach(square => {square.style.backgroundColor = "#eee"});
}

// Resize button
const resizeBtn = document.getElementById('resize');
resizeBtn.addEventListener('click', resize);

// Clear button
const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', clear);

// Erase button
const eraseBtn = document.getElementById('erase');
eraseBtn.addEventListener('click', () => {erase = !erase});

createGrid(n);