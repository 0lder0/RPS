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

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i ++) {
        const playerSelection = prompt('Rock, paper or scissors?').toUpperCase();
        const computerSelection = getComputerChoice();

        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.includes('win')) {
            playerScore ++;
        } else if (result.includes('lose')) {
            computerScore++;
        }
    }

    console.log('Game over!')

    if (playerScore > computerScore) {
        console.log('You won the game!')
    } else if (playerScore < computerScore) {
        console.log('You lost the game!')
    } else {
        console.log('It\'s a tie!')
    }
};

game();