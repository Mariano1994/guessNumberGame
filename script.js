'use strict';
// Selection all elements
const message = document.querySelector('.message');
const buttonCheck = document.querySelector('.check');
const userInputedValue = document.querySelector('.guess');

// GENERATE A RANDOM NUMBER USING MATH FUNCTION BETWEEN 0 and 20 included
const randomNumber = function () {
  return Math.floor(Math.random() * 20) + 1;
};

// CKECKING NUMBERS
buttonCheck.addEventListener('click', () => {
  const generatedNumber = randomNumber();
});
