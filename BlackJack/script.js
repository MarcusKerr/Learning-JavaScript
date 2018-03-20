/* 
    BlackJack tutorial
    Marcus Kerr
*/

//suit array
let suits = ['Spades', 'Diamonds', 'Hearts', 'Clubs'];

//card values array 
let values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']; 

//function to create deck of cards
function createDeck () {

    //clear deck
     let deck = []; 

    //for loop to create deck of cards
    //loop through each suit
    for(suitIdx = 0; suitIdx<suits.length; suitIdx++){

        //For each suit, loop through each value
        for(valuesIdx = 0; valuesIdx<values.length; valuesIdx++){
            
            //add card (combination of suit and value) to deck array
            deck.push(values[valuesIdx] + " of " + suits[suitIdx]);
        }
    }
    return deck;
}

//function to get card from top of the deck
function getNextCard(){
    return deck.shift();
}


//Call deck function to create deck of cards 
let deck = createDeck();

//for loop to check that deck was created
// for(i=0; i<deck.length; i++){
//     console.log(deck[i]);
// }

//players can have two or more cards so best to use an array 
let playerCards = [getNextCard(), getNextCard()];
 

//print cards to console
console.log("Game start,\nYou were dealt:\n\t\t\t" + playerCards[0] + "\n\t\t\t" + playerCards[1]);
