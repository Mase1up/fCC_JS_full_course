let fruit = ['apple', 'orange', 'apple', 'apple', 'orange'];
let appleShelf = document.getElementById('apple-shelf');
let orangeShelf = document.getElementById('orange-shelf');

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf.
// going to iterate through, and if apple -> appleShelf, if orange -> orangeShelf

for (let i = 0; i < fruit.length; i++) {
    if (fruit[i] === 'apple') {
        appleShelf.textContent += 'apple';
    } else if (fruit[i] === 'orange') {
        orangeShelf += 'orange';
    } else {
        console.log("This was not an apple or orange")
    }
};
