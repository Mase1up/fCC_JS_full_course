let myLeads = ["www.ultimate-sven.com", "www.mason-keith.com", "www.vanessa-keith.com"];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector('#input-btn');
const ulEl = document.querySelector('#ul-el');

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    console.log(myLeads);
})

// Let's try a different method!
for (let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
    // create element
    // set text content
    // append to ul
// const li = document.createElement("li");
// li.textContent = myLeads[i];
// ulEl.append(li);                     Okay, that worked, but we're going back to the original method
}
