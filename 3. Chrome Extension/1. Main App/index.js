let myLeads = [];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector('#input-btn');
const ulEl = document.querySelector('#ul-el');

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    console.log(myLeads);
    //2. Call the renderLeads() function
    renderLeads();
})

// 1. Wrap the code below in a func renderLeads()
function renderLeads() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        listItems += "<li>" + myLeads[i] + "</li>";
    }
    ulEl.innerHTML = listItems;
}