'use strict';
/*
console.log(document.querySelector('.message').textContent);
//selecting and manipulating elements
document.querySelector('.message').textContent = 'Correct Guess..!';
document.querySelector('.number').textContent = 9;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 20;
*/
//handling click event

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    console.log('Not guesses');
  }
});
