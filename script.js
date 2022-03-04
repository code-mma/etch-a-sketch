
const body = document.querySelector('body');
const createButton = document.createElement('button')
createButton.setAttribute('id','clear-button');
createButton.textContent = 'CLEAR';
body.appendChild(createButton);

for (i = 0; i < 16; i++) {
    const container = document.querySelector('container');
    const createSquare = document.createElement('div');
    createSquare.classList.add('box');
    container.appendChild(createSquare);
}

var boxes = document.querySelectorAll('.box');
boxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'red';
    });
    createButton.addEventListener('click', () => {
        box.style.backgroundColor = 'yellowgreen';
    });
});