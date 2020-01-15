import compareNumbers from './compareNumbers.js';

const input = document.getElementById('enter-guess');
const submit = document.getElementById('submit-guess');
const tempContainer = document.getElementById('temp-container');
const resultContainer = document.getElementById('result-container');
const tempDisplay = document.getElementById('temp-display');
const resultDisplay = document.getElementById('result-display');
const triesDisplay = document.getElementById('tries-display');

let tries = 4;

// let correctNumber = Math.floor(Math.random() * 10);
let correctNumber = 7;

submit.addEventListener('click', () => {
    tries--;
    triesDisplay.textContent = tries;

    if (compareNumbers(Number(input.value), correctNumber) === -1) {
        tempDisplay.textContet = 'too low';
        tempContainer.classList.remove('hidden');
    }

    if (compareNumbers(Number(input.value), correctNumber) === 1) {
        tempDisplay.textContet = 'too high';
        tempContainer.classList.remove('hidden');
    }

    if (compareNumbers(Number(input.value), correctNumber) === 0) {
        tempDisplay.textContent = 'correct!';
        tempContainer.classList.remove('hidden');
        resultContainer.classList.remove('hidden');
        submit.disabled = true;
    }

    if (tries === 0 && compareNumbers(Number(input.value), correctNumber) !== 0) {
        submit.disabled = true;
        resultContainer.classList.remove('hidden');
        resultDisplay.textContent = 'lost';
    }

});