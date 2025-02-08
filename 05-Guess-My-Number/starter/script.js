'use strict';
/*
console.log(document.querySelector('.message').textContent);
//selecting and manipulating elements
document.querySelector('.message').textContent = 'Correct Guess..!';
document.querySelector('.number').textContent = 9;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 20;

//handling click event

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    console.log('Not guesses');
  }
});

*/

//implementing the game logic
const secretNumber = Math.round(Math.random() * 20);
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'Not Guessed';
  } else if (guess == secretNumber) {
    document.querySelector('.message').textContent = 'Currect Guess!!';
  } else if (guess > secretNumber) {
    if (score > 1) {
      19 > 0;
      document.querySelector('.message').textContent = 'Too high!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Fail!!';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      19 > 0;
      document.querySelector('.message').textContent = 'Too Low!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Fail!!';
    }
  }
});
