const container = document.querySelector('.container');

for (let i=0; i<256; i++) {
    const div = document.createElement('div');
    container.appendChild(div);
}

const grid = document.querySelectorAll('.container div');
grid.forEach(hover => {
    hover.addEventListener('mouseenter', (e) => {
        e.target.style.cssText = 'background: blue;';
    })
});