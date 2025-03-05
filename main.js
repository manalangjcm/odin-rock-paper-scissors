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

console.log(getHumanChoice());
console.log(getComputerChoice());