// Use .innerHTML to render a Buy! button inside the div container

const divContainer = document.querySelector("#container");

divContainer.innerHTML = "<button onclick='buy()'>Buy!</button>";

// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!""

function buy() {
    divContainer.innerHTML += "<p>Thank you for buying!</p>";
}

