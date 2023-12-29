//Variables
var userChoice = ['rock', 'paper', 'scissors'];
var compChoice = ['rock', 'paper', 'scissors'];
var wins = 0;
var losses = 0;
var ties = 0;

// Computers random function

// For loop
for (var i = 0; i < 10; i++)

var compChoice = compChoice[Math.floor(Math.random() * compChoice.length)];

var userChoices = prompt('Rock, Paper or Scissors?');

// If statements
if (userChoice === compChoice) {
  alert("The computer chose " + compChoice);

}

// * If user picks rock and if computer picks scissors, then user wins.
// * If user picks rock and if computer picks paper, then user loses.
// * If user picks scissors and if computer picks rock, then user loses.
// * If user picks scissors and if computer picks paper, then user wins.
// * If user picks paper and if computer picks rock, then user wins.
// * If user picks paper and if computer picks scissors, then user loses.
// * If user picks the same as computer, then they tie.



