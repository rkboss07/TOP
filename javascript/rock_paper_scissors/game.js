

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
    if (document.querySelector(".rockButton").clicked) {
        return "rock";
    } else if (document.querySelector(".paperButton").clicked) {
        return "paper";
    } else if (document.querySelector(".scissorsButton").clicked) {
        return "scissors";
    }
}


const resultText = document.querySelector(".resultText");
const humanPoints = document.querySelector(".humanPoints");
const computerPoints = document.querySelector(".computerPoints");
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        resultText.textContent = `It's a tie! You both chose ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultText.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        humanPoints.textContent = parseInt(humanPoints.textContent) + 1;
    } else {
        resultText.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerPoints.textContent = parseInt(computerPoints.textContent) + 1;
    }
    resultText.textContent = resultText.textContent;
    humanPoints.textContent = humanPoints.textContent;
    computerPoints.textContent = computerPoints.textContent;

    if (parseInt(humanPoints.textContent) === 5) {
        alert("Congratulations! You won the game!");
        humanPoints.textContent = 0;
        computerPoints.textContent = 0;
    } else if (parseInt(computerPoints.textContent) === 5) {
        alert("Sorry! The computer won the game.");
        humanPoints.textContent = 0;
        computerPoints.textContent = 0;
    }
}

