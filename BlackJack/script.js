/* 
    BlackJack tutorial
    Marcus Kerr
*/

//suit array
let suits = ['Spades', 'Diamonds', 'Hearts', 'Clubs'];

//card values array 
let values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']; 

//deck of cards array
let deck = [];

//for loop to create deck of cards
for(suitIdx = 0; suitIdx<suits.length; suitIdx++){

    //Nested for loop to loop through values
    for(valuesIdx = 0; valuesIdx<values.length; valuesIdx++){
         
        //add cards to deck array
        deck.push(values[valuesIdx] + " of " + suits[suitIdx]);
    }
}

//for loop to check that deck was created
for(i=0; i<deck.length; i++){
    console.log(deck[i]);
}

//players can have two or more cards so best to use an array 
let playerCards = [deck[0], deck[2]];
 

//print cards to console
console.log("Game start,\nYou were dealt:\n\t\t\t" + playerCards[0] + "\n\t\t\t" + playerCards[1]);
