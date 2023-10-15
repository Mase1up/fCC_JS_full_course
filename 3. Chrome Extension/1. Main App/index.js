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
    // So his version, you can omit setting the listItems variable altogether;
    // function renderLeads() {
    //     for( let i = 0; i < myLeads.length; i++) {
    //         ulEl.innerHTML += "<li>" + myLeads[i] = "</li>";
    //     }
    // }


    // Alternatively, you can use a second method completely
    //
    //      for (let i = 0; i < myLeads.length; i++) {
    //          const li = document.createElement("li");
    //          li.textContent = myLeads[i];
    //          ulEl.append(li);
    //}


// You have to be kidding me.... After ALLLLL that, he wants us to do the code EXACTLY
// as I originally did it, creating a listItems variable, adding each <li> to it, then after the
// loop, set ulEl = listItems;

