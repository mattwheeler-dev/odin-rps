const options = document.querySelectorAll('.option');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const result = document.querySelector('#result');
const playerDisplay = document.querySelector('#player-display');
const pcDisplay = document.querySelector('#pc-display');
let playerChoice;
let pcChoice;

// Decide winner and display result
const decideWinner = () => {
	if (playerChoice.toLowerCase() == pcChoice.toLowerCase()) {
		result.textContent = 'Result: Tie!';
	} else if (
		(playerChoice == 'rock') & (pcChoice == 'Scissors') ||
		(playerChoice == 'paper') & (pcChoice == 'Rock') ||
		(playerChoice == 'scissors') & (pcChoice == 'Paper')
	) {
		result.textContent = 'Result: YOU WIN!';
	} else if (
		(pcChoice == 'Rock') & (playerChoice == 'scissors') ||
		(pcChoice == 'Paper') & (playerChoice == 'rock') ||
		(pcChoice == 'Scissors') & (playerChoice == 'paper')
	) {
		result.textContent = 'Result: You lose...';
	}
};

// Create computer decision and display it
const computerDecision = () => {
	const optionNumber = Math.floor(Math.random() * options.length);

	if (optionNumber === 1) {
		pcChoice = 'Rock';
	} else if (optionNumber === 2) {
		pcChoice = 'Paper';
	} else {
		pcChoice = 'Scissors';
	}

	pcDisplay.textContent = pcChoice;

	decideWinner();
};

// Apply event listeners to and init game
options.forEach((option) => {
	option.addEventListener('click', (e) => {
		// Collect and display player choice
		playerChoice = e.target.id;
		if (playerChoice === 'rock') {
			playerDisplay.textContent = 'Rock';
		} else if (playerChoice === 'paper') {
			playerDisplay.textContent = 'Paper';
		} else if (playerChoice === 'scissors') {
			playerDisplay.textContent = 'Scissors';
		}

		// Call pc decision
		computerDecision();
	});
});
