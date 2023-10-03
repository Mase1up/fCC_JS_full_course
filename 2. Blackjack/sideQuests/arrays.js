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

