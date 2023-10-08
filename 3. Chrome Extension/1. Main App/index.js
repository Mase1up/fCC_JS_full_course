let myLeads = ["www.ultimate-sven.com", "www.mason-keith.com", "www.vanessa-keith.com"];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector('#input-btn');
// 2. Grab the unordered list and store it in a const called ulEl
const ulEl = document.querySelector('#ul-el');

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    console.log(myLeads);
})


for (let i = 0; i < myLeads.length; i++) {
    console.log(myLeads[i]);
}

