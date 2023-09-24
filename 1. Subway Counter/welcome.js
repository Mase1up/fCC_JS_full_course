//  Grab welcome-el <p> and store in var welcomeEl
// 
// Create two vars (name & greeting) contains your name
// and the greeting we want on the page

// Render the welcome message using welcomeEl.innerText

let welcomeEl = document.getElementById("welcome-el");

let userName = 'Mason';
let greeting = "Welcome back " + userName + "!";

welcomeEl.innerText = greeting;

// Add an emoji to the end!  Waving hand emoji
// ALL CODE MUST BE WRITTEN BELOW HERE
// HINT: count = count + 1

welcomeEl.innerText += " 👋"

