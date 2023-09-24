// 6. Calculator Challenge

let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let sumEl = document.getElementById("sum-el");
    console.log(1);

//Create four funcs add(), subtract(), divide(), multiply()
// Call correct func when user clicks on one of the buttons
// Perfrom given calc using num1 and num2
// Render result of calc in <p> with id="sum-el"

// E.g. if user clicks on "Plus" button, should render
// "Sum: 10" (since 8 + 2 = 10) inside the <p> with id="sum-el"

function add() {
    let sum = num1 + num2;
    sumEl.textContent = "Sum: " + sum;
}

function subtract() {
    let sum = num1 - num2;
    sumEl.textContent = "Sum: " + sum;
}

function divide() {
    let sum = num1 / num2;
    sumEl.textContent = "Sum: " + sum;
}

function multiply() {
    let sum = num1 * num2;
    sumEl.textContent = "Sum: " + sum;
}

// As of now, this is functioning, EXCEPT
// I'm not clearning the previously recorded sum
// I want to make a separate <p> inside the span that changes 
// but I'm fairly sure I'm supposed to find a different solution.

// I need function to calculate the result
// Clear out any previous answer
// Display Sum: followed by the answer
// I'm going to hard-code the Sum: part in b/c I don't know what to do


// That works, but I'm frankly not very happy with how I did it
// Okay, so it looks like this is exactly how he demonstrates the solution, lol...

// Stopped @ 1:30:06