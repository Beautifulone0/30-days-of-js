// Exercise: Level 2
//1.Using console.log() print out the following statement:
/*The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.*/ 

console.log("/*The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.*/");

//2.Using console.log() print out the following quote by Mother Teresa
"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

//3.Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let stringNumber = '10';

if (typeof stringNumber === 'string') {
  stringNumber = parseInt(stringNumber); // Convert string to integer
}

console.log(stringNumber); // Now it's exactly equal to 10

//4.Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let floatValue = parseFloat('9.8');

if (floatValue !== 10) {
  floatValue = 10;
}

console.log(floatValue); // Now floatValue is exactly equal to 10

//5.Check if 'on' is found in both python and jargon
let pythonString = 'python';
let jargonString = 'jargon';

let isOnInPython = pythonString.includes('on');
let isOnInJargon = jargonString.includes('on');

console.log("Is 'on' found in Python? " + isOnInPython);
console.log("Is 'on' found in Jargon? " + isOnInJargon);

//6.I hope this course is not full of jargon. Check if jargon is in the sentence
let sentence = "I hope this course is not full of jargon";
let isJargonPresent = sentence.includes('jargon');

console.log("Is 'jargon' present in the sentence? " + isJargonPresent);

//7.Generate a random number between 0 and 100 inclusively.
let randomNumber = Math.floor(Math.random() * 101);

console.log("Random number between 0 and 100 inclusively: " + randomNumber);

//8.Generate a random number between 50 and 100 inclusively.
 randomNumber = Math.floor(Math.random() * (51)) + 50;

console.log("Random number between 50 and 100 inclusively: " + randomNumber);

//9.Generate a random number between 0 and 255 inclusively
randomNumber = Math.floor(Math.random() * 256);

console.log("Random number between 0 and 255 inclusively: " + randomNumber);

//10.Access the 'JavaScript' string characters using a random number.

let myString = 'JavaScript';
let randomIndex = Math.floor(Math.random() * myString.length);
let randomCharacter = myString.charAt(randomIndex);

console.log("Random character in 'JavaScript':", randomCharacter);

//11.Use console.log() and escape characters to print the following pattern.

//12.Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
sentence = 'You cannot end a sentence with because because because is a conjunction';
let becauseSubstring = sentence.substr(31, 23);

console.log("Substring 'because because because':", becauseSubstring);
