const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);

  return(choices[random]);
}