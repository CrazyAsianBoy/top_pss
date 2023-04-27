const getComputerChoice = ()=>{
    let randNum = Math.floor(Math.random()*3);
    return (randNum == 0) ? "Rock"
    : (randNum == 1) ? "Scissors"
    : "Paper"
}

const playRound=(playerSelection , computerSelection)=>{

}
console.log(getComputerChoice());