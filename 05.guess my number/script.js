"use strict";
// let message = document.querySelector(".message").textContent;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let check = document.querySelector(".check");
check.addEventListener("click", () => {
  let guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = `this is not valid number`;
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = `guess is to0 high`;
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = `lost the game`;
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = `guess is too low`;
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = `lost the game`;
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = `congrates you win`;
    document.querySelector(".number").style.width = "30rem";
    document.querySelector("body").style.backgroundColor = " #60b347";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
});
const again = document.querySelector(".again");
again.addEventListener("click", function () {
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = " #222";
  document.querySelector(".message").textContent = `Start guessing...`;
  document.querySelector(".guess").value = "";

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";

  score = 20;
  document.querySelector(".score").textContent = score;
});
