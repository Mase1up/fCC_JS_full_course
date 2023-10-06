// Side lessons during the Blackjack project

// Check if the person is old enough to enter the nightclub (21)
// Log suitable message to the console in both case

// let age = 22;

// if less than 21 -> "You can not enter the club!"
// if greater than 21 -> "Welcome!"

// if (age < 21) {
    // console.log("You can't enter the club!");
// } else {
    // console.log("Welcome!");
// }

// Check if person is eligible for birthday card from the King! (100)

let age = 100;

// if less than 100 -> "Not eligible"
// if exactly 100 -> "Here is your birthday card from the King!"
// if greater than 100, "Not elegible, you've already gotten one!"

if (age < 100) {
    console.log("Not eligible")
} else if (age === 100) {
    console.log("Here is your birthday card from the King!")
} else {
    console.log("Not eligible, you've already received one!")
}


// He's using the blackjack example to introduce arrays, but I don't really want to change my logic.
// I like the solution I used and it works, so I'll follow along with his array work in here.

// Array - ordered list of items

let featuredPosts = [
    "Check out my Netflix Clone", 
    "Here's code for my project", 
    "I've relaunched my portfolio"];

let mySkills = [
    "Over one decade in the golf industry",
    "Groundbreaking deployment of 2023's best golf app",
    "Incredible analytics analysis for identification of focus concepts"
]

// Make the following appear in console:
console.log(mySkills[1]);
console.log(mySkills[2]);
console.log(mySkills[0]);

// Create an array describing yourself.  Use the three primitives we've learned,
// your name (string), your age (number), and whether you like pizza (boolean)

const myArr = [
    "Mason",
    40,
    true
];

// Imagine you're building a chat application.  Pretend each message is an item in the array.  When someone types a new message,
// want to push newMessage into the messages array, and then log out the array.

// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you!  How about you?",
//     "All good.  Been working on my portfolio lately."
// ];

// let newMessage = "Same here!";

// messages.push(newMessage);
// console.log(messages);

// // How can you remove the last message sent?  (The last item in an array?)
// // Try to google it!  Still remembered.

// messages.pop();
// console.log(messages);

// Count to ten!
// Yep, here's the intro to for loops
// Where do we start, where is the FINISH?, What's the step size?

//   START      FINISH  STEP SIZE
for (let i = 10; i <= 20; i++) {
    console.log(i);
}

// Next loop work
// Count from 10 to 100 in steps of 10

for (let i = 10; i < 101; i+= 10) {
    console.log(i)
}

let messages = [
    "Hey, how's it going?",
    "I'm great, thank you!  How about you?",
    "All good.  Been working on my portfolio lately.",
    "Same here!"
]

// DRY - Don't Repeat Yourself
// console.log(messages[0]);
// console.log(messages[1]);
// console.log(messages[2]);
// console.log(messages[3]);

for (i = 0; i < messages.length; i++) {
    console.log(messages[i]);
}

let cards = [7, 3, 9]
// Create a for loop that will log out all the cards, using cards.length to determine how long loop should run

for (i = 0; i < cards.length; i++) {
    console.log(cards[i]);
}

let sentence = [
    "Hello",
    "my",
    "name",
    "is",
    "Mason"
];
let greetingEl = document.querySelector("#greeting-el");

// Render the sentence in the greeting-el para, using a for loop and .textContent

for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += (sentence[i] + " ");
}

// Bonus, how do we keep spaces if they're not in the array?
// Added them, but I will still have a space after the last word for now.



let player1Time = 102;
let player2Time = 107;

function getFastestTime() {
    if (player1Time < player2Time) {
        return player1Time;
    } else if (player2Time < player1Time) {
        return player2Time;
    } else {
        return "It was a tie with a time of " + player1Time;
    }
}

let fastestRace = getFastestTime();
console.log(fastestRace);

// Write a function that returns total race time
// Call/invoke the function and store returned value in new variable
// Finally, log the variable out

function totalRaceTime() {
    return /* combinedTime = */ player1Time + player2Time;  //; Can simply return the values, because I'm about to log it into a variable.  
}                                                          // I'm pretty sure if I kept it my way, I could've then simply console.log(combinedTime);
                                                           // Yes, that works too, once I was invoking the function (I'd commented it out at first)
let totalTime = totalRaceTime();
console.log(totalTime);


// Math.random() function overview

// let randomNumber = Math.random() * 6;
// console.log(randomNumber);


/*  

What do you think Math.random() does?
Returns a random value between 0 and 1 to a TON of decimal places

So the caveat, is that it CANNOT ever reach 1.  It's 0 to lim -> 1
Now we'll multiply Math.random by 6.  What range is our randomNumber in now?  Answer: 0 to lim -> 6

*/

// Now let's look at Math.floor()

let flooredNumber = Math.floor(-3.45632);
console.log(flooredNumber);

/*

What does Math.floor() do to positive numbers?

Your answer: If not an integer, sets the value to the next integer to the left of given number's value on the number line
             For example 3.456 would move left to 3, -3.456 would move left to -4.

*/

// Knowing these two things, use Math.random() and Math.floor() to create a die

let max = 6;
let randomNumber = (Math.floor( Math.random() * (max)) + 1 );
console.log(randomNumber);

// So this should return an integer between 0-5, need to multiply * 7 to get a Math.floor() return of 6.
// Instead of multiplying by 7, I took the 6 we wanted to include, set it as a variable 'max' and then added one, multiplying by that sum

// Yep, this is giving a result between 0 - 6
// So I have to figure out how to bump up the minimum value....
// There we go!  Move where the 1 is added!  Now the Math.floor() returns 0-5, I add 1 after so the new range = 1-6

// Last piece: Create a function, rollDice() that returns a random number between 1-6

function rollDice() {
    let max = 6;
    return randomDice = (Math.floor( Math.random() * (max)) + 1 );
}

rollDice();
console.log(randomDice);

// So how would we change the range to be 2-11?
// 1-13 would be 0-12 + 1
// 2-11 would be 0-9 + 2

// randomCard = (Math.floor( Math.random() * (9)+1) + 2 )
// It just so happens that this will always have the 'max' variable = biggest number you want MINUS the smallest you want returned
        // In this case, this would be 11-2 = 9 as the biggest value spat out by the Math.floor function
        // THEN ADD the smallest amount you want, because it will always default to a value of 0 being the smallest

// So this would be rewritten as: 
// randomCard = Math.floor( Math.random() * ((max - min)+1) + min )
