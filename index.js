const choices = ["rock", "paper", "scissors"];

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.querySelector(".outputs");

const resultText = document.createElement('h2');
resultText.classList.add('resultText');

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);

  return(choices[random]);
}

function playRound(playerSelection, computerSelection) {
  switch(playerSelection.toUpperCase()) {
    case "ROCK":
      if (computerSelection.toUpperCase() === "ROCK") {
        resultText.textContent = "It's a tie!";
        result.appendChild(resultText);
      } else if (computerSelection.toUpperCase() === "PAPER") {
        resultText.textContent = "Computer wins! Paper beats rock!";
        result.appendChild(resultText);
        computerScore++;
      } else {
        resultText.textContent = "You win! Rock beats scissors!";
        result.appendChild(resultText);
        playerScore++;
      }
      break;

    case "PAPER":
      if (computerSelection.toUpperCase() === "PAPER") {
        resultText.textContent = "It's a tie!";
        result.appendChild(resultText);
      } else if (computerSelection.toUpperCase() === "ROCK") {
        resultText.textContent = "You win! Paper beats rock!";
        result.appendChild(resultText);
        playerScore++;
      } else {
        resultText.textContent = "Computer wins! Scissors beats paper!";
        result.appendChild(resultText);
        computerScore++;
      }
      break;

    case "SCISSORS":
      if (computerSelection.toUpperCase() === "SCISSORS") {
        resultText.textContent = "It's a tie!";
        result.appendChild(resultText);
      } else if (computerSelection.toUpperCase() === "ROCK") {
        resultText.textContent = "Computer wins! Rock beats scissors!";
        result.appendChild(resultText);
        computerScore++;
      } else {
        resultText.textContent = "You win! Scissors beats paper!";
        result.appendChild(resultText);
        playerScore++;
      }
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