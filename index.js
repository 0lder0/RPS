function getComputerChoice() {
    const choices = ['ROCK', 'PAPER', 'SCISSORS'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
};

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return 'It is a tie!';
    }
    else if (playerSelection === 'ROCK') {
        if (computerSelection === 'PAPER') {
            return 'You lose! Paper beats rock!';
        }
        else {
            return 'You win! Rock beats scissors!';
        }
    }
    else if (playerSelection === 'PAPER') {
        if (computerSelection === 'ROCK') {
            return 'You win! Paper beats rock!';
        }
        else {
            return 'You lose! Scissors beats paper!';
        }
    }
    else if (playerSelection === 'SCISSORS') {
        if (computerSelection === 'ROCK') {
            return 'You lose! Rock beats scissors!';
        }
        else {
            return 'You win! Scissors beats paper!';
        }
    }
};

const playerSelection = prompt('Rock, paper or scissors?').toUpperCase();
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));