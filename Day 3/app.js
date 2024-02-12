// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types
 let firstName = "Daisy"
 let lastName = 'Visavilwa'
let country = 'kenya'
let city   =  "Nairobi"
let  age = "22"
let  isMarried = false;
let year = 2024;

// Use typeof operator to check data types
console.log("firstName:", firstName, typeof firstName);
console.log("lastName:", lastName, typeof lastName);
console.log("country:", country, typeof country);
console.log("city:", city, typeof city);
console.log("age:", age, typeof age);
console.log("isMarried:", isMarried, typeof isMarried);
console.log("year:", year, typeof year);
    
//2.Check if type of '10' is equal to 10
console.log(typeof '10' === typeof 10); // false
console.log('10' === 10); // false
console.log('10' == 10); // true (loose equality)

//3.Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') === 10); // false
console.log(parseInt('9.8')); // 9

//4.Boolean value is either true or false.
//Write three JavaScript statement which provide truthy value.
// Truthy values
console.log(Boolean('Hello')); // true
console.log(Boolean(42)); // true
console.log(Boolean([1, 2, 3])); // true
