// Code for the blackjack work
// FYI, online casino market size is $20 BILLION annually..... so there's money there

// 1. Create two vars, firstCard and secondCard.
// Set their values to a random number between 2-11

// 2. Create a var, sum, and set it to the sum of the two cards.

let randomCard = Math.floor(Math.random() * ((11-2)+1)+2); 
// I had to look up how to generate a random integer between two inclusive values
// That gave me: Math.floor(Math.random() * ((max-min)+1) + min )
// The above code should give a random integer 2-11 inclusive to randomCard
// Not sure if I'll have to make it a functin and invoke it, I feel like this may give a
// random card that then is repeated ad infinitum.

function dealCard() {
    return card = Math.floor(Math.random() * ((11-2)+1)+2); 
}

dealCard();
let firstCard = card;
    console.log(firstCard)
dealCard();
let secondCard = card;
    console.log(secondCard)

let sum = firstCard + secondCard;
    console.log(sum)

// There we go!  I feel like I was supposed to find another way, because
// at this stage we were not introduced to return...
// but it works, and that makes me happy!

