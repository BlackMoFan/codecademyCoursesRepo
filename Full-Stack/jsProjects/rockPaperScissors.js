const getUserChoice = userInput => {
	userInput = userInput.toLowerCase();
	if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
		return userInput;
	} else {
		console.log('Invalid choice.');
	}
}

// console.log(getUserChoice('rock'));

const getComputerChoice = () => {
	let computerInput = Math.floor(Math.random() * 3);
	switch (computerInput) {
		case 0:
			return 'rock';
			break;
		case 1:
			return 'paper';
			break;
		case 2:
			return 'scissors';
			break;
	}
}

// console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
	// console.log(`User:  ${userChoice}`);
	// console.log(`Computer:  ${computerChoice}`);
	if (userChoice === 'bomb') {
		return 'User is undoubtedly the winner!';
	}
	if (userChoice === computerChoice) {
		return 'It is a tie.';
	}
	if (userChoice === 'rock') {
		if (computerChoice === 'paper') {
			return 'Computer wins.';
		} else {
			return 'User wins.';
		}
	}
	if (userChoice === 'paper') {
		if (computerChoice === 'scissors') {
			return 'Computer wins.';
		} else {
			return 'User wins.';
		}
	}
	if (userChoice === 'scissors') {
		if (computerChoice === 'rock') {
			return 'Computer wins.';
		} else {
			return 'User wins.';
		}
	}
}

// console.log('Decision: ' + determineWinner(getUserChoice('paper'), getComputerChoice()));

function playGame() {
	let choice = 'paper';
	let userChoice = getUserChoice(choice);
	let computerChoice = getComputerChoice();
	console.log(`User: ${userChoice}` + `\nComputer: ${computerChoice}`);

	console.log(determineWinner(userChoice, computerChoice));
}

playGame();
