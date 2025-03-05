function getComputerChoice() {
    // Create variable 'randomNumber' and store random numbers from 0-2
    const randomNumber = parseInt(Math.floor(Math.random() * 3));
    
    // Create variable 'choice'
    let choice = "";

    // Switch between cases based on the random number
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

    console.log(choice);
}

getComputerChoice();