let myLeads = [];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector('#input-btn');
const ulEl = document.querySelector('#ul-el');

localStorage.setItem("myLeads", "www.example-lead.com");

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    renderLeads();
})

function renderLeads() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        // Going to use a template string
        // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>";
        listItems +=
        `
            <li>
                <a target="_blank" href="https://${myLeads[i]}">
                ${myLeads[i]}
                </a>
            </li>
        `;
    }
    ulEl.innerHTML = listItems;
}
