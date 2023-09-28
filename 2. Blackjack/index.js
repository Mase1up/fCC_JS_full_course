// Code for the blackjack work
// FYI, online casino market size is $20 BILLION annually..... so there's money there

// 1. Create two vars, firstCard and secondCard.
// Set their values to a random number between 2-11

// 2. Create a var, sum, and set it to the sum of the two cards.

// let randomCard = Math.floor(Math.random() * ((11-2)+1)+2); 
// I had to look up how to generate a random integer between two inclusive values
// That gave me: Math.floor(Math.random() * ((max-min)+1) + min )
// The above code should give a random integer 2-11 inclusive to randomCard
// Not sure if I'll have to make it a functin and invoke it, I feel like this may give a
// random card that then is repeated ad infinitum.

function dealCard() {
    return card = Math.floor(Math.random() * ((11-2)+1)+2); 
}

function dealHand() {
dealCard();
let firstCard = card;
    // console.log(firstCard)
dealCard();
let secondCard = card;
    // console.log(secondCard)
return sum = firstCard + secondCard;
    // console.log(sum)
}

function dealFirstCard() {
    dealCard();
    return firstCard = card;
}

function dealSecondCard() {
    dealCard();
    return secondCard = card;
}

function handTotal() {
    return sum = firstCard + secondCard;
}

let hasBlackjack = false;
let isAlive = true;
let message = "";
let messageEl = document.querySelector("#message-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

// There we go!  I feel like I was supposed to find another way, because
// at this stage we were not introduced to return...
// but it works, and that makes me happy!

// Omg, he meant just assign a value of MY CHOOSING between 2 - 11....LOL!
// he went with:
// let firstCard = 6;
// let secondCard = 9;
// let sum = firstCard + secondCard;

// 2. Create a startGame() func. Move the conditional below
// line (44 - 55) inside the body of the function

function startGame() {

    dealFirstCard();
    dealSecondCard();
    handTotal();

    if (sum <= 20) {
        message = "Do you want to Hit?";
    } else if (sum === 21) {
        message = "Blackjack!  Congratulations!";
        hasBlackjack = true;
    } else {
        message = "You busted, sorry!";
        isAlive = false;
    }
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
    sumEl.textContent = "Sum: " + sum;
    messageEl.textContent = message;
}

// The issue I'm having is the random cards are set at page load
// I think I need to move my random card generation INSIDE the 
// function so that every button push generates new cards.
// 
// What I tried, is moving the entire dealCard process INTO its 
// own function dealHand()...wait, can I simply invoke the function
// INSIDE startGame()?  Try that first, I like that way better.

// That's giving me an error that sum is not defined, so I'm 
// taking that to mean I CANNOT invoke the function dealHand()
// inside startGame(), however I really think it just means I'm 
// not doing it the right way, and I'll learn later how to call
// a function inside another one.

// First thing I realized I need to return the value of sum, so
// changed let to return.  Probably change firstCard seconCard also.

// SUCCESS!!!!!

// When I tried to return all 3, I get "sum not defined", I think
// at the first return, the function stops and only returns a single value.
// In that case function for the first card,
// function for the second card,
// function for the sum

// function dealFirstCard(), function dealSecondCard(), 
// function handValue()

// This should let me simply call the functions when the Start Game
// button is clicked.  At this point should I simply be hard-coding?
// I'd rather use funcs for now, and sense that's the correct path anyway,
// so for now I'm sticking to using functions.

// Stopped @ 2:11:26

