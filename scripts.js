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

// APPLY EVENT LISTENER TO OPTIONS
options.forEach((option) => {
	option.addEventListener("click", () => {
		console.log(option.id);
	});
});

function computerDecision() {
	const optionNumber = Math.floor(Math.random() * options.length);

	if (optionNumber === 1) {
		computerChoice = "ROCK";
	} else if (optionNumber === 2) {
		computerChoice = "PAPER";
	} else {
		computerChoice = "SCISSORS";
	}

	computerDisplay.innerHTML = computerChoice;

	decideWinner();
}
