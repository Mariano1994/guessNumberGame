'use strict';
// Selection all elements
const messageFeedback = document.querySelector('.message');
const buttonCheck = document.querySelector('.check');
const winnerDisplay = document.querySelector('.number');

// GENERATE A RANDOM NUMBER USING MATH FUNCTION BETWEEN 0 and 20 included
const randomNumber = function () {
  return Math.floor(Math.random() * 20) + 1;
};
const generatedNumber = randomNumber();

// CKECKING NUMBERS

buttonCheck.addEventListener('click', () => {
  const userInputedValue = Number(document.querySelector('.guess').value);

  if (!userInputedValue) {
    messageFeedback.textContent = '⛔️ Enter a number';
  } else if (userInputedValue === generatedNumber) {
    messageFeedback.textContent = 'Congratulations! 🎉🎉';
    document.querySelector('body').style.backgroundColor = '#60b347';
    winnerDisplay.textContent = generatedNumber;
  } else if (userInputedValue > generatedNumber) {
    messageFeedback.textContent = '📈 Too high';
  } else if (userInputedValue < generatedNumber) {
    messageFeedback.textContent = '📉 Too low';
  }
});
