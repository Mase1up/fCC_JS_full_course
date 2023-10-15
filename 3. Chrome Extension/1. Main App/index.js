let myLeads = [];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector('#input-btn');
const ulEl = document.querySelector('#ul-el');

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    renderLeads();
})

function renderLeads() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        // Make the <li> a link to the site and open in a new tab
        // <li><a href="https://www.mason-keith.com" target="_blank">www.mason-keith.com</a></li>
        listItems += "<li>" + myLeads[i] + "</li>";
    }
    ulEl.innerHTML = listItems;
}
