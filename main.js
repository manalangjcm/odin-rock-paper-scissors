let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    const choice = prompt("Choose: rock | paper | scissors");

    return choice;
}

function getComputerChoice() {
    const randomNumber = parseInt(Math.floor(Math.random() * 3));
    
    let choice = "";

    switch(randomNumber) {
        case 0: // Rock
            choice = "rock";
            break;
        case 1: // Paper
            choice = "paper";
            break;
        case 2: // Scissors
            choice = "scissors";
            break;
        default: // Invalid
            console.error("The given random number was invalid!");
            break;
    }

    return choice;
}

function playRound(humanChoice, computerChoice) {
    // Make human choice parameter case-insensitive
    const humanSelection = humanChoice.toLowerCase();
    const computerSelection = computerChoice.toLowerCase();
    
    let humanWin = false;
    let computerWin = false;
    
    // Human is rock and computer is paper
    if (humanSelection === "rock" && computerSelection === "paper") {
        computerWin = true;
    }
    // Human is rock and computer is scissors
    else if (humanSelection === "rock" && computerSelection === "scissors") {
        humanWin = true;
    }
    // Human is paper and computer is rock
    else if (humanSelection === "paper" && computerSelection === "rock") {
        humanWin = true;
    }
    // Human is paper and computer is scissors
    else if (humanSelection === "paper" && computerSelection === "scissors") {
        computerWin = true;
    }
    // Human is scissors and computer is rock
    else if (humanSelection === "scissors" && computerSelection === "rock") {
        computerWin = true;
    }
    // Human is scissors and computer is paper
    else if (humanSelection === "scissors" && computerSelection === "paper") {
        humanWin = true;
    }

    // Display both choices
    console.log(`Human: ${humanSelection}`);
    console.log(`Computer: ${computerSelection}`);

    // If both lost, don't increment scores and display message "Tie! Please try again."
    if (humanWin === false && computerWin === false) {
        console.log("Tie! Please try again.");
    }
    // If human wins, increment humanScore and display message "You win! {customMessage}"
    else if (humanWin === true && computerWin === false) {
        humanScore++;
        console.log(
            `You win! ${humanSelection.charAt(0).toUpperCase() + humanSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`);
    }
    // If computer wins, increment computerScore and display message "You lose! {customMessage}"
    else if (humanWin === false && computerWin === true) {
        computerScore++;
        console.log(
            `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${humanSelection.charAt(0).toUpperCase() + humanSelection.slice(1)}`);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);