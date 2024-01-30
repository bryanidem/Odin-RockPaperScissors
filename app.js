const getComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
};

const playRound = (playerSelection, computerSelection) => {
  const player = playerSelection.toLowerCase();

  if (player === "rock") {
    if (computerSelection === "rock") {
      return "it's a draw ";
    } else if (computerSelection === "paper") {
      return "computer wins, rock loses to paper";
    } else if (computerSelection === "scissors") {
      return "player wins, rock wins over scissors";
    }
  } else if (player === "paper") {
    if (computerSelection === "rock") {
      return "player wins, paper wins over paper";
    } else if (computerSelection === "paper") {
      return "it's a draw";
    } else if (computerSelection === "scissors") {
      return "computer wins, paper loses to scissors";
    }
  } else if (player === "scissors") {
    if (computerSelection === "rock") {
      return "computer wins, scissors loses to rock";
    } else if (computerSelection === "paper") {
      return "player wins, scissors wins over paper";
    } else if (computerSelection === "scissors") {
      return "it's a draw";
    }
  } else {
    return "Please write only either [rock] [paper] [scissors]";
  }
};

const playGame = () => {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Select [rock] or [paper] or [scissors]");
    let computerSelection = getComputerChoice();
    console.log(
      `player: ${playerSelection} --- computer: ${computerSelection}`
    );
    console.log(playRound(playerSelection, computerSelection));
  }
};

playGame();
