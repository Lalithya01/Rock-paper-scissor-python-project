const choices = document.querySelectorAll('.choice');
const result = document.getElementById('result');
const score = document.getElementById('score');

let userScore = 0;
let computerScore = 0;

choices.forEach(choice => {
    choice.addEventListener('click', playGame);
});

function playGame(event) {
    const userChoice = event.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(userChoice, computerChoice);

    if (winner === 'user') {
        userScore++;
        result.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
    } else if (winner === 'computer') {
        computerScore++;
        result.textContent = `You lose! ${computerChoice} beats ${userChoice}.`;
    } else {
        result.textContent = "It's a draw!";
    }

    score.textContent = `Score: You ${userScore} - Computer ${computerScore}`;
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'draw';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'user';
    } else {
        return 'computer';
    }
}
