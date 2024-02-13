const getComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
};

const playRound = (playerSelection, computerSelection) => {
  const player = playerSelection.toLowerCase();

  if (player === "rock") {
    if (computerSelection === "rock") {
      return "draw ";
    } else if (computerSelection === "paper") {
      return "computer";
    } else if (computerSelection === "scissors") {
      return "player";
    }
  } else if (player === "paper") {
    if (computerSelection === "rock") {
      return "player";
    } else if (computerSelection === "paper") {
      return "draw";
    } else if (computerSelection === "scissors") {
      return "computer";
    }
  } else if (player === "scissors") {
    if (computerSelection === "rock") {
      return "computer";
    } else if (computerSelection === "paper") {
      return "player";
    } else if (computerSelection === "scissors") {
      return "draw";
    }
  } else {
    return "Please write only either [rock] [paper] [scissors]";
  }
};

const buttons = document.querySelectorAll(".buttons > button");
const playerDisplay = document.querySelector(".player>.selection-display>p");
const resultsH2 = document.querySelector(".results>h2");
const resultsP = document.querySelector(".results>p");
const modal = document.querySelector("dialog");
const playAgain = document.querySelector(".play");
const modalText = document.querySelector("dialog>p");
const computerDisplay = document.querySelector(
  ".computer>.selection-display>p"
);
const playerScoreDisplay = document.querySelector(
  ".player>.selection-score>p>span"
);
const computerScoreDisplay = document.querySelector(
  ".computer>.selection-score>p>span"
);

let playerScore = 0;
let computerScore = 0;
const iconMapping = {
  rock: "👊",
  paper: "🖐️",
  scissors: "✌️",
};

playAgain.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  resultsH2.textContent = "Choose your hand!";
  resultsP.textContent = "First to score 5 points wins the game";
  playerDisplay.textContent = "👤";
  computerDisplay.textContent = "🤖";
  playerScoreDisplay.textContent = playerScore.toString();
  computerScoreDisplay.textContent = computerScore.toString();
  modal.close();
});

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let playerSelection = e.target.id;
    let computerSelection = getComputerChoice();

    playerDisplay.textContent = iconMapping[playerSelection];
    computerDisplay.textContent = iconMapping[computerSelection];

    let result = playRound(playerSelection, computerSelection);

    if (result === "player") {
      playerScore += 1;
      playerScoreDisplay.textContent = playerScore.toString();
      resultsH2.textContent = "You won!";
      resultsP.textContent = `${playerSelection} beats ${computerSelection}`;
      if (playerScore >= 5) {
        resultsH2.textContent = "Player won! 🏆";
        resultsP.textContent = "You rock!";
        modalText.textContent = "You won!";
        modal.showModal();
      }
    } else if (result === "computer") {
      computerScore += 1;
      computerScoreDisplay.textContent = computerScore.toString();
      resultsH2.textContent = "Computer won!";
      resultsP.textContent = `${playerSelection} beats ${computerSelection}`;
      if (computerScore >= 5) {
        resultsH2.textContent = "Computer won! 🏆";
        resultsP.textContent = "Maybe next time";
        modalText.textContent = "Computer won!";
        modal.showModal();
      }
    } else if (result === "draw") {
      resultsH2.textContent = "it's a draw!";
      resultsP.textContent = `${playerSelection} ties with ${computerSelection}`;
    }
  });
});
