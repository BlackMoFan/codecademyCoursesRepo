let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//This function will be called at the start of each new round in order to generate the new secret target number.
const generateTarget = () => Math.floor(Math.random() * 10);

//This function will be called inside compareGuesses to return the difference between the distances
const getAbsoluteDistance = (player, target) => Math.abs(target - player);

//This function will be called each round to determine which guess is closest to the target number.
const compareGuesses = (userGuess, computerGuess, targetNumber) => {
  if (userGuess < 0 || userGuess > 9) {
    alert('User guess is out of range')
  }
  return getAbsoluteDistance(userGuess, targetNumber) <= getAbsoluteDistance(computerGuess, targetNumber);
};

//This function will be used to correctly increase the winner’s score after each round.
const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  } else {
    console.log('invalid entry');
  }
};

//This function will be used to update the round number after each round.
const advanceRound = () => currentRoundNumber++;
