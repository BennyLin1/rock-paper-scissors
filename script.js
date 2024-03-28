let playerScore = 0;
let computerScore = 0;

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

    updateDisplay(playerSelection,computerSelection)
    // Case for Tie
    if (playerSelection.toLowerCase() == computerSelection){
        roundInfo.textContent="\nTie!";
    }
    // Case for Rock -> Scissor
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissor"){
        roundInfo.textContent="You Win!\nRock beats Scissor";
        playerScore++;
    }    
    // Case for Rock -> Paper
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper"){
        roundInfo.textContent="You Lose!\nPaper beats Rock";
        computerScore++;
    }    
    // Case for Paper -> Scissor
    if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissor"){
        roundInfo.textContent="You Lose!\nScissor beats Paper";
        computerScore++;
    }    
    // Case for Paper -> Rock
    if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock"){
        roundInfo.textContent="You Win!\nPaper beats Rock";
        playerScore++;
    }   
    // Case for Scissor -> Paper
    if (playerSelection.toLowerCase() == "scissor" && computerSelection == "paper"){
        roundInfo.textContent="You Win!\nScissor beats Paper";
        playerScore++;
    }   
    // Case for Scissor -> Rock
    if (playerSelection.toLowerCase() == "scissor" && computerSelection == "rock"){
        roundInfo.textContent="You Lose!\nScissor beats Rock";
        computerScore++;
    }   
    playerDisplayScore.textContent=`😃 PLAYER SCORE: ${playerScore}`;
    computerDisplayScore.textContent=`🤖 ROBOT SCORE: ${computerScore}`;
}

function updateDisplay(playerChoice,computerChoice){
    switch (playerChoice){
        case "rock":
            playerDisplay.textContent="🗿";
            break
        case "paper":
            playerDisplay.textContent="🧻";
            break
        case "scissor":
            playerDisplay.textContent="⚔️";
            break
    }

    switch (computerChoice){
        case "rock":
            computerDisplay.textContent="🗿";
            break
        case "paper":
            computerDisplay.textContent="🧻";
            break
        case "scissor":
            computerDisplay.textContent="⚔️";
            break
    }
}

function disabled(){
    button.forEach((button) => {    // loops through the node list of buttons.
        button.disabled = true;
    });
}

function checkWinner(){
    if (playerScore == 5){
        disabled();
        roundInfo.textContent="You WON!,\nRefresh to Play Again"
    } 
    if (computerScore == 5) {
        disabled()
        roundInfo.textContent="You LOST!,\nRefresh to Play Again"
    }
}

const button = document.querySelectorAll("button"); // This querys all buttons

const computerDisplay = document.querySelector("#computerDisplay");
const playerDisplay = document.querySelector("#playerDisplay");
const computerDisplayScore = document.querySelector(".computerScore");
const playerDisplayScore = document.querySelector(".playerScore");
const roundInfo = document.querySelector(".roundInfo");
roundInfo.style.whiteSpace = "pre-line"; // to register the \n

button.forEach((button) => {    // loops through the node list of buttons.
    button.addEventListener("click", () => {    // for each button we add a listener
        playerChoice = button.getAttribute("id");
        playRound(playerChoice, getComputerChoice());
        checkWinner();
    });
});

