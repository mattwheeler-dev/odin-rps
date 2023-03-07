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

// APPLY EVENT LISTENER TO OPTIONS
options.forEach(addEventListener("click", playerChoice()));

// PLAYER CHOICE FUNC
const playerChoice = () => {};

// PC CHOICE FUNC
// const compChoice = () => {};
