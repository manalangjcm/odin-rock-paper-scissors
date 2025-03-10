// Game Choices
const ROCK_CHOICE = "rock";
const PAPER_CHOICE = "paper";
const SCISSORS_CHOICE = "scissors";

// Game Variables
let humanScore = 0;
let computerScore = 0;

// DOM Elements
const choiceButtons = document.querySelectorAll(".choices button");
const choiceText = document.querySelector("#choice-text");

const mainScreen = document.querySelector("#main-screen");
const computerScreen = document.querySelector("#computer-screen");
const roundResultsScreen = document.querySelector("#round-results-screen");
const gameOverScreen = document.querySelector("#game-over-screen");

const humanScoreText = document.querySelector("#human-score-text");
const humanFinalScoreText = document.querySelector("#human-final-score-text");
const computerScoreText = document.querySelector("#computer-score-text");
const computerFinalScoreText = document.querySelector("#computer-final-score-text");

const roundResultsText = document.querySelector("#round-results-text");
const gameOverText = document.querySelector("#game-over-text");

const continueButton = document.querySelector("#continue-button");

function startRound() {
    changeScreen("main");
}

function playRound(humanChoice, computerChoice) {
    let humanWin = false;
    let computerWin = false;

    // Human is rock and computer is paper
    // Human is paper and computer is scissors
    // Human is scissors and computer is rock
    if 
    (
        (humanChoice === ROCK_CHOICE && computerChoice === PAPER_CHOICE) ||
        (humanChoice === PAPER_CHOICE && computerChoice === SCISSORS_CHOICE) ||
        (humanChoice === SCISSORS_CHOICE && computerChoice === ROCK_CHOICE)
    ) {
        computerWin = true;
    }
    // Human is rock and computer is scissors
    // Human is paper and computer is rock
    // Human is scissors and computer is paper
    else if 
    (
        (humanChoice === ROCK_CHOICE && computerChoice === SCISSORS_CHOICE) ||
        (humanChoice === PAPER_CHOICE && computerChoice === ROCK_CHOICE) ||
        (humanChoice === SCISSORS_CHOICE && computerChoice === PAPER_CHOICE)
    ) {
        humanWin = true;
    }

    const roundData = {
        humanChoice,
        computerChoice,
        "isHumanWin": humanWin,
        "isComputerWin": computerWin
    };

    endRound(roundData);
}

function endRound(roundData = {}) {
    const canContinueGame = manageScores(roundData);
    updateUI(!canContinueGame, roundData);

    // End game if human or computer scores have reached 5 points
    if (!canContinueGame) {
        changeScreen("gameover");
        return;
    }

    changeScreen("roundresults");
}

function continueRound() {
    startRound();
}

function manageScores(roundData = {}) {
    if (roundData.isHumanWin) {
        humanScore++;
        console.log("Human won the round.");
    } else if (roundData.isComputerWin) {
        computerScore++;
        console.log("Computer won the round.");
    }

    // Return false if human or computer scores have reached 5 points
    if (humanScore >= 5 || computerScore >= 5) {
        return false;
    }

    return true;
}

function updateUI(isGameEnded, roundData = {}) {
    humanScoreText.textContent = humanScore;
    humanFinalScoreText.textContent = humanScore;
    computerScoreText.textContent = computerScore;
    computerFinalScoreText.textContent = computerScore;

    if (isGameEnded) {
        if (humanScore > computerScore) {
            gameOverText.textContent = "You won against the computer! Congratulations! 🎉";
            humanFinalScoreText.classList.add("winning");
            computerFinalScoreText.classList.remove("winning");
        } else {
            gameOverText.textContent = "You lost against the computer. Try again next time! 😔";
            humanFinalScoreText.classList.remove("winning");
            computerFinalScoreText.classList.add("winning");
        }
    } else {
        if (roundData.isHumanWin == roundData.isComputerWin) {
            roundResultsText.textContent = `It's a tie! ${getFormattedString(roundData.humanChoice)} and ${getFormattedString(roundData.computerChoice)}.`;
            humanScoreText.classList.remove("winning");
            computerScoreText.classList.remove("winning");
        } else if (roundData.isHumanWin) {
            roundResultsText.textContent = `You won! ${getFormattedString(roundData.humanChoice)} beats ${getFormattedString(roundData.computerChoice)}.`;
            humanScoreText.classList.add("winning");
            computerScoreText.classList.remove("winning");
        } else if (roundData.isComputerWin) {
            roundResultsText.textContent = `You lost. ${getFormattedString(roundData.computerChoice)} beats ${getFormattedString(roundData.humanChoice)}.`;
            humanScoreText.classList.remove("winning");
            computerScoreText.classList.add("winning");
        }
    }
}

function getFormattedString(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function initializeGame() {
    // Reset game variables
    humanScore = 0;
    computerScore = 0;

    startRound();

    // Add event listeners to choice buttons
    choiceButtons.forEach(button => {
        const dataChoice = button.getAttribute("data-choice");

        button.addEventListener("mouseenter", () => {
            choiceText.textContent = dataChoice;
            choiceText.classList.add("hovered");
        });

        button.addEventListener("mouseleave", () => {
            choiceText.textContent = "Please hover over the choices above";
            choiceText.classList.remove("hovered");
        });

        button.addEventListener("click", () => {
            changeScreen("computer");

            const TWO_SECONDS = 2000;
            setTimeout(() => {
                playRound(dataChoice, getComputerChoice());
            }, TWO_SECONDS);
        });
    });

    continueButton.addEventListener("click", continueRound);
}

function changeScreen(screenName) {
    switch (screenName.toLowerCase()) {
        case "main":
            mainScreen.classList.remove("hide");
            computerScreen.classList.add("hide");
            roundResultsScreen.classList.add("hide");
            gameOverScreen.classList.add("hide");
            break;
        case "computer":
            mainScreen.classList.add("hide");
            computerScreen.classList.remove("hide");
            roundResultsScreen.classList.add("hide");
            gameOverScreen.classList.add("hide");
            break;
        case "roundresults":
            mainScreen.classList.add("hide");
            computerScreen.classList.add("hide");
            roundResultsScreen.classList.remove("hide");
            gameOverScreen.classList.add("hide");
            break;
        case "gameover":
            mainScreen.classList.add("hide");
            computerScreen.classList.add("hide");
            roundResultsScreen.classList.add("hide");
            gameOverScreen.classList.remove("hide");
            break;
        default:
            mainScreen.classList.remove("hide");
            computerScreen.classList.add("hide");
            roundResultsScreen.classList.add("hide");
            gameOverScreen.classList.add("hide");
            break;
    }
}

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


function endGame() {
    changeScreen("gameover");   
}

playGame();