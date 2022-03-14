let body = document.querySelector('body');
let container = document.querySelector('container');

let createButton = document.createElement('button')
createButton.setAttribute('id','clear-button');
createButton.textContent = 'CLEAR';
body.appendChild(createButton);

let sideNum = 64;

createGrid(sideNum);

function createGrid (sideNum) {
    for (j = 1; j <= sideNum; j++){
        for (i = 1; i <= sideNum; i++) {
            const createSquare = document.createElement('div');
            createSquare.classList.add('box');
            container.appendChild(createSquare);

            if (i == sideNum) {
                const createBreak = document.createElement('div');
                createBreak.classList.add('break');
                container.appendChild(createBreak);
            }
        }
    }

    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = 'red';
        });
    });
}

createButton.addEventListener('click', () => {

    do {
        sideNum = prompt('Enter your desired unit length of side: ')

        if (sideNum > 100) {
            alert('Side length must not excess 100 units')
        }
        else {
            createGridAgain();
        }
    }
    while (sideNum > 100)
    
    function createGridAgain() {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        createGrid(sideNum);
    }
});



