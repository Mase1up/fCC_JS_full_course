// document.getElementById("count-el").innerText = 5;

// Initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when button is clicked
// change the count-el in the HTML to reflect the new count

let count = 0;

function increment() {
    count++;
    document.getElementById("count-el").innerText = count;
}

function resetCount() {
    count = 0;
    document.getElementById("count-el").innerText = count;
}