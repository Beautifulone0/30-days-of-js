// Exercise 3
//1.Write a program which tells the number of days in a month
function getDaysInMonth(month) {
    const lowercaseMonth = month.toLowerCase();

    switch (lowercaseMonth) {
        case 'january':
        case 'march':
        case 'may':
        case 'july':
        case 'august':
        case 'october':
        case 'december':
            return `${month} has 31 days.`;

        case 'april':
        case 'june':
        case 'september':
        case 'november':
            return `${month} has 30 days.`;

        case 'february':
            return `${month} has 28 days.`;

        default:
            return 'Invalid month';
    }
}

// Example usage:
let userInput = 'January';
console.log(`Enter a month: ${userInput}`);
console.log(getDaysInMonth(userInput));

userInput = 'February';
console.log(`Enter a month: ${userInput}`);
console.log(getDaysInMonth(userInput));
