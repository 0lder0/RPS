function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
};

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return 'It is a tie!';
    }
    else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return 'You lose! Paper beats rock!';
        }
        else {
            return 'You win! Rock beats scissors!';
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return 'You win! Paper beats rock!';
        }
        else {
            return 'You lose! Scissors beats paper!';
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return 'You lose! Rock beats scissors!';
        }
        else {
            return 'You win! Scissors beats paper!';
        }
    }
};

