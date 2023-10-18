function operate(operand1, operand2, stringOperator) {
    let operator = evaluateOperator(stringOperator);
    let result = operator(operand1, operand2);
    console.log(`Result of ${operand1} ${stringOperator} ${operand2}: ${result}`);
    return result
} 

function add(num1, num2) {
    return num1 + num2;
}

function substract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function evaluateOperator(operator) {
    if (operator === "+") {
        return add;
    } else if (operator === "-") {
        return substract;
    } else if (operator === "*") {
        return multiply
    } else if (operator === "/") {
        return divide;
    }
}

function startCalculating() {
    console.log('You start the calculator anew');
    num1 = Number(prompt("Enter your left operand"));
    operator = prompt("Enter your operator");
    num2 = Number(prompt("Enter your right operand"));

    num1 = operate(num1, num2, operator);
}

function continueCalculating() {
    console.log(`You continue calculating with the last result: ${num1}`);
    operator = prompt("Enter your operator");
    num2 = Number(prompt("Enter your right operand"));

    num1 = operate(num1, num2, operator);   
}

let operator
let num1, num2;
const startBtn = document.querySelector('#start-button');
startBtn.onclick = startCalculating;
const continueBtn = document.querySelector('#continue-button');
continueBtn.onclick = continueCalculating;
