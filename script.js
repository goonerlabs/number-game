"use strict";

// implementing game logic
// random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
// used trunc + 1 rather than round so that number can be 20 and cant be 0

// making code DRY with functions to diplay messages
const displayMessage = message => {
  return (document.querySelector(".message").textContent = message);
};

const displayNumber = number => {
  return (document.querySelector(".number").textContent = number);
};

const displayScore = score => {
  return (document.querySelector(".score").textContent = score);
};

// check button
document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  // no value
  if (!guess) {
    displayMessage("⛔ No number chosen!");
    // win
  } else if (guess === secretNumber) {
    displayMessage(" 🎉 Correct number!!!");
    displayNumber(secretNumber);
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    // if guess is not secret number
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too High!!!" : "📉 Too low!!!");
      score--;
      displayScore(score);
    } else {
      displayMessage("💥 Game over!!!");
      displayScore(0);
      // had to update this based on the if stattement otherwise score would show 1
    }
  }
});

// restrating the game with the again button
document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayScore(score);
  document.querySelector(".highscore").textContent = highScore;
  displayNumber("?");
  document.querySelector(".guess").value = "";
  displayMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
