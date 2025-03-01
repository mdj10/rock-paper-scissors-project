const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)]
    return choice;
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissor") || 
        (playerSelection === "scissor" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ){
        return "Player";
    } else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    
    if (result == "Tie") {
        return "It's a Tie!";
    } else if (result === "Player") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function getPlayerChoice() {
    let validatedInput = false;

    while (validatedInput === false) {
        const choice = prompt("Rock, Paper or Scissors?");

        if (choice === null) {
            continue;
        }

        const choiceInLower = choice.toLowerCase();

        if (options.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function game() {
    let humanScore = 0;
    let computerScore = 0;

    console.log("Welcome");

    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("New Round");

        if (checkWinner(playerSelection, computerSelection) === "Player") {
            humanScore++;
        } else if (checkWinner(playerSelection, computerSelection) === "Computer") {
            computerScore++;
        }
    }

    if (humanScore > computerScore) {
        console.log("Player was the winner!");
    } else if (humanScore < computerScore) {
        console.log("Computer was the winner!");
    } else {
        console.log("It's a ie!");
    }

    console.log("Game Over");
}

game();