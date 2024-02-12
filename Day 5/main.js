//1. Declare an empty array
const emptyArray = [];
console.log(emptyArray); // Output: []

//2.Declare an array with more than 5 number of elements
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);

//3.Find the length of your array
 numbers = [10, 25, 7, 42, 16, 30, 50];
const arrayLength = numbers.length;

console.log('The length of the array is:', arrayLength);

//4.Get the first item, the middle item and the last item of the array
 numbers = [10, 25, 7, 42, 16, 30, 50];

// Get the first item
const firstItem = numbers[0];

// Get the middle item
const middleIndex = Math.floor(numbers.length / 2);
const middleItem = numbers[middleIndex];

// Get the last item
const lastIndex = numbers.length - 1;
const lastItem = numbers[lastIndex];

console.log('First item:', firstItem);
console.log('Middle item:', middleItem);
console.log('Last item:', lastItem);

//5.Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

const mixedDataTypes = ['John', 25, true, { city: 'New York' }, ['apple', 'banana'], null];

 arrayLength = mixedDataTypes.length;

console.log('Mixed Data Types Array:', mixedDataTypes);
console.log('The length of the array is:', arrayLength);

//6.Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

console.log('IT Companies Array:', itCompanies);
