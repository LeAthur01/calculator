function operate(operand1, operand2, operator) {
    let result = operator(operand1, operand2);
    console.log(`Result of ${operand1} + ${operand2}: ${result}`);
    num1 = result;
    num2 = 0;
    return result;
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

function pressButton(keyBtn) {
    let displayText = btn1.textContent;
    calculatorDisplay.textContent = displayText;
    
    if (num1 === undefined) {
        num1 = Number(displayText);
        console.log(typeof num1);
    } else {
        num2 = Number(displayText);
        console.log(typeof num2);
    }
}

let operator;
let num1, num2;
const calculatorDisplay = document.querySelector('#calculator-display');

const numberBtns = document.querySelectorAll('.number');
numberBtns.forEach(numberBtn => {
    numberBtn.addEventListener('click', () => {
        let displayNumber = numberBtn.textContent;
        calculatorDisplay.textContent = displayNumber;

        if (num1 === undefined) {
            num1 = Number(displayNumber);
        } else {
            num2 = Number(displayNumber);
        }
    });
});

const operatorBtns = document.querySelectorAll('.operator');
operatorBtns.forEach(operatorBtn => {
    operatorBtn.addEventListener('click', event => {
        let displayText = operatorBtn.textContent;
        if (displayText === '=') {
            return;
        }
        operator = evaluateOperator(displayText);

        if (num2 !== undefined) {
            let result = operate(num1, num2, operator);
            calculatorDisplay.textContent = result;
        }
    });
});


const equalBtn = document.querySelector('#equal');
equalBtn.addEventListener('click', () => {
    let result = operate(num1, num2, operator);
    calculatorDisplay.textContent = result;
})

