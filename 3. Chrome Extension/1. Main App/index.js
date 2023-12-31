let myLeads = [];
let oldLeads = [];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector('#input-btn');
const ulEl = document.querySelector('#ul-el');
const deleteBtn = document.querySelector('#delete-btn');

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

// 1. Check if leadsFromLocalStorage is truthy
// 2. If so, set myLeads to its value and call renderLeads()

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        // Going to use a template string
        // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>";
        listItems +=
        `
            <li>
                <a target="_blank" href="https://${leads[i]}">
                ${leads[i]}
                </a>
            </li>
        `;
    }
    ulEl.innerHTML = listItems;
}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    // Save the myLeads array to loacalStorage
    // P.S. remember JSON.stringify()
                                                                //myLeads = JSON.stringify(myLeads);        // This works, but it was accomplished inline
    localStorage.setItem("myLeads", JSON.stringify(myLeads));   //localStorage.setItem("myLeads", myLeads); // as shown to the left.
                                                                //myLeads = JSON.parse(myLeads);            //
    render(myLeads);

    // To verify that it works:
    console.log( localStorage.getItem("myLeads"));
})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})


