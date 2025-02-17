// Computer choice logic
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100);

    if (randomNumber > 0 && randomNumber < 33) {
        return "rock";
    } else if (randomNumber > 33 && randomNumber < 66) {
        return "paper";
    } else {
        return "scissor";
    }
}

// Human choice logic
function getHumanChoice() {
    let userPrompt = prompt("Rock, Paper or Scissor?");
    let caseInsensitivePrompt = userPrompt.toLowerCase();   

    if (caseInsensitivePrompt === "rock") {
        return "rock";
    } else if (caseInsensitivePrompt === "paper") {
        return "paper";
    } else if (caseInsensitivePrompt === "scissor") {
        return "scissor";
    } else {
        return alert("INVALID INPUT");
    }
}

// Human score and computer score initialization
let humanScore = 0;
let computerScore = 0;

// Single round logic
function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "rock") {
        console.log("Tie! You both picked Rock");
        console.log(`Human: ${humanScore} Computer: ${computerScore}`);
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        console.log("Tie! You both picked Paper");
        console.log(`Human: ${humanScore} Computer: ${computerScore}`);
    } else if (humanChoice === "scissor" && computerChoice === "scissor") {
        console.log("Tie! You both picked Scissor");
        console.log(`Human: ${humanScore} Computer: ${computerScore}`);
    } else if (humanChoice === "rock" && computerChoice === "scissor") {
        console.log("You win! Rock beats Scissor");
        console.log(`Human: ${++humanScore} Computer: ${computerScore}`);
    } else if (humanChoice === "scissor" && computerChoice === "paper") {
        console.log("You win! Scissor beats Paper");
        console.log(`Human: ${++humanScore} Computer: ${computerScore}`);
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock");
        console.log(`Human: ${++humanScore} Computer: ${computerScore}`);
    } else if (humanChoice === "scissor" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissor");
        console.log(`Human: ${humanScore} Computer: ${++computerScore}`);
    } else if (humanChoice === "paper" && computerChoice === "scissor") {
        console.log("You lose! Scissor beats Paper");
        console.log(`Human: ${humanScore} Computer: ${++computerScore}`);
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock");
        console.log(`Human: ${humanScore} Computer: ${++computerScore}`);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);