'use strict';


let secretNumber = Math.round(Math.random() * 20 + 1);
let highScore = 0;
let score = 20;
let dumpFild = "";

function StartNew() {
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    secretNumber = Math.round(Math.random() * 20 + 1);
}

document.querySelector('.check').addEventListener('click', function () {


    let guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        document.querySelector('.message').textContent = 'No number';
    } else if (score == 0) {
        document.querySelector('.message').textContent = 'the game is lost';
        document.querySelector('body').style.backgroundColor = 'red';
        document.querySelector('.score').textContent = '0';
        document.querySelector('.number').textContent = secretNumber;
    } else {
        if (guess < secretNumber) {
            document.querySelector('.message').textContent = 'to low';
            document.querySelector('.score').textContent = score--;
        } else if (guess > secretNumber) {
            document.querySelector('.message').textContent = 'to hight';
            document.querySelector('.score').textContent = score--;
        } else if (guess === secretNumber) {
            setTimeout(StartNew, 5000);
            document.querySelector('.message').textContent = 'Correct Number';
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.highscore').textContent = (score > highScore) ? score : highScore;

        }
    }
});
document.querySelector('.again').addEventListener('click', StartNew);