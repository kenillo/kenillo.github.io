let checkBtn = document.getElementById('check');
let output = document.getElementById('outputtext');
let guessSlot = document.getElementById('guesses');
let remaining = document.getElementById('remaining');
let restart = document.getElementById('restart');
let score = document.getElementById('score');
let img = document.getElementById('img');

let livesLeft = 10
let maxAttempt = 10
let pScore = 0

let randomNumber = parseInt((Math.random()*100)+1)

let usedValues = [];
checkBtn.addEventListener('click', function(){
let input = document.getElementById('userInput').value;



if (isNaN(input)){
    output.innerHTML = 'Please enter a valid number'
} else if (input < 1) {
    output.innerHTML = 'Please enter a number greater than 1!'
} else if (input > 100){
    output.innerHTML = 'Please enter a number less than 100!'
} else if (usedValues.includes(input)){
    output.innerHTML = 'You already used this number!'
} else {
    usedValues.push(input);
    if (input == randomNumber){
      checkBtn.style.display = "none";
      img.src = "win.png"
      output.innerHTML = `Congrats! Your guess was correct. ${randomNumber} is my secret number.`
      guessSlot.innerHTML += `${input} `;
      restart.innerHTML = 'Play Again';
      pScore = 10-livesLeft+1;
      if (pScore < maxAttempt) {
        maxAttempt = pScore
      };
      score.innerHTML = `${maxAttempt}`
    } else if (input < randomNumber){
      output.innerHTML = "Your guess is too low!"
      guessSlot.innerHTML += `${input} `;
      livesLeft--
      remaining.innerHTML = `${livesLeft}`
    }; if (input > randomNumber){
      output.innerHTML = "Your guess is too high!"
      guessSlot.innerHTML += `${input} `;
      livesLeft--
      remaining.innerHTML = `${livesLeft}`
    }; if (livesLeft === 0) {
      img.src = "gameover.png"
      output.innerHTML = `Unfortunately You Lost the Game! <br> Don't give up and Try Again. <br> My secret number was : ${randomNumber}`
      checkBtn.style.display = "none";
      restart.innerHTML = 'Try Again';
    }
  }
});


restart.addEventListener('click', function(){
  randomNumber = parseInt((Math.random()*100)+1)
  img.src = "think.png"
  usedValues = [];
  remaining.innerHTML = `10`
  restart.innerHTML = 'Reset';
  checkBtn.style.display = "";
  guessSlot.innerHTML = '';
  output.innerHTML = 'Guess a number below';
  livesLeft = 10

})