let myLeads = ["www.ultimate-sven.com", "www.mason-keith.com", "www.vanessa-keith.com"];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector('#input-btn');

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    console.log(myLeads);
})


// Log out the items in the myLead array using a for loop (hard-coded leads for now)

for (let i = 0; i < myLeads.length; i++) {
    console.log(myLeads[i]);
}

