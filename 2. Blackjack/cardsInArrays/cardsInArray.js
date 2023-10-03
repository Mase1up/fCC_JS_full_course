// Going to copy the code he's using so I can work his stuff here and not mess up my code

// let firstCard = 10;
// let secondCard = 4;
// // Create new array cards that contains these first two cards
// const cards = [firstCard, secondCard];
// let sum = firstCard + secondCard;
// let hasBlackjack = false;
// let isAlive = true;
// let message = "";
// let messageEl = document.querySelector("#message-el");
// let sumEL = document.querySelector("#sum-el");
// let cardsEl = document.querySelector("#cards-el");

// function startGame() {
//     renderGame()
// }

// function renderGame() {
//     // 2. Refer to the new array when rendering out the cards
//     cardsEl.textContent = "Cards: " + cards;
//     sumEL.textContent = "Sum: " + sum;
//     if (sum <= 20) {
//         message = "Do you want to draw a new card?"
//     } else if (summ === 21) {
//         message = "You've got Blackjack!"
//     } else {
//         message = "Sorry, you've busted!"
//     }
//     messageEl.textContent = message;
// }

// Original code
// Let's try to make this work with an array before just starting all over. I honestly feel
// completely lost trying to go in and undo the methods I used.  I'm not doing it at this time.
// Uncomment everything below to work on it



// function dealHitCard() {
//     dealCard();
//     return hitCard = card;
// }

let firstCard = Math.floor(Math.random() * ((11-2)+1)+2); // Set firstCard to random num between 2-11
let secondCard = Math.floor(Math.random() * ((11-2)+1)+2); // Same for secondCard
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let messageEl = document.querySelector("#message-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
//So he is using an array to store all the cards, then he'll set cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
let cards = [firstCard, secondCard]

function startGame() {
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    // Create a for loop that renders all cards instead of just two
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to hit?";
    } else if (sum === 21) {
        message = "Blackjack!  Congratulations!";
        hasBlackjack === true;
    } else {
        message = "You busted, sorry.";
        isAlive === false;
    }
    messageEl.textContent = message;
}

function playerHit() {
    if (isAlive === true && hasBlackjack === false) {
    hitCard = Math.floor(Math.random() * ((11-2)+1)+2); // Set firstCard to random num between 2-11
    cards.push(hitCard);
    cardsEl.textContent = "Cards: " + cards;
    sum += hitCard;
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to hit?";
    } else if (sum === 21) {
        message = "Blackjack!  Congratulations!";
        hasBlackjack === true;
    } else {
        message = "You busted, sorry.";
        isAlive === false;
    }
    messageEl.textContent = message;
} else {
    message = "Would you like to start a new game?";
    messageEl.textContent = message;
}
}




// function startGame() {

//     isAlive = true;
//     hasBlackjack = false;

//     dealFirstCard();
//     dealSecondCard();
//     handTotal();

//     if (sum <= 20) {
//         message = "Do you want to Hit?";
//     } else if (sum === 21) {
//         message = "Blackjack!  Congratulations!";
//         hasBlackjack = true;
//     } else {
//         message = "You busted, sorry!";
//         isAlive = false;
//     }
//     cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
//     sumEl.textContent = "Sum: " + sum;
//     messageEl.textContent = message;
// }

// function playerHit() {
//     // Let's add the logic now.  1. Call dealCard 2. Add card value to sum 3.Evaluate for Blackjack, Bust, or Ask if they want to Hit again
//     // I'll need to expand this later, I think I can probably use a loop for i hits, or wait.... Just a function!
//     // on playerHit() can just invoke the function again to keep += the total until it busts or hits 21 I think...

//     // Adding if logic so that player cannot hit once busted or makes Blackjack
//     if (isAlive === true && hasBlackjack === false) {
//         dealHitCard();
//         sum += hitCard;

//          if (sum <= 20) {
//         message = "Do you want to Hit?";
//         } else if (sum === 21) {
//             message = "Blackjack!  Congratulations!";
//             hasBlackjack = true;
//         } else {
//             message = "You busted, sorry!";
//             isAlive = false;
//         }
//         cardsEl.textContent = cardsEl.textContent + " " + hitCard;
//         sumEl.textContent = "Sum: " + sum;
//         messageEl.textContent = message;
//     }
// }
