'use strict';

/* console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number !';

document.querySelector('.number').textContent = 20;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 22;
console.log((document.querySelector('.guess').value = 22)); */

let Number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let hightscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  console.log(guess, typeof guess);

  // Pas de nombre en enrée
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
    // Lorsqu'il entre un nombre plus grand
  } else if (guess > Number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Trop grand!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost!';
      document.querySelector('.score').textContent = 0;
    }
    // lorsque le nombre est plus grand
  } else if (guess < Number) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = ' Trop petit!';
    } else {
      document.querySelector('.message').textContent = ' You Lost!';
      document.querySelector('.score').textContent = 0;
    }

    // lorsqu'il entre le bon nombre
  } else {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = Number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > hightscore) {
      hightscore = score;
      document.querySelector('.highscore').textContent = hightscore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  Number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
