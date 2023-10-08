let myLeads = [];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector('#input-btn');

// Push the value from the input element into myLeads array
// Google -> how to get value from input field

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    console.log(myLeads);
})
