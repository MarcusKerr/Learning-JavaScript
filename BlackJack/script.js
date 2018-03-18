/* 
    BlackJack tutorial
    Marcus Kerr
*/

//cards array
let deck = ["Ace of Spades",
            "Two of Spades",
            "Three of Spades"
    ];

//players can have two or more cards so best to use an array 
let playerCards = [deck[0], deck[2]];
 

//print cards to console
console.log("Game start,\nYou were dealt:\n\t\t\t" + playerCards[0] + "\n\t\t\t" + playerCards[1]);
