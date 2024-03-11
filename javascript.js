const div = document.querySelector("div");
let playerCount = 0;
let computerCount = 0;
let tieCount = 0;
div.addEventListener("click", (e) => {
  const playerSelection = e.target.className;
  const computerSelection = getComputerChoice();
  const newDiv = document.createElement("div");
  const computerChoiceText =
    "Computer chooses " + computerSelection.toUpperCase() + ". ";
  const winner = playRound(playerSelection, computerSelection);
  let winnerText = "";
  let resultText = "";

  switch (winner) {
    case "player":
      playerCount++;
      winnerText =
        playerSelection.toUpperCase() +
        " beats " +
        computerSelection.toUpperCase() +
        ". Player wins!";
      break;
    case "computer":
      computerCount++;
      winnerText =
        computerSelection.toUpperCase() +
        " beats " +
        playerSelection.toUpperCase() +
        ". Computer wins!";
      break;
    case "tie":
      winnerText = "It's a tie!";
      tieCount++;
  }

  newDiv.textContent = computerChoiceText + winnerText;
  div.appendChild(newDiv);

  if (playerCount + computerCount + tieCount === 5) {
    if (playerCount > computerCount)
      resultText =
        "Player wins " +
        playerCount +
        "-" +
        computerCount +
        ", " +
        tieCount +
        " tie(s)!";
    else if (playerCount < computerCount)
      resultText =
        "Computer wins " +
        computerCount +
        "-" +
        playerCount +
        ", " +
        tieCount +
        " tie(s)!";
    else
      resultText =
        "Global tie! " + tieCount + " tie(s), " + playerCount + " wins each!";

    const winDiv = document.createElement("div");
    winDiv.textContent = resultText;
    div.appendChild(winDiv);

    //starts new match
    playerCount = 0;
    computerCount = 0;
    tieCount = 0;

    const line = document.createElement("div");
    line.textContent = "------------------";
    div.appendChild(line);

    const veryNewDiv = document.createElement("div");
    veryNewDiv.textContent = "NEW MATCH!";
    div.appendChild(veryNewDiv);
  }
});

function getComputerChoice() {
  const computerChoice = ["rock", "paper", "scissors"];
  return computerChoice[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  switch (
    playerSelection //returns the winner if any
  ) {
    case "rock":
      if (computerSelection === "paper") return "computer";
      else if (computerSelection === "scissors") return "player";
      break;
    case "paper":
      if (computerSelection === "rock") return "player";
      else if (computerSelection === "scissors") return "computer";
      break;
    case "scissors":
      if (computerSelection === "rock") return "computer";
      else if (computerSelection === "paper") return "player";
      break;
  }
  return "tie";
}
