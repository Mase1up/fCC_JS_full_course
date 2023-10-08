let myLeads = [];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector('#input-btn');

// Push the value "www.awesomelead.com" to myArray when input button is clicked

inputBtn.addEventListener("click", function() {
    myLeads.push("www.awesomelead.com");
    console.log(myLeads);
})
