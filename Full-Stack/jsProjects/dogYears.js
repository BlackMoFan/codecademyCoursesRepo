const myAge = 20; //variable containing my age
let earlyYears = 2; //variable for two years of a dog's life
earlyYears = earlyYears * 10.5; //multiplied 10.5 to earlyYears because each human year counts as 10.5 dog years
let laterYears = myAge - 2; //subtract 2 to myAge because we already computed for my dog age for two years
laterYears = laterYears * 4; //multiply resulting years by 4
let myAgeInDogYears = earlyYears + laterYears; //age in dog years is first 2 years that is 10.5 years each plus remaining years multiplied by 4
let myName = "Black Mo Fan".toLowerCase(); //variable containing my name in lowercase
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`); //print to console
