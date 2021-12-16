//USING ARRAYS TO MAKE CODE CLEANER
let days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
let sleepingHours = [4, 8, 5, 7, 6, 9, 10];

const getSleepHours = day => {
	switch (day) {
		case days[0]:
			return sleepingHours[0];
			break;
		case days[1]:
			return sleepingHours[1]
			break;
		case days[2]:
			return sleepingHours[2];
			break;
		case days[3]:
			return sleepingHours[3];
			break;
		case days[4]:
			return sleepingHours[4];
			break;
		case days[5]:
			return sleepingHours[5];
			break;
		case days[6]:
			return sleepingHours[6];
			break;
		default:
			return 'Invalid entry.';
			break;
	}
}

// console.log(getSleepHours('tuesday'));

//ORIGINAL VERSION
// const getActualSleepHours = () => getSleepHours(days[0]) + getSleepHours(days[1]) + getSleepHours(days[2]) + getSleepHours(days[3]) + getSleepHours(days[4]) + getSleepHours(days[5]) + getSleepHours(days[6]);

//USING LITERALS
const getActualSleepHours = () => sleepingHours[0] + sleepingHours[1] + sleepingHours[2] + sleepingHours[3] + sleepingHours[4] + sleepingHours[5] + sleepingHours[6];

// console.log(getActualSleepHours());

//ORIGINAL VERSION
// const getIdealSleepHours = inputHours => {
//   let idealHours = 7;
//   return idealHours * 7;
// }

//MODIFIED VERSION
const getIdealSleepHours = inputHours => inputHours * 7;

// console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
	let actualSleepHours = getActualSleepHours(),
		idealSleepHours = getIdealSleepHours(8);
	let sleepHoursDifference = idealSleepHours - actualSleepHours;
	if (actualSleepHours === idealSleepHours) {
		console.log(`Ideal Sleep Hours: ${idealSleepHours}, Actual Sleep Hours: ${actualSleepHours}, Sleeping Hours Difference = ${sleepHoursDifference}\nYou got a perfect amount of sleep.`);
	}
	if (actualSleepHours > idealSleepHours) {
		console.log(`Ideal Sleep Hours: ${idealSleepHours}, Actual Sleep Hours: ${actualSleepHours}, Sleeping Hours Difference = ${sleepHoursDifference}\nYou got more sleep than needed.`);
	}
	if (actualSleepHours < idealSleepHours) {
		console.log(`Ideal Sleep Hours: ${idealSleepHours}, Actual Sleep Hours: ${actualSleepHours}, Sleeping Hours Difference = ${sleepHoursDifference}\nYou should get some rest.`);
	}
}

calculateSleepDebt();
