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
const email = `Hey ${recipient}!  How is it going?  Cheers, ${sender}`;

console.log(email);