//1 create variable input
// let input = 'Sustainable Development';
// let input = 'turpentine and turtles';
// let input = 'Hi, Human';
let input = 'a whale of a deal!';

//2 create array for vowels
const vowels = ['a', 'e', 'i', 'o', 'u'];

//3 create empty array variable
let resultArray = []

//4 create loop to iterate in the input string
for(let i = 0; i < input.length; i++){
  // console.log('i is ' + i);
  for(let j = 0; j < vowels.length; j++){
    //check if there is a match
    if(input[i] === vowels[j]){
      //push to resultArray if match is found
      resultArray.push(input[i]);

      //if current letter is 'e' push it again to double
      if(input[i] === 'e'){
        resultArray.push(input[i]);
      }

      //if current letter is 'u' push it again to double
      if(input[i] === 'u'){
        resultArray.push(input[i]);
      }
    }
  }
}

// console.log(resultArray);
let whaleTranslation = resultArray.join('').toUpperCase();
console.log(whaleTranslation);