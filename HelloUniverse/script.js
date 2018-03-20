console.log('Hello Universe!');

let myName = "Marcus",
    middleInitial = "A",
    lastInitial = "K";

console.log(myName, middleInitial, lastInitial);
console.log(myName + " " + middleInitial);

    let price = 2,
    price2 = 4.67,
    price3 = "5";

console.log(price, price2, price + price2, price + price3);


let first = 50,
    second = 20;

let answer = first + second;

console.log(answer);

// Single line comments

/* 
    Multi
    line
    Comments  */


//Data types

//strings
let myFirstName = "Marcus";
console.log(myFirstName, typeof(myFirstName));

//numbers
let myAge = 24;
console.log(myAge, typeof(myAge));

//Booleans
let yes = true;
let no = false;
console.log(yes, typeof(yes));
console.log(no, typeof(no));

//undeffined
let future;
console.log(future, typeof(future));

//null
let failure = null;
console.log(failure, typeof(failure));

//array
let myNameArray = ["Marcus", "Anthony", "Kerr"];

//looking up array values 
console.log(myNameArray[0]);
console.log(myNameArray[1]);
console.log(myNameArray[2]);
console.log(myNameArray[3]);

//aray type
console.log(myNameArray, typeof(myNameArray));

//Array features
let numbersArray = [1,2,3,4,5];

console.log(numbersArray);

//length of the array
console.log(numbersArray.length);

//add numbers to the array
numbersArray.push(7);
console.log(numbersArray);

//remove vales from end of the array
let removedLast = numbersArray.pop();
console.log(removedLast + " was removed form the end of the array");
console.log(numbersArray);


//removes first value in array
let removedFirst = numbersArray.shift();
console.log(removedFirst + " was removed from the start of the array");
console.log(numbersArray);

//removes multiple values from array, betwene start point and end point, pushes numbers
let numbersToAdd = [12,13,14]
let removedList = numbersArray.splice(1,4,numbersToAdd[0], numbersToAdd[1], numbersToAdd[2]);
console.log(removedList + " were removed from the array");
console.log(numbersToAdd + " were added to the array");
console.log(numbersArray);


//if statememnts
let score = 1000;

if (score >  1000){
    score += 101;
    console.log("The score is " +score);
}
else if (score === 1000){
    console.log("Almost bonus"); 
}
else{
    console.log("No Bonus");
}

//switch case statement
 let city = "Ldn";

 switch(city){
     case "Lei":
        console.log("Leicester");
        break;
    case "Liv":
        console.log("Liverpool");
        break; 
     case "Ldn":
        console.log("London");
        break;
     default:
        console.log("City Unknown");
        break;
 }

 //for loop
 /*
    after for keyword within the parentheses:
    1. control variable initialisation and counter
    2. condition
    3. control manipulation 
*/
 for (let i=0; i<=5; i++){
     console.log("i is equal to " + i);
 }

 //while loop
 // initialise variable
 let count = 1;

 while (count<=3){
     console.log(count);
     count ++;
 }


 //functions

 //declare function
 function myFirstFunction (){
     console.log("This is my first function");
 }

 //call function
 myFirstFunction ();

 //function with single arg(ument
 function unoArgument (uno){
    console.log(uno);
 }

 unoArgument('A single argument');

//funtion with multiple arguments
function tresArguments (uno, dos, tres){
    console.log(uno,dos,tres);
}

tresArguments('one','two','three');

//function return
function favNumber(number){
    let newNumber = number + 1000;
    return newNumber; 
}

result = favNumber(619);
console.log(result);


//Objects

//creating first onject
let person = {
    name: "Waka Flocka",
    age: 31,
    genre: "Rap"
};

//dot notation to access property
console.log(person.name, person.age);

//array containing multiple objects
let people  = [
    {
        name: "Gucci Mane",
        age: 38
        
    },
    {
        name: "Kung Fu Kenny",
        age: 30
    }
];

//To access a propert of an object in an array combine subscripting with dot notation
console.log(people[0].name);


//Math object 
//calling random function from math object 
let randResult = Math.random() * 500;

//remove all values after decimal point
randResult = Math.trunc(randResult);

console.log(randResult); 

//Date objeect
//create a new date object
let newDay = new Date();

console.log(newDay);

//newdatestring function from date object
let simpleNewDay = new Date().toDateString();

console.log(simpleNewDay);

//String objects
//strings are objects and have many methods
let stringyString = "yes no";
stringyString = stringyString.toLocaleUpperCase();
console.log(stringyString);



//Manipulating data on webpages 
//select element via id
let paragraph = document.getElementById('text');
paragraph.innerText = 'Woop woop!';

//button click event
button = document.getElementById('button');

/*  add event listener funtion takes two arguments
    First, event we are listening for
    Second, function to call when event fires
*/

button.addEventListener('click', function (){
    paragraph.innerText = "Button Clicked";

    // make button diossappear when clicked
    button.style.display = 'none';
    
})