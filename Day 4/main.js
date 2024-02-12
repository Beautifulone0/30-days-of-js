//1.Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
// Get user input for age
let userAge = prompt("Enter your age:");

// Convert the user input to a number
userAge = parseInt(userAge);

// Check if the user is 18 or older
if (userAge >= 18) {
    console.log("You are old enough to drive.");
} else {
    // Calculate the number of years left to turn 18
    let yearsLeft = 18 - userAge;
    console.log("You are left with " + yearsLeft + " years to drive.");
}

//2.Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
// Get user input for your age
let yourAge = prompt("Enter your age:");

// Convert the user input to a number
yourAge = parseInt(yourAge);

// Assume my age is 25 for this example
let myAge = 25;

// Compare ages and log the result
if (yourAge > myAge) {
    let ageDifference = yourAge - myAge;
    console.log("You are " + ageDifference + " years older than me.");
} else if (yourAge < myAge) {
    let ageDifference = myAge - yourAge;
    console.log("I am " + ageDifference + " years older than you.");
} else {
    console.log("We are the same age.");
}

//3.If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

//using if else
let a = 10;
let b = 5;

if (a > b) {
    console.log('a is greater than b');
} else {
    console.log('a is less than b');
}

//ternary operator.
 a = 10;
 b = 5;

let result = (a > b) ? 'a is greater than b' : 'a is less than b';
console.log(result);

//4.Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

// Get user input for a number
let number = prompt("Enter a number:");

// Convert the user input to a number
number = parseInt(number);

// Check if the number is even or odd
if (number % 2 === 0) {
    console.log(number + " is an even number.");
} else {
    console.log(number + " is an odd number.");
}
