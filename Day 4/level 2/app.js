//Exercise : Level 2

//1.Write a code which can give grades to students according to theirs scores
function calculateGrade(score) {
    let grade;

    if (score >= 80 && score <= 100) {
        grade = 'A';
    } else if (score >= 70 && score < 80) {
        grade = 'B';
    } else if (score >= 60 && score < 70) {
        grade = 'C';
    } else if (score >= 50 && score < 60) {
        grade = 'D';
    } else if (score >= 0 && score < 50) {
        grade = 'F';
    } else {
        grade = 'Invalid score';
    }

    return grade;
}

// Example usage:
let studentScore = 75;
let grade = calculateGrade(studentScore);
console.log('Student Score:', studentScore);
console.log('Grade:', grade);

//2.Check if the season is Autumn, Winter, Spring or Summer
function determineSeason(month) {
    let season;

    switch (month.toLowerCase()) {
        case 'september':
        case 'october':
        case 'november':
            season = 'Autumn';
            break;
        case 'december':
        case 'january':
        case 'february':
            season = 'Winter';
            break;
        case 'march':
        case 'april':
        case 'may':
            season = 'Spring';
            break;
        case 'june':
        case 'july':
        case 'august':
            season = 'Summer';
            break;
        default:
            season = 'Invalid month';
            break;
    }

    return season;
}

// Example usage:
let userInput = 'December';
let season = determineSeason(userInput);
console.log(`For the month ${userInput}, the season is ${season}`);

//.3.Check if a day is weekend day or a working day. Your script will take day as an input
function checkDayType(day) {
    const lowercaseDay = day.toLowerCase();

    if (lowercaseDay === 'saturday' || lowercaseDay === 'sunday') {
        return `${day} is a weekend.`;
    } else if (lowercaseDay === 'monday' || lowercaseDay === 'tuesday' || lowercaseDay === 'wednesday' || lowercaseDay === 'thursday' || lowercaseDay === 'friday') {
        return `${day} is a working day.`;
    } else {
        return 'Invalid day';
    }
}

// Example usage:
userInput = 'monday';
let result = checkDayType(userInput);
console.log(`What is the day today? ${userInput}`);
console.log(result);

userInput = 'Friday';
result = checkDayType(userInput);
console.log(`What is the day today? ${userInput}`);
console.log(result);



