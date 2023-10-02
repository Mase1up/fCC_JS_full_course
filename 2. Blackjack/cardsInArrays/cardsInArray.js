// Going to copy the code he's using so I can work his stuff here and not mess up my code

let firstCard = 10;
let secondCard = 4;
// Create new array cards that contains these first two cards
const cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let messageEl = document.querySelector("#message-el");
let sumEL = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

function startGame() {
    renderGame()
}

function renderGame() {
    // 2. Refer to the new array when rendering out the cards
    cardsEl.textContent = "Cards: " + cards;
    sumEL.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (summ === 21) {
        message = "You've got Blackjack!"
    } else {
        message = "Sorry, you've busted!"
    }
    messageEl.textContent = message;
}