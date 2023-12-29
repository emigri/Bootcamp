# Pseudocode Rock-Paper-Scissors Game

## Instructions

* With a partner, spend a few moments outlining all the steps and conditions that go into a single game of rock-paper-scissors.

* Try to break it down into steps that you could code out.

* Think of basic elements like loops, `if-else` statements, arrays, alerts, etc.

* Be prepared to share your outlines approach.

---

Psuecode for RPS : 1. Initialize `choices` array: r, p, s. representing rock, paper, or scissors.
2. Prompt user to enter "r," "p," or "s".
3. Computer chooses a **random** value in a list of "r," "p," or "s."
4. We determine if the user wins or not.
   * Initialize `wins`, `losses`, `ties` variables to 0
   * If user picks rock and if computer picks scissors, then user wins.
   * If user picks rock and if computer picks paper, then user loses.
   * If user picks scissors and if computer picks rock, then user loses.
   * If user picks scissors and if computer picks paper, then user wins.
   * If user picks paper and if computer picks rock, then user wins.
   * If user picks paper and if computer picks scissors, then user loses.
   * If user picks the same as computer, then they tie.
5. We then add to their score.
   * If user wins, then we add one to their wins.
   * If user loses, then we add one to their losses.
   * If user ties, then we add one to their ties.
6. Prompt user to play again

choices = ['r', 'p', 's']

choices[1]
choices [Math.floor(Math.random() * computerChoices.length)]

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
