// Function returns a random choice for Rock Paper Scissors(RPS)for the Computer.
function getComputerChoice() {
    rand = Math.floor(Math.random() * 3) + 1
    if (rand == 1 ) {
        return "rock"
    } else if (rand == 2) {
        return "paper"
    } else {
        return "scissor"
    }
}

// Function plays a single round of RPS
function playRound(playerSelection, computerSelection) {
    // Case for Tie
    if (playerSelection.toLowerCase() == computerSelection){
        return null
    }
    // Case for Rock -> Scissor
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissor"){
        (console.log("You Win! Rock beats Scissor"))
        return true
    }    
    // Case for Rock -> Paper
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper"){
        (console.log("You Lose! Paper beats Rock"))
        return false
    }    
    // Case for Paper -> Scissor
    if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissor"){
        (console.log("You Lose! Scissors beats Paper"))
        return false
    }    
    // Case for Paper -> Rock
    if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock"){
        (console.log("You Win! Paper beats Rock"))
        return true
    }   
    // Case for Scissor -> Paper
    if (playerSelection.toLowerCase() == "scissor" && computerSelection == "paper"){
        (console.log("You Win! Scissor beats Paper"))
        return true
    }   
    // Case for Scissor -> Rock
    if (playerSelection.toLowerCase() == "scissor" && computerSelection == "rock"){
        (console.log("You Lose! Scissor beats Rock"))
        return false
    }   
}

const button = document.querySelectorAll("button"); // This querys all buttons

button.forEach((button) => {    // loops through the node list of buttons.
    button.addEventListener("click", () => {    // for each button we add a listener
        playerSelection = button.getAttribute("id");
        playRound(playerSelection, getComputerChoice());
    });
});