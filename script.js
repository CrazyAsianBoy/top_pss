const getComputerChoice = () => {
    let randNum = Math.floor(Math.random()*3);
    return (randNum == 0) ? "rock"
    : (randNum == 1) ? "scissor"
    : "paper"
}

const playRound=(playerSelection , computerSelection) => {

    if (playerSelection == "rock" && computerSelection == "paper"){
        computerScore++;
        return "Paper beats rock, computer win";
    } else if (playerSelection == "rock" && computerSelection == "scissor"){
        playerScore++;
        return "Rock beats scissor, you win!";
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        playerScore++;
        return "Paper beats rock, you win";
    } else if (playerSelection == "paper" && computerSelection == "scissor"){
        computerScore++;
        return "Scissor beat paper, computer win";
    } else if (playerSelection == "scissor" && computerSelection == "rock"){
        computerScore++;
        return "Rock beats scissor, computer win";
    } else if (playerSelection == "scissor" && computerSelection == "paper"){
        playerScore++;
        return "Scissor beats paper, you win!";
    } else {
        return "Same choice. Try again!";
    }

}

const game = () =>{
    if (gameRound <= 5) {
        for (let i = 0; i < gameRound; i++){
            playRound();
            console.log(`Player score : ${playerScore} , Computer score : ${computerScore}`);
        }
    } else {
        if(computerScore > playerScore){
            console.log(`Player score : ${playerScore} , Computer score : ${computerScore}`);
            return "Computer Won!";
        } else if(playerScore > computerScore) {
            console.log(`Player score : ${playerScore} , Computer score : ${computerScore}`);
            return "You Won!";
        } else {
            console.log(`Player score : ${playerScore} , Computer score : ${computerScore}`);
            return "It's a tie";
        }
    }


    // do{
    //     gameRound++;
    //     console.log(playRound(playerSelection, computerSelection));
    // }
    // while (gameRound<=5);
    // while (gameRound<=5){
    //     playRound(playerSelection, computerSelection);
    //     gameRound++;
    // }
}

let gameRound = 0;
let playerScore = 0;
let computerScore = 0;
const computerInput = prompt("Pick paper, scissor, or rock : ");
const playerSelection = computerInput.toLowerCase();
const computerSelection = getComputerChoice();
console.log(game());