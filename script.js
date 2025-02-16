function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100);

    if (randomNumber > 0 && randomNumber < 33) {
        console.log("Rock");
    } else if (randomNumber > 33 && randomNumber < 66) {
        console.log("Paper");
    } else {
        console.log("Scissor");
    }
}

getComputerChoice();

