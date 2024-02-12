//2.First remove all the punctuations and change the string to array and count the number of words in the array const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
 backEnd = ['Node','Express', 'MongoDB']
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

// Combine both arrays
const fullStack = [...frontEnd, ...backEnd];

// Convert the array to a string
const fullStackString = fullStack.join(' ');

// Remove punctuation and convert to an array of words
const wordsArray = fullStackString.replace(/[^\w\s]/g, '').split(/\s+/);

// Count the number of words
const numberOfWords = wordsArray.length;

console.log('Full Stack Array:', fullStack);
console.log('Number of Words:', numberOfWords);
//3.In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// Check if 'Meat' is already in the shopping cart
const isMeatAlreadyAdded = shoppingCart.includes('Meat');

// If not, add 'Meat' to the beginning of the shopping cart
if (!isMeatAlreadyAdded) {
    shoppingCart.unshift('Meat');
}

console.log('Updated Shopping Cart:', shoppingCart);
