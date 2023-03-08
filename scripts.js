const options = document.querySelectorAll(".option");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.querySelector("#result");
const playerDisplay = document.querySelector("#player-display");
const pcDisplay = document.querySelector("#pc-display");
let playerChoice;
let pcChoice;

// DECIDE WINNER AND DISPLAY RESULT
const decideWinner = () => {
	if (playerChoice == pcChoice) {
		result.textContent = "Result: Tie!";
	} else if (
		(playerChoice == "rock") & (pcChoice == "scissors") ||
		(playerChoice == "paper") & (pcChoice == "rock") ||
		(playerChoice == "scissors") & (pcChoice == "paper")
	) {
		result.textContent = "Result: YOU WIN!";
	} else if (
		(pcChoice == "rock") & (playerChoice == "scissors") ||
		(pcChoice == "paper") & (playerChoice == "rock") ||
		(pcChoice == "scissors") & (playerChoice == "paper")
	) {
		result.textContent = "Result: You lose...";
	}
};

// CREATE AND DISPLAY COMPUTER DECISION
const computerDecision = () => {
	const optionNumber = Math.floor(Math.random() * options.length);

	if (optionNumber === 1) {
		pcChoice = "rock";
	} else if (optionNumber === 2) {
		pcChoice = "paper";
	} else {
		pcChoice = "scissors";
	}

	pcDisplay.textContent = pcChoice;

	decideWinner();
};

// APPLY EVENT LISTENER TO OPTIONS AND START GAME
options.forEach((option) => {
	option.addEventListener("click", (e) => {
		// COLLECT AND DISPLAY PLAYER CHOICE
		playerChoice = e.target.id;

		if (playerChoice === "rock") {
			playerDisplay.textContent = "rock";
		} else if (playerChoice === "paper") {
			playerDisplay.textContent = "paper";
		} else if (playerChoice === "scissors") {
			playerDisplay.textContent = "scissors";
		}

		// CALL PC DECISION
		computerDecision();
	});
});
