const squareDivs = document.querySelector('.squareDivs');
const rainbowbtn = document.querySelector('.rainbowbtn')
const blackbtn = document.querySelector('.blackbtn')
const eraserbtn = document.querySelector('.eraserbtn')
const cleanbtn = document.querySelector('.cleanbtn')

let quantify = 0

function size() {
    const size = document.getElementById("size").value;
    quantify = size
}

function createDivs() {
    let totalOfDivs = (quantify * quantify);
    for (i = 0; i < `${totalOfDivs}`; i++) {
        const divs = document.createElement('div');
        divs.classList.add('gridDivs');
        squareDivs.appendChild(divs)
    }
    squareDivs.setAttribute('style', `grid-template-columns: repeat(${quantify}, 1fr`)
}

function paintBlack() {
    const divsBlack = document.querySelectorAll('.gridDivs')
    divsBlack.forEach(gridDivs => {
        gridDivs.addEventListener('mouseover', () => {
            gridDivs.setAttribute('style', 'background-color: black')
        })
    })
}

function eraser() {
    const divsBlack = document.querySelectorAll('.gridDivs')
    divsBlack.forEach(gridDivs => {
        gridDivs.addEventListener('mouseover', () => {
            gridDivs.setAttribute('style', 'background-color: whitesmoke;')
        })
    })
}

function rainbowColor() {
    const divsBlack = document.querySelectorAll('.gridDivs')
    divsBlack.forEach(gridDivs => {
        gridDivs.addEventListener('mouseover', () => {
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            gridDivs.setAttribute('style', `background-color: #${randomColor}`)
        })
    })
}

function clean() {
    const divsBlack = document.querySelectorAll('.gridDivs')
    divsBlack.forEach(gridDivs => {
        gridDivs.setAttribute('style', 'background-color: whitesmoke;')
    })
}


function deleteAll() {
    const divsBlack = document.querySelectorAll('.gridDivs')
    divsBlack.forEach(gridDivs => {
        gridDivs.remove()
    })
}

function selectOption() {
    rainbowbtn.addEventListener('click', () => {
        rainbowColor();
    })
    eraserbtn.addEventListener('click', () => {
        eraser();
    })
    blackbtn.addEventListener('click', () => {
        paintBlack();
    })
    cleanbtn.addEventListener('click', () => {
        clean();
    })
}

function start() {
    const start = document.querySelector(".startbtn")
    start.addEventListener('click', () => {
        size()
        if (quantify < 12 || quantify > 64) {
            alert("Select a number recommended! The page will not run correctly")
        } else {
            deleteAll()
            createDivs()
        }
    })
}

start();
selectOption();








