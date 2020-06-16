import compareNumbers from './compare-numbers.js';

const inputEl = document.getElementById('enter-guess');
const tempContainer = document.getElementById('temp-container');
const resultContainer = document.getElementById('result-container');
const temporaryDisplay = document.getElementById('temp-display');
const resultDisplay = document.getElementById('result-display');
const triesDisplay = document.getElementById('tries-display');

let tries = 4;

let correctNumber = Math.ceil(Math.random());

submit.addEventListener('click', () => {
    tries--;
    triesDisplay.textContent = tries;

    if (compareNumbers(Number(input.value), correctNumber) === -1) {
        tempDisplay.textContent = 'too low';
        tempContainer.classList.remove('hidden-item');
    }

    if (compareNumbers(correctNumber, Number(input.value)) === 1) {
        tempDisplay.textContent = 'too high';
        tempContainer.classList.remove('hidden-item');
    }

    if (compareNumbers(Number(input.value), correctNumber) === 0) {
        tempDisplay.textContent = 'correct!';
        tempContainer.classList.remove('hidden-item');
        resultContainer.classList.remove('hidden-item');
        submit.disabled = true;
        resultDisplay.textContent = 'won, great job!';
        // document.getElementById('display-number').innerHTML = correctNumber;
        let correctNumberDisplay = document.getElementById('display-number');
        correctNumberDisplay.textContent = correctNumber;
    }

    if (tries === 0 && compareNumbers(correctNumber, Number(input.value)) !== 0) {
        submit.disabled = true;
        resultContainer.classList.remove('hidden-item');
        resultDisplay.textContent = 'lost, bummer!';
        document.getElementById('display-number').innerHTML = correctNumber;
        // another way to do the same as above (display number in index.html):
        // let correctNumberDisplay = document.getElementById('display-number');
        // correctNumberDisplay.textContent = correctNumber;
    }
});