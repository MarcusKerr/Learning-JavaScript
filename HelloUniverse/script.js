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