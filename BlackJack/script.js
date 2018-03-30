/* 
    BlackJack tutorial
    Marcus Kerr
*/


//Card Variables
//suits and value arrays
let suits = ['Spades', 'Diamonds', 'Hearts', 'Clubs'],
    values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

//DOM variables
let textArea = document.getElementById('text-area'),
    newGameButton = document.getElementById('new-game-button'),
    hitButton  = document.getElementById('hit-button'),
    stayButton = document.getElementById('stay-button');

//Game Variables
let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [];


//at the start of the game hit and stay button hidden
hitButton.style.display = 'none';
stayButton.style.display = 'none';
showStatus();

//event handler for new game button
newGameButton.addEventListener('click',function(){
   gameStarted = true;
   gameOver = false;
   playerWon = false;

   deck = createDeck();
   shuffleDeck(deck);
   dealerCards = [getNextCard(), getNextCard()];
   playerCards = [getNextCard(), getNextCard()];

   newGameButton.style.display='none';
   hitButton.style.display='inline';
   stayButton.style.display='inline';
   showStatus();
}); 

//function to create deck of cards
function createDeck () {

    //clear deck
     let deck = []; 

    //for loop to create deck of cards
    //loop through each suit
    for(let suitsIdx = 0; suitsIdx < suits.length; suitsIdx++){

        //For each suit, loop through each value
        for(let valuesIdx = 0; valuesIdx < values.length; valuesIdx++){

            // create card object
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


//function to shuffle the deck
function shuffleDeck(deck){
    for (let i = 0; i < deck.length; i++){
        let swapIdx = Math.trunc(Math.random() * deck.length);
        let tmp = deck[swapIdx];
        deck[swapIdx] = deck[i]; 
        deck[i] =  tmp;
    }
}

//function to print out card 
function getCardString(card){
    return card.value + " of " + card.suit;
}

//cards numberic values
function getCardNumericValue(card){
    switch (card.value){
        case 'Ace':
            return 1;
        case 'Two':
            return 2;
        case 'Three':
            return 3;
        case 'Four':
            return 4;
        case 'Five':
            return 5;
        case 'Six':
            return 6;
        case 'Seven':
            return 7;
        case 'Eight':
            return 8;
        case 'Nine':
            return 9;
        default:
            return 10;
    }
}

//calculate score
function getScore(cardArray){
    let score = 0;
    let hasAce = false;
    for (let i = 0; i < cardArray.length; i++){
        let card = cardArray[i];
        score += getCardNumericValue(card);
        if (card.value === 'Ace' ){
            hasAce = true;
        }
    }
    if (hasAce && score + 10 <= 21){
        return score + 10;
    }
    return score; 
}

//update scores 
function updateScores(){
    dealerScore = getScore(dealerCards);
    playerScore = getScore(playerCards); 
}

function showStatus(){
    if (!gameStarted){
        textArea.innerText = "Blackjack X";
        return;
    }

    let dealerCardString = '';
    for (let i=0; i < dealerCards.length; i++){
            dealerCardString += getCardString(dealerCards[i]) + '\n';
        }

    let playerCardString = '';
    for (let i=0; i<playerCards.length; i++){
        playerCardString += getCardString(playerCards[i]) + '\n';
    }

    updateScores();

    textArea.innerText = 
    'Dealer has:\n' +
    dealerCardString +
    '(score: '+ dealerScore +')\n\n' +

    'Player has:\n' +
    playerCardString +
    '(score: '+ playerScore +')\n\n';

    //Check of the gmae is over
    if (gameOver){
        if (playerWon){
            textArea.innerText += 'YOU WIN!';
        }
        else{
            textArea.innerText += 'DEALER WINS';
        }
        newGameButton.style.display = 'inline';
        hitButton.style.display = 'none';
        stayButton.style.display = 'none';
    }
}

//function to get card from top of the deck
function getNextCard(){
    return deck.shift();
}




//Call deck function to create deck of cards 
deck = createDeck();

//players can have two or more cards so best to use an array 
 playerCards = [getNextCard(), getNextCard()];
 
//print cards to console
console.log("Game start,\nYou were dealt:\n\t\t\t" + getCardString(playerCards[0]) + "\n\t\t\t" + getCardString(playerCards[1]));
