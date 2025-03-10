const ROCK_CHOICE = 'rock';
const PAPER_CHOICE = 'paper';
const SCISSORS_CHOICE = 'scissors';

const choiceButtons = document.querySelectorAll("button");
const choiceText = document.querySelector("#choice-text");

let humanScore = 0;
let computerScore = 0;

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

function initializeGame() {
    choiceButtons.forEach(button => {
        const dataChoice = button.getAttribute("data-choice");

        button.addEventListener("mouseenter", event => {
            choiceText.textContent = dataChoice;
            choiceText.classList.add("hovered");
        });

        button.addEventListener("mouseleave", () => {
            choiceText.textContent = "Please hover over the choices above";
            choiceText.classList.remove("hovered");
        });

        button.addEventListener("click", event => {
            playRound(dataChoice, getComputerChoice());
        });
    });
}

function deinitializeGame() {
    
}

// function getHumanChoice(event) {
//     // Check human and computer scores
//     if (humanScore >= 5) {
//         console.log("Game has ended. You have won the game!");
//     } else if (computerScore >= 5) {
//         console.log("Game has ended. You lost the game! Computer wins.")
//     }

//     console.log(`Human Score: ${humanScore} | Computer Score: ${computerScore}`);
// }

function getComputerChoice() {
    const randomNumber = parseInt(Math.floor(Math.random() * 3));
    
    let choice = "";

    switch (randomNumber) {
        case 0: // Rock
            choice = ROCK_CHOICE;
            break;
        case 1: // Paper
            choice = PAPER_CHOICE;
            break;
        case 2: // Scissors
            choice = SCISSORS_CHOICE;
            break;
        default: // Invalid
            console.error("The given random number was invalid!");
            break;
    }

    return choice;
}

function playGame() {
    initializeGame();
}

playGame();