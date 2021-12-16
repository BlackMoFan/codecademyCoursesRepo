let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = false;
let runnerAge = 19;

if (runnerAge > 18 && registeredEarly) {
	raceNumber += 1000;
}

if (runnerAge > 18 && registeredEarly) {
	console.log(`Early adults run at 9:30 am.\nRace number:  ${raceNumber}`);
} else if (runnerAge > 18 && !registeredEarly) {
	console.log(`Late adults run at 11:00 am.\nRace number:  ${raceNumber}`);
} else if (runnerAge < 18) {
	console.log(`Youth registrants run at 12:30 pm.\nRace number:  ${raceNumber}`);
} else {
	console.log("For registrants exactly 18 years old, please proceed to the registration desk.");
}
