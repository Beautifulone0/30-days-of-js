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

