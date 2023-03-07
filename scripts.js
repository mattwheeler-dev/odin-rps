/* 
3 options
user selects 1
pc selects 1 at random
decide if user lose, win, or tie
display choices and result
reset btn clears all to start over
*/
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const options = document.querySelectorAll(".option");
const playerDisplay = document.querySelector("#player-display");
const pcDisplay = document.querySelector("#pc-display");
let playerChoice;
let pcChoice;

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

	pcDisplay.innerHTML = pcChoice;

	// decideWinner();
};

// APPLY EVENT LISTENER TO OPTIONS AND START GAME
options.forEach((option) => {
	option.addEventListener("click", (e) => {
		// COLLECT AND DISPLAY PLAYER CHOICE
		playerChoice = e.target.id;
		if (playerChoice === "rock") {
			playerDisplay.innerHTML = "rock";
		} else if (playerChoice === "paper") {
			playerDisplay.innerHTML = "paper";
		} else if (playerChoice === "scissors") {
			playerDisplay.innerHTML = "scissors";
		}

		// CALL PC DECISION
		computerDecision();
	});
});
