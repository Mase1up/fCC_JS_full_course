// Create a person object with 3 keys: name, age, country use self

let person = {
    name: "Mason",
    age: 40,
    country: "the United States"
}

// Create a function logData(), that uses the person object to create a string
// in the following format:
// "Mason is 40 years old and lives in ..

function logData() {
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
}

// Invoke the logData() function to verify
logData();


// Conditionals

let age = 5;
let discount;
//  less than 6 years old -> free
// 6 - 17 years -> child discount
// 18 - 26 -> student discount
// 27 - 66 -> full price
// over 66 -> senior discount

// Create a conditional statment that logs out the discount
// the passenger will get based upon the value of age variable

if (age > 66) {
    discount = "Senior Citizen Discount";
} else if (age >= 27 && age <= 66) {
     discount = "Full Price";
} else if (age >= 18 && age <= 26) {
     discount = "Student Discount";
} else if (age >= 6 && age <= 17) {
     discount = "Child Discount"
} else {
     discount = "Free!"
};

console.log(discount);  // I struggled here because it wasn't in a function.  I think I'm almost always using these in functions so far,
                        // and I was trying to return discount and couldn't understand why it was giving me errors for quite awhile.


// For loops

// let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
-China
-India
-United States
-Indonesia
-Pakistan
*/

// console.log("The 5 largest countries in the world:");
// for (let i = 0; i < largeCountries.length; i++) {
//     console.log("-" + largeCountries[i]);
// }

// Stopped at 4:22:16

let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"];

// You need to fix the largeCountries array so that
// China and Pakistan are added back to their respective places

// Use push() and pop() along with their counterparts shift() and unshift()
// Google how to use unshift() and shift()

largeCountries.unshift();
largeCountries.unshift('China');
largeCountries.pop();
largeCountries.push('Pakistan');

console.log(largeCountries);


// If it is Friday the 13th, log out spooky face
// Use the logical "AND operator"

let dayofMonth = 13;
let dayofWeek = 'Friday';

if (dayofMonth === 13 && dayofWeek === 'Friday') {
    console.log('Spooky face inserted here');
}


// Practice random numbers with Rock, Paper, Scissors
// Create a function that returns a rancom item from the array

let hands = ['Rock', 'Paper', 'Scissors'];

function startGame() {
    let randomChoice = Math.floor(Math.random() * 3); // This will give me 0-2 which is perfect for my array items
    return hands[randomChoice];
}


console.log(startGame());  // This is a little confusing to me, that invoking a function that returns something logs out the return...

// That just doesn't make sense to me....I'll have to find the right way to understand why that occurs



