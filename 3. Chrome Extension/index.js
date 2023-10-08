// Log out "Button clicked!" when the user clicks SAVE INPUT button

function saveInput() {
    console.log("Button clicked from onclick attribute");
}

let inputBtn = document.querySelector('#input-btn');

inputBtn.addEventListener("click", function() {
    console.log("Button clicked from addEventListener!");
})

