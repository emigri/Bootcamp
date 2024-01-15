// * Create a simple blackjack game with the following properties:

//   * Deals the player a random number between 4 and 21 inclusive.
  function randomNumber(min, max) {
   var range = max - min + 1;

   return Math.floor(Math.random()* range + min);
  }

  // randNum = randomNumber(4,21),
  // console.log(randNum);

  var playerScore = 0;
  var dealerScore = 0;

  function getScore() {
    return "your hand: " + playerScore + "Dealer hand: " + dealerScore;
  }

  function blackjack() {

  }
  blackjack()
playerScore += randomNumber(4, 21);

if (playerScore === 21) {
  alert(`Blackjack!${getScore()}`);
  return;
}
      
//   * Deals a random number between 2 and 11 inclusive to the dealer.

dealerScore += randomNumber(2,11);

var keepGoing = true;

while (keepGoing) {
  var hit = confirm("would you to hit?" + getScore());

  if (hit) {
    alert("You win!")
  } else {
    keepGoing = false;
  }
}

//     * If the player goes has 21 they lose.


//   * If the player hits, add a number between 2 and 11.
   if (hit) {
    playerScore += randomNumber(2,11);

    if (playerScore > 21) {
      alert
    }

   }


//     * If the player goes over 21 the lose.
     
//     * If the player has 21, stay for them.
     
//     * Repeat until they choose to stay or they bust
     
//   * Once player stays add a number between 2 and 11 to the dealer's hand.
     
//     * If dealer number is less than 17 add another number
     
//     * Repeat until the number is over over 17 but less than 21, or if the dealer goes over 21
     
//     * If dealer goes over 21 they lose.
  
//   * Once dealer stops, and neither player bust, compare each number to 21. Whoever is closer wins!

// * Pseudocode the outline of your game before you write any code.

// * Create functions if you begin to repeat yourself.
