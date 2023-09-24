// document.getElementById("count-el").innerText = 5


// change the count-el in HTML to reflect the new count
// 1. create var saveEl to store the save-el <p> element
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");


let count = 0;

function increment() {
    count++;
    countEl.textContent = count;
}


// 1. Create a function save(), which logs out the count when called

function save() {
    // 2. Create a var that contains both the count and the dash separator, i.e. "12 - "
    // Render the var in the saveEl using innerText
    // NB: Make sure not to delete the existing content of the paragraph
    let saveNumber = count + " - "
    saveEl.textContent += saveNumber;
    count = 0;
    countEl.textContent = count;
}


// So I did find a good solution for the issue with dashes, HOWEVER....
// He wanted you to look up alternatives to .innerText and find the diff b/w
// that and .textContent
// This was my solution:
    // let saveNumber = " " + count + " -"
    // saveEl.innerText += saveNumber;
    // count = 0;
    // countEl.innerText = count;

// MDN says that .innerText is more computationally draining than .textContent as well, 
// let's go ahead and swap .innerText to .textContent

