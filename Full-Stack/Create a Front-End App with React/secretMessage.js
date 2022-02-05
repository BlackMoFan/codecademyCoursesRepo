let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//check initial length
console.log(secretMessage.length);

//1. removing last string in the array
secretMessage.pop();
//2. checking the resulting array length after removal. should be 1 less
console.log(secretMessage.length);

//3. pushing/adding two separate strings
secretMessage.push('to', 'Program');

//4. changing 'easily' to 'right'. index 7
secretMessage[7] = 'right';

//5. remove first string by using .shift
secretMessage.shift();

//6. add string 'Programming' to the beginning of array using .unshift
secretMessage.unshift('Programming');

//7. remove 5 contiguous elements from index 6 using splice
//then replace with single string 'know'
secretMessage.splice(6, 5, 'know,');

// check array content
console.log(secretMessage);

//print the array content as a sentence
console.log(secretMessage.join(' '));