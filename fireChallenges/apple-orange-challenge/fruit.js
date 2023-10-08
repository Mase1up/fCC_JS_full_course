let fruit = ['🍎', '🍊', '🍎', '🍎', '🍊'];
let appleShelf = document.getElementById('apple-shelf');
let orangeShelf = document.getElementById('orange-shelf');

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf.
// going to iterate through, and if apple -> appleShelf, if orange -> orangeShelf

// Forgot it was supposed to be a function
function sortFruit(){
for (let i = 0; i < fruit.length; i++) {
    if (fruit[i] === '🍎') {
        appleShelf.textContent += '🍎';
    } else if (fruit[i] === '🍊') {
        orangeShelf.textContent += '🍊';
    } else {
        console.log("This was not an apple or orange")
    }
}
}
