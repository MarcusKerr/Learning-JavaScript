//Get display area, this is each button press will be displayed
let displayArea = document.getElementById("displayArea");

//Get all buttons from the calculator
let button = document.getElementsByTagName("button");

//Store operators in array
let operators = document.getElementsByClassName("operator");

/*  Number user is currently entering
    complete expession array
*/
let currentNumber = [],
    expression = [];

let currentOperator = "",
    storedResult = "";

//Initialise display area
displayArea.innerHTML = 0;

//when button clicked, show its value in display
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function () {
        switch (this.className || this.id) {
            case "digit":
                inputNumber(this);
                break;
            case "decimal":
                /*   If decimal first button pressed
                     leading zero
                */
                let deciAlready;
                if (currentNumber.length == 0) {
                    currentNumber += 0;
                    deciAlready = true;
                    inputNumber(this);
                }
                /*  Check if decimal already added
                    add decimal only if not aready present
                */
                else {
                    if (currentNumber.indexOf(".") > 0) {
                        break;
                    } else {
                        inputNumber(this);
                    }
                }
                break;
            case "operator":
                /*  Set current operator
                    Add all to expression 
                */
                currentOperator = this.innerHTML;
                addToExpression(currentOperator);
                break;
            case "equals":
                evaluate(expression);
                break;
        }
    });
}

/*  Function to handle number the user is currently inserting
    add entered numbers to current number array    
    show entered numbers in display area
*/
function inputNumber(digitButton) {
    currentNumber += digitButton.innerHTML;
    displayArea.innerHTML = currentNumber;
}

/*  Add current number to expression
    Add operand to expression 
*/
function addToExpression(operatorButton) {
    //If expression and current number are empty add a leading zero
    if (expression.length == 0 && currentNumber.length == 0) {
        expression.push("0");
        expression.push(operatorButton);
    }
    //If nothing current number empty check if previously entered is a operator
    else if (currentNumber.length == 0) {
        /*  Check if the last element added to expression is an operator
        compare last elelemnt in expression against all operators
        */
        let lastIsOp = false;
        for (i = 0; i < operators.length; i++) {
            if (expression[expression.length - 1] == operators[i].innerHTML) {
                lastIsOp = true;
                break;
            }
        }
        /*  If the last enelemnt in the expression is an operator
            replace it with current operator
        */
        if (lastIsOp == true) {
            expression[expression.length - 1] = operatorButton;
        } else {
            expression.push(operatorButton);
        }
    }
    /*  If current number is not empty
        add current number to expression 
        followed by expression
    */
    else {
        expression.push(currentNumber);
        expression.push(operatorButton);
    }
    //clear
    currentNumber = [];
    currentOperator = "";
    console.log(expression);
}

function lastIsOp() {
    let lastIsOp = false;
    for (i = 0; i < operators.length; i++) {
        if (expression[expression.length - 1] == operators[i].innerHTML) {
            lastIsOp = true;
            break;
        }
    }
    return lastIsOp;
}

//calculate
function evaluate(expression) {

    if (expression.length == 0 && currentNumber.length == 0) {
        storedResult = "0";
    } else if (expression.length == 0 && currentNumber.length != 0) {
        storedResult = currentNumber;
        expression.push(storedResult);
        currentNumber = [];
    } else if (expression.length == 1) {
        expression[0] = currentNumber;
        currentNumber = [];

        // if (lastIsOp() == true) {
        //     expression.pop();
        // }
    }

    // else if (expression.length == 0 && currentNumber != []){
    //     expession.push(currentNumber);
    //     currentNumber = [];
    // }


    // if last button pressed before equals was operaqnd remove from expression
    // if (lastIsOp() == true){
    //     expression.pop();
    // }
    // else {
    //     if (currentNumber.length !=0 ){
    //         if (expession.length == 0){
    //             expession.push(currentNumber);
    //             currentNumber = [];
    //         }
    //         else{
    //             expession[expession.length-1] = currentNumber;
    //             currentNumber = [];
    //         } 
    //     }
    // }

    console.log(storedResult);

    //calculate result

}

// Clear
function clear() {}