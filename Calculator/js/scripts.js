//press seven display seven

//Get display area, this is each button press will be displayed
let displayArea = document.getElementById("displayArea");

//Get the numbers and operators from the calculator
let button = document.getElementsByTagName("button");

let operators = document.getElementsByClassName("operator");

/*  Number user is currently entering
    complete expession array
*/
let currentNumber = [],
    expression = [];

let currentOperator = "";

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

    //If expression is empty add a leading zero
    if(expression.length == 0){
        expression.push(0);
    }
    //If nothing in the current number array check if previously entered is a operator
    if (currentNumber.length == 0) {
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
    } else {
        expression.push(currentNumber);
        expression.push(operatorButton);
    }


    //clear
    currentNumber = [];
    currentOperator = "";
    console.log(expression);
}

// Clear
function clear() {}