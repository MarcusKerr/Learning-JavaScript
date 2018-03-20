/* 
    BlackJack tutorial
    Marcus Kerr
*/

//suit array
let suits = ['Spades', 'Diamonds', 'Hearts', 'Clubs'];

//card values array 
let values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

//elements from the webpage
let textArea = document.getElementById('text-area');
let newGameButton = document.getElementById('new-game-button');
let hitButton  = document.getElementById('hit-button');
let stayButton = document.getElementById('stay-button');

//at the start of the game hit and stay button hidden
hitButton.style.display = 'none';
stayButton.style.display = 'none';

//ewvent handler for new game button
newGameButton.addEventListener('click',function(){
    textArea.innerText = 'Game Begin...'
    newGameButton.style.display = 'none';
    hitButton.style.display = 'inline';
    stayButton.style.display = 'inline';
}); 

//function to create deck of cards
function createDeck () {

    //clear deck
     let deck = []; 

    //for loop to create deck of cards
    //loop through each suit
    for(suitsIdx = 0; suitsIdx<suits.length; suitsIdx++){

        //For each suit, loop through each value
        for(valuesIdx = 0; valuesIdx<values.length; valuesIdx++){

            // create card ob ject
            let card =  { 
                suit: suits[suitsIdx],
                value: values[valuesIdx]

            };
            
            //puch card object to deck array  
            deck.push(card);
        }
    }
    return deck;
}

//function to print out card 
function getCardString(card){
    return card.value + " of " + card.suit;
}
//function to get card from top of the deck
function getNextCard(){
    return deck.shift();
}


//Call deck function to create deck of cards 
let deck = createDeck();

//players can have two or more cards so best to use an array 
let playerCards = [getNextCard(), getNextCard()];
 
//print cards to console
console.log("Game start,\nYou were dealt:\n\t\t\t" + getCardString(playerCards[0]) + "\n\t\t\t" + getCardString(playerCards[1]));
