function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice);
        if (result.startsWith("You win!")) {
            humanScore++;
        } else if (result.startsWith("You lose!")) {
            computerScore++;
        }
        console.log(result);
        console.log(`Score: You ${humanScore} - Computer ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (humanScore < computerScore) {
        console.log("Sorry! The computer won the game.");
    } else {
        console.log("It's a tie game!");
    }
}
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) { 
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}
function getHumanChoice() {
    let choice = prompt("Please choose rock, paper, or scissors:").toLowerCase();
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Invalid choice. Please choose rock, paper, or scissors:").toLowerCase();
    }
    return choice;
}



function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
}

