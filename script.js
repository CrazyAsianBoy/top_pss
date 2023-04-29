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
    while(gameRound<5){
        const computerChoice = getComputerChoice();
        const playerInput = prompt("Pick paper, scissor, or rock : ");
        const playerChoice = playerInput.toLowerCase();
        console.log(playRound(playerChoice, computerChoice));
        gameRound++;
    }
        if(playerScore > computerScore){
            return `You win! Your score : ${playerScore} Computer score : ${computerScore}`;
        }else if (computerScore > playerScore){
            return `You lose! Your score : ${playerScore} Computer score : ${computerScore}`;
        }else{
            return "It's a tie!"
        }
}

let gameRound = 0;
let playerScore = 0;
let computerScore = 0;
console.log(game());