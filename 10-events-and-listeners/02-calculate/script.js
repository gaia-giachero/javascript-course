/*
    ● Add inputs for half number, percentage and circle area
    ● Use the functions from the previous calculator exercises
    ● For each operation, create an event listener for the button, and when it's
        clicked, find the value of the appropriate input and show the result of the
        calculation in the solution div
    ● Afterwards, change the code so that you respond to key presses so that the
        user doesn't have to click the button
*/

let solution = document.getElementById('solution');

function squareNumber(){
    let nSquare = document.getElementById('square-input').value;
    const square = nSquare ** 2;
    solution.textContent = square;
}

function halfNumber(){
    let nHalf = document.getElementById('half-input').value;
    const half = nHalf/2;
    solution.textContent = half;
}

function percentOf(){
    let n1 = document.getElementById('percent-input').value;
    let n2 = document.getElementById('whole-input').value;
    const percent = (n1/n2)*100;
    solution.textContent = percent;
}

function areaOfCircle(){
    let radius = document.getElementById('area-input').value;
    const area = Math.PI * (radius ** 2);
    solution.textContent = Number(area.toFixed(2));
}

let btnSquare = document.getElementById('square-button');
let halfButton = document.getElementById('half-button');
let percentButton = document.getElementById('percent-button');
let areaButton = document.getElementById('area-button');

btnSquare.addEventListener('click', squareNumber);
halfButton.addEventListener('click', halfNumber);
percentButton.addEventListener('click', percentOf);
areaButton.addEventListener('click', areaOfCircle);

let inputSquare = document.getElementById('square-input');
let inputHalf = document.getElementById('half-input');
let inputPercent = document.getElementById('percent-input');
let inputWhole = document.getElementById('whole-input');
let inputArea = document.getElementById('area-input');

inputSquare.addEventListener('input', squareNumber);
inputHalf.addEventListener('input', halfNumber);
inputPercent.addEventListener('input', percentOf);
inputWhole.addEventListener('input', percentOf);
inputArea.addEventListener('input', areaOfCircle);