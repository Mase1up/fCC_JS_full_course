// 1.
// Create two vars, firstName & lastName
// concatenate the two into third, fullName
// log to console

let firstName = "Ethanius"
let lastName = "of Ethanton"
let fullName = firstName + " " + lastName

console.log(fullName);


// 2.

let name = 'Linda';
let greeting = 'Hi there';

// Create a func that logs out "Hi there, Linda!" when called

function hiLinda() {
  let fullGreeting = greeting + ", " + name + "!";
  console.log(fullGreeting);
}

hiLinda()


// 3.
let myPoints = 3;

// Create two funcs, add3Points() and remove1Point(), and have them
// add or remove points to/from myPoints var.
function add3Points() {
  myPoints += 3;
}

function remove1Point() {
  myPoints -= 1;
}

remove1Point();
remove1Point();
add3Points();
add3Points();
add3Points();



// Call the functions so the line below logs out 10
console.log(myPoints);



// 4.
// Predict result of adding strings and/or numbers
22
18
65
"My points: 59"
4
1114  // These were all correct



// 5.
// When user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragrach
// that has the id="error"
{/* <button onclick="error()"></button> */}
{/* <p id="error"> */}

let errorEl = document.getElementById("error")

function error() {
  errorEl.textContent = "Something went wrong, please try again";
}



// 6. Calculator Challenge

let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

//Create four funcs add(), subtract(), divide(), multiply()
// Call correct func when user clicks on one of the buttons
// Perfrom given calc using num1 and num2
// Render result of calc in <p> with id="sum-el"

// E.g. if user clicks on "Plus" button, should render
// "Sum: 10" (since 8 + 2 = 10) inside the <p> with id="sum-el"

{/* <button id="add-btn" onclick="add()"></button> */}
{/* <button id="subtract-btn" onclick="subtract()"></button> */}
{/* <button id="multiply-btn" onclick="multiply()"></button> */}
{/* <button id="divide-btn" onclick="divide()"></button> */}
{/* <p id="sum-el">Sum: </p> */}

