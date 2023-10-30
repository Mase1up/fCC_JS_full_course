// Use .innerHTML to render a Buy! button inside the div container

const divContainer = document.querySelector("#container");

divContainer.innerHTML = "<button onclick='buy()'>Buy!</button>";

// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!""

function buy() {
    divContainer.innerHTML += "<p>Thank you for buying!</p>";
}


// Template strings -or- Template literals

const recipient = "James";
const sender = "Mason";

// Refactor the email string to use template strings
const email = `
Hey ${recipient}!

How is it going?

Cheers,
${sender}`;

console.log(email);


const credits = 0;

if (credits) {
    console.log("Let's play!")   
} else {
    console.log("Sorry, you're out of credits")
}

// truthy
// falsy

// false
// 0
// ""
// null -> How you as a developer signal emptiness
// undefined -> How JavaScript signals emptiness
// NaN

let currentViewers = null;

currentViewers = ["jane", "john"]
currentViewers = null;

if (currentViewers) {
    // do something, like notify the streamer people are in their lobby
    console.log("We have viewers");
}


// Write your first function parameter

const welcomeEl = document.getElementById("welcome-el");

function greetUser(greeting, name) {
    welcomeEl.textContent = greeting + name +"!";
}

greetUser("Hello again ", "Ethan");
