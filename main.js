let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    return prompt("Choose: rock | paper | scissors");
}

function getComputerChoice() {
    const randomNumber = parseInt(Math.floor(Math.random() * 3));
    
    let choice = "";

    switch (randomNumber) {
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
    // Human is paper and computer is scissors
    // Human is scissors and computer is rock
    if 
    (
        (humanSelection === "rock" && computerSelection === "paper") ||
        (humanSelection === "paper" && computerSelection === "scissors") ||
        (humanSelection === "scissors" && computerSelection === "rock")
    ) {
        computerWin = true;
    }
    // Human is rock and computer is scissors
    // Human is paper and computer is rock
    // Human is scissors and computer is paper
    else if 
    (
        (humanSelection === "rock" && computerSelection === "scissors") ||
        (humanSelection === "paper" && computerSelection === "rock") ||
        (humanSelection === "scissors" && computerSelection === "paper")
    ) {
        humanWin = true;
    }

    // Display both choices
    console.log(`You: ${humanSelection} vs. Computer: ${computerSelection}`);

    // If both lost, don't increment scores and display message "Tie! Please try again."
    if (humanWin === false && computerWin === false) {
        console.log("Tie! Please try again.");
    }
    // If human wins, increment humanScore and display message "You win! {humanSelection} beats {computerSelection}"
    else if (humanWin === true && computerWin === false) {
        humanScore++;
        console.log(
            `You win! ${getFormattedString(humanSelection)} beats ${getFormattedString(computerSelection)}`);
    }
    // If computer wins, increment computerScore and display message "You lose! {computerSelection} beats {humanSelection}"
    else if (humanWin === false && computerWin === true) {
        computerScore++;
        console.log(
            `You lose! ${getFormattedString(computerSelection)} beats ${getFormattedString(humanSelection)}`);
    }
}

function getFormattedString(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function playGame() {
    let round = 1;
    
    // Play five (5) rounds
    while (round <= 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

        round++;
    }

    // Determine winner
    console.log("===========================================================================================");

    if (humanScore === computerScore) {
        console.log("Game has ended. No winners! You and the computer have tied the game.");
    } else if (humanScore > computerScore) {
        console.log("Game has ended. You have won the game!");
    } else if (computerScore > humanScore) {
        console.log("Game has ended. You lost the game! Computer wins.")
    }

    console.log(`Human Score: ${humanScore} | Computer Score: ${computerScore}`);

    console.log("===========================================================================================");
}

playGame();