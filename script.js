function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100);

    if (randomNumber > 0 && randomNumber < 33) {
        return "Rock";
    } else if (randomNumber > 33 && randomNumber < 66) {
        return "Paper";
    } else {
        return "Scissor";
    }
}

function getHumanChoice() {
    let userPrompt = prompt("Rock, Paper or Scissor?");   

    if (userPrompt === "Rock" || userPrompt === "rock") {
        return "Rock";
    } else if (userPrompt === "Paper" || userPrompt === "paper") {
        return "Paper";
    } else if (userPrompt === "Scissor" || userPrompt === "scissor") {
        return "Scissor";
    } else {
        return alert("INVALID INPUT");
    }
}
