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


//Maipulating css style
const secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When No Guess
  if (!guess) {
    document.querySelector('.message').textContent = 'Not Guessed';
  }

  //When correct Guess
  else if (guess == secretNumber) {
    document.querySelector('.message').textContent = 'Correct Guess!!';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = secretNumber;
  }

  //When Guess is higher
  else if (guess > secretNumber) {
    if (score > 1) {
      19 > 0;
      document.querySelector('.message').textContent = 'Too high!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Fail!!';
    }
  }

  //When Guess is lower
  else if (guess < secretNumber) {
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
*/
// Coding Challenge #1
// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input
// fields
// 4. Also restore the original background color (#222) and number width (15rem)
// GOOD LUCK
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0; // Fix: Initialize highscore

// Play again button
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.floor(Math.random() * 20) + 1; // Fix: Use global secretNumber
  score = 20; // Fix: Reset global score

  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start Guessing...'; // Fix: Correct selector
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When No Guess
  if (!guess) {
    document.querySelector('.message').textContent = 'Not Guessed';
  }

  // When correct Guess
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Guess!!';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score; // Fix: Update highscore correctly
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // When Guess is higher
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Fail!!';
      document.querySelector('.score').textContent = 0;
    }
  }

  // When Guess is lower
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Fail!!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
