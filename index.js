const choices = ["rock", "paper", "scissors"];

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
        console.log("It's a tie!");
      } else if (computerSelection.toUpperCase() === "PAPER") {
        console.log("Computer wins! Paper beats rock!");
        computerScore++;
      } else {
        console.log("You win! Rock beats scissors!");
        playerScore++;
      }
      break;

    case "PAPER":
      if (computerSelection.toUpperCase() === "PAPER") {
        console.log("It's a tie!");
      } else if (computerSelection.toUpperCase() === "ROCK") {
        console.log("You win! Paper beats rock!");
        playerScore++;
      } else {
        console.log("Computer wins! Scissors beats paper!");
        computerScore++;
      }
      break;

    case "SCISSORS":
      if (computerSelection.toUpperCase() === "SCISSORS") {
        console.log("It's a tie!");
      } else if (computerSelection.toUpperCase() === "ROCK") {
        console.log("Computer wins! Rock beats scissors!");
        computerScore++;
      } else {
        console.log("You win! Scissors beats paper!");
        playerScore++;
      }
      break;
  }
}

function game() {
  for(let i = 1; i <= 5; i++) {
    const playerChoice = prompt("Rock, paper, or scissors? ");
    const computerChoice = getComputerChoice();

    playRound(playerChoice, computerChoice);
  }

  if (playerScore > computerScore) {
    console.log("You win the game!!!");
  } else if (computerScore > playerScore) {
    console.log("Computer stole the game!!!") 
  } else {
    console.log("It's a tie!!??");
  }
}

game();