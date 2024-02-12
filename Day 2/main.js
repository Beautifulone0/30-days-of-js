// 1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
 
let challenge = '30 Days Of JavaScript';
 console.log(challenge)
console.log(challenge.length)

//4. Change all the string characters to capital letters using toUpperCase() method
 challenge = '30 Days Of JavaScript';

let uppercaseChallenge = challenge.toUpperCase();

console.log(uppercaseChallenge);

// 5. Change all the string characters to lowercase letters using toLowerCase() method

 challenge = '30 Days Of JavaScript';

  let lowercaseChallenge = challenge.toLowerCase();

  console.log(lowercaseChallenge);

  //6. Cut (slice) out the first word of the string using substr() or substring() method

  challenge = '30 Days Of JavaScript';

 let firstWord = challenge.substring(0, challenge.indexOf(''));

  console.log(firstWord);

  //7.Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript
     challenge = '30 Days Of JavaScript';
      let phrase = challenge.slice(challenge.indexOf('Days'), challenge.length);

    console.log(phrase);


//8. Check if the string contains a word Script using includes() method
 challenge = '30 Days Of JavaScript';
let containsScript = challenge.includes('Script');

if (containsScript) {
  console.log('The string contains the word "Script".');
} else {
  console.log('The string does not contain the word "Script".');
}

//9. Split the string into an array using split() method

challenge = '30 Days Of JavaScript';
let arrayFromChallenge = challenge.split(' ');

console.log(arrayFromChallenge);

//11.'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let companiesArray = companiesString.split(', ');

console.log(companiesArray);

//12.Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
challenge = '30 Days Of JavaScript';
let modifiedChallenge = challenge.replace('JavaScript', 'Python');

console.log(modifiedChallenge);

//13.What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
challenge = '30 Days Of JavaScript';
let characterAtIndex15 = challenge.charAt(15);

console.log(characterAtIndex15);

//14.What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
challenge = '30 Days Of JavaScript';
let charCodeOfJ = challenge.charCodeAt(11);

console.log(charCodeOfJ);

//15.Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
let text = "30 Days Of JavaScript";
let position = text.indexOf('a');

console.log("The position of the first occurrence of 'a' is: " + position);

//16.Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
 text = "30 Days Of JavaScript";
let lastPosition = text.lastIndexOf('a');

console.log("The position of the last occurrence of 'a' is: " + lastPosition);

//17.Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence = 'You cannot end a sentence with because because because is a conjunction';
position = sentence.indexOf('because');

console.log("The position of the first occurrence of 'because' is: " + position);

//18.Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

 sentence = 'You cannot end a sentence with because because because is a conjunction';
 lastPosition = sentence.lastIndexOf('because');

console.log("The position of the last occurrence of 'because' is: " + lastPosition);

//19.Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

 sentence = 'You cannot end a sentence with because because because is a conjunction';
 position = sentence.search('because');

console.log("The position of the first occurrence of 'because' is: " + position);

//20.let stringWithWhitespace = ' 30 Days Of JavaScript ';
let stringWithWhitespace = ' 30 Days Of JavaScript ';
let trimmedString = stringWithWhitespace.trim();

console.log("Original string: '" + stringWithWhitespace + "'");
console.log("Trimmed string: '" + trimmedString + "'");

//21.Use startsWith() method with the string 30 Days Of JavaScript and make the result true
let myString = '30 Days Of JavaScript';
let startsWithResult = myString.startsWith('30');

console.log("Does the string start with '30'? " + startsWithResult);

//22.Use endsWith() method with the string 30 Days Of JavaScript and make the result true
 myString = '30 Days Of JavaScript';
let endsWithResult = myString.endsWith('JavaScript');

console.log("Does the string end with 'JavaScript'? " + endsWithResult);

//23.Use match() method to find all the a’s in 30 Days Of JavaScript
myString = '30 Days Of JavaScript';
let matches = myString.match(/a/g);

console.log("All occurrences of 'a':", matches);

//24.Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let firstString = '30 Days of ';
let secondString = 'JavaScript';
let concatenatedString = firstString.concat(secondString);

console.log("Concatenated String:", concatenatedString);

//25.Use repeat() method to print 30 Days Of JavaScript 2 times
 myString = '30 Days Of JavaScript';
let repeatedString = myString.repeat(2);

console.log(repeatedString);
