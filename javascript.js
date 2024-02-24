function getComputerChoice () {
    const computerChoice = ["rock", "paper", "scissors"];
    return computerChoice[Math.floor(Math.random() * 3)];
}


function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

        switch(playerSelection) { //returns the winner if any
        case "rock": 
            if (computerSelection === "paper")
                return "computer";
            else if (computerSelection === "scissors")
                return "player";
            break;
        case "paper":
            if (computerSelection === "rock")
                return "player";
            else if (computerSelection === "scissors")
                return "computer";
            break;
        case "scissors":
            if (computerSelection === "rock")
                return "computer";
            else if (computerSelection === "paper")
                return "player";
            break;             
    }

    return "tie";
}


function playGame () {
    let playerCount = 0;
    let computerCount = 0;
    let tieCount = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, paper or Scissors?");
        const computerSelection = getComputerChoice();
        const playerWin = "Computer chooses " + computerSelection.toUpperCase() + ".\n" + playerSelection.toUpperCase() + " beats " + computerSelection.toUpperCase() + ". Player wins!";
        const computerWin = "Computer chooses " + computerSelection.toUpperCase() + ".\n" + computerSelection.toUpperCase() + " beats "  + playerSelection.toUpperCase() + ". Computer wins!";
        const tieWin = "Computer chooses " + computerSelection.toUpperCase() + ".\n" + "It's a tie!"
        const result = playRound(playerSelection, computerSelection);
    
        switch(result) {
            case "player":
                playerCount++;
                alert(playerWin);
                break;
            case "computer":
                computerCount++;
                alert(computerWin);
                break;
            case "tie":
                tieCount++;
                alert(tieWin);
        }
    }

    if (playerCount > computerCount)
        alert("Player wins " + playerCount + "-" + computerCount + " , " + tieCount + " tie(s)!");
    else if (playerCount < computerCount)
        alert("Computer wins " + computerCount + "-" + playerCount + " , " + tieCount + " tie(s)!");
    else alert("Global tie! " + tieCount + " tie(s) , " + playerCount + " wins each!")
}