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
    const squares = document.querySelectorAll('div.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = getRandomColor();
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

createGrid(20);