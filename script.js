'use strict';
// Selection elements
const messageFeedback = document.querySelector('.message');
const buttonCheck = document.querySelector('.check');
const winnerDisplay = document.querySelector('.number');
const scoreDisplay = document.querySelector('.score');
const playAgainButton = document.querySelector('.again');
const displayHighScore = document.querySelector('.highscore');

// GENERATE A RANDOM NUMBER USING MATH FUNCTION BETWEEN 0 and 20 included
const randomNumber = function () {
  return Math.floor(Math.random() * 20) + 1;
};

// DisplayMessage function
const displayMessage = function (message) {
  messageFeedback.textContent = message;
};

// Vars
let generatedNumber = randomNumber();
let score = 20;
let highScore = 0;

// CKECKING NUMBERS

buttonCheck.addEventListener('click', () => {
  // Getting value from the input field
  const userInputedValue = Number(document.querySelector('.guess').value);

  // IF there is no value
  if (!userInputedValue) {
    displayMessage('⛔️ Enter a number');
    // When Guess is Right
  } else if (userInputedValue === generatedNumber) {
    displayMessage('Congratulations! 🎉🎉');

    document.querySelector('body').style.backgroundColor = '#60b347';
    winnerDisplay.textContent = generatedNumber;
    winnerDisplay.style.width = '30rem';

    // High Score logic
    if (score > highScore) {
      highScore = score;
      displayHighScore.textContent = highScore;
    }

    // When Guess is Wrong
  } else if (userInputedValue !== generatedNumber) {
    if (score > 1) {
      displayMessage(
        userInputedValue > generatedNumber ? '📈 Too high' : '📉 Too low'
      );
      score--;
      scoreDisplay.textContent = score;
    } else {
      scoreDisplay.textContent = 0;
      displayMessage('You lose the game 😕');
    }
  }
});

// Reset the all game
playAgainButton.addEventListener('click', () => {
  generatedNumber = randomNumber();
  document.querySelector('body').style.backgroundColor = '#222';

  displayMessage('Start guessing...');
  winnerDisplay.textContent = '?';
  winnerDisplay.style.width = '15rem';
  document.querySelector('.guess').value = '';
  scoreDisplay.textContent = 20;
  score = 20;
});
