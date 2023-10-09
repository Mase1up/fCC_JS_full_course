let myLeads = ["www.ultimate-sven.com", "www.mason-keith.com", "www.vanessa-keith.com"];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector('#input-btn');
const ulEl = document.querySelector('#ul-el');

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    console.log(myLeads);
})

// 1. Create a variable, listItems, to hold all the HTML for the list items
// Assign it an empty string to begin with
let listItems = "";

for (let i = 0; i < myLeads.length; i++) {
    // 2. Add the item to the listItems variable instead of the ulEl.innerHTML
    listItems += "<li>" + myLeads[i] + "</li>";

}
// 3. Render the listItems inside the unordered list using ulEL.innerHTML
ulEl.innerHTML = listItems;