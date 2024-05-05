const userButtons = document.querySelectorAll('.user-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const userScoreDisplay = document.getElementById('user-score');
const computerScoreDisplay = document.getElementById('computer-score');
const overlay = document.getElementById('overlay');

let userScore = 0;
let computerScore = 0;

const choices = ['rock', 'paper', 'scissors'];

userButtons.forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.id;
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        userChoiceDisplay.textContent = capitalize(userChoice);
        computerChoiceDisplay.textContent = capitalize(computerChoice);
        const winner = determineWinner(userChoice, computerChoice);
        updateScores(winner);
        displayWinnerOverlay(winner);
        animateChoices(userChoice, computerChoice);
    });
});

function determineWinner(user, computer) {
    if (user === computer) {
        return 'Tie';
    }
    if ((user === 'rock' && computer === 'scissors') ||
        (user === 'scissors' && computer === 'paper') ||
        (user === 'paper' && computer === 'rock')) {
        return 'User wins';
    } else {
        return 'Computer wins';
    }
}

function updateScores(winner) {
    if (winner === 'User wins') {
        userScore++;
    } else if (winner === 'Computer wins') {
        computerScore++;
    }
    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
}

function animateChoices(userChoice, computerChoice) {
    setTimeout(() => {
        userChoiceDisplay.textContent = '-';
        computerChoiceDisplay.textContent = '-';
    }, 3000);
}

function displayWinnerOverlay(winner) {
    overlay.textContent = winner;
    if (winner === 'User wins') {
        overlay.style.backgroundColor = 'rgba(39, 174, 96, 0.7)'; 
        playSound("C:\Users\terau\OneDrive\Dators\R,P,S\yt5s.io - Winning Sound Effect (128 kbps).mp3"); 
    } else if (winner === 'Computer wins') {
        overlay.style.backgroundColor = 'rgba(231, 76, 60, 0.7)'; 
        playSound("C:\Users\terau\OneDrive\Dators\R,P,S\yt5s.io - Sad Trombone - Sound Effect (HD) (128 kbps).mp3"); 
    } else {
        overlay.style.backgroundColor = 'rgba(255, 192, 203, 0.5)'; 
    }
    overlay.style.display = 'flex';
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 1500);
}

function playSound(soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
