// --- 1. SELECT DOM ELEMENTS ---
const container = document.querySelector('.container');
const button = document.querySelector('button');

// --- 2. MAKE THE GRID ---
for (let i=0; i<256; i++) {
    const div = document.createElement('div');
    container.appendChild(div);
}
const grid = document.querySelectorAll('.container div');

// --- 3. DEFINE FUNCTION ---
function newGrid() {
    container.innerHTML = '';
    const gridSize = +prompt('How many squares per side? (Max : 100)' );
    if (gridSize > 0 && gridSize < 101) {
        for (let i=0; i<(gridSize*gridSize); i++) {
            const div = document.createElement('div');
            div.style.cssText = `height : calc(100% / ${gridSize}); width : calc(100% / ${gridSize})`;
            container.appendChild(div);
            hoverGrid(div);
        };
    } else {
        alert('Invalid number. Please enter within the range 1 - 100.');
    }
}

function hoverGrid(hover) {
    hover.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = 'blue';
        let currentOpacity = parseFloat(e.target.style.opacity || 0);
        let newOpacity = Math.min(currentOpacity + 0.1, 1);
        e.target.style.opacity = newOpacity;     
    }
)}

// --- 4. ADD EVENT LISTENERS ---
button.addEventListener('click', newGrid);
grid.forEach(hoverGrid);