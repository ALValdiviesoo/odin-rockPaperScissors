const choices = ["rock", "paper", "scissors"];

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.querySelector(".outputs");
const scores = document.querySelector(".playerScore");
const compScore = document.querySelector('.computerScore');

const resultText = document.createElement('h2');
resultText.classList.add('resultText');

let playerScore = 0;
let computerScore = 0;

const playerScoreText = document.createElement('span');
playerScoreText.classList.add('playerScoreText');

const computerScoreText = document.createElement('span');
computerScoreText.classList.add('computerScoreText');

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);

  return(choices[random]);
}

function checkScore() {
  if (computerScore === 5) {
    alert("COMPUTER STOLE THE GAME!!!");
    window.location.reload();
  } else if (playerScore === 5) {
    alert("YOU WIN THE MATCH!!!");
    window.location.reload();
  }
}

function playerWinsRound() {
  result.appendChild(resultText);
  playerScore++;
  playerScoreText.textContent = playerScore;
  scores.appendChild(playerScoreText);
}

function computerWinsRound() {
  result.appendChild(resultText);
  computerScore++;
  computerScoreText.textContent = computerScore;
  compScore.appendChild(computerScoreText);
}

function playRound(playerSelection, computerSelection) {
  switch(playerSelection.toUpperCase()) {
    case "ROCK":
      if (computerSelection.toUpperCase() === "ROCK") {
        resultText.textContent = "It's a tie!";
        result.appendChild(resultText);
      } else if (computerSelection.toUpperCase() === "PAPER") {
        resultText.textContent = "Computer wins! Paper beats rock!";
        computerWinsRound();
      } else {
        resultText.textContent = "You win! Rock beats scissors!";
        playerWinsRound();
      }
      checkScore();
      break;

    case "PAPER":
      if (computerSelection.toUpperCase() === "PAPER") {
        resultText.textContent = "It's a tie!";
        result.appendChild(resultText);
      } else if (computerSelection.toUpperCase() === "ROCK") {
        resultText.textContent = "You win! Paper beats rock!";
        playerWinsRound();
      } else {
        resultText.textContent = "Computer wins! Scissors beats paper!";
        computerWinsRound();
      }
      checkScore();
      break;

    case "SCISSORS":
      if (computerSelection.toUpperCase() === "SCISSORS") {
        resultText.textContent = "It's a tie!";
        result.appendChild(resultText);
      } else if (computerSelection.toUpperCase() === "ROCK") {
        resultText.textContent = "Computer wins! Rock beats scissors!";
        computerWinsRound();
      } else {
        resultText.textContent = "You win! Scissors beats paper!";
        playerWinsRound();
      }
      checkScore();
      break;
  }
}

rock.onclick = () => {
  playRound("rock", getComputerChoice());
}

paper.onclick = () => {
  playRound("paper", getComputerChoice());
}

scissors.onclick = () => {
  playRound("scissors", getComputerChoice());
}