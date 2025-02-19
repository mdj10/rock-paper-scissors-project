const options = ["rock", "paper", "scissors"];

function getComputerChoice () {
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
        return "Player Won";
    } else {
        return "Computer Won";
    }
}


function playRound(playerSelection, computerSelection) {

}