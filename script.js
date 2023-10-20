function operate(operand1, operand2, operatorFunct) {
    let result = operatorFunct(Number(operand1),  Number(operand2));
    console.log(`Result of ${operand1} ${stringOperator} ${operand2}: ${result}`);
    if (isNaN(result)) {
        resetCalculator();
        return 'Try again'
    }
    num1 = result;
    num2 = '';
    operator = undefined;
    anew = true;
    return result;
} 

function resetCalculator() {
    num1 = '';
    num2 = '';
    operator = undefined;
    anew = true;
    calculatorDisplay.textContent = ':)';
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
        return multiply;
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

let anew = true;
let stringOperator;
let operator;
let num1 = '';
let num2 = '';
const calculatorDisplay = document.querySelector('#calculator-display');

const numberBtns = document.querySelectorAll('.number');
numberBtns.forEach(numberBtn => {
    numberBtn.addEventListener('click', () => {
        let displayNumber = numberBtn.textContent;
        if (anew) {
            calculatorDisplay.textContent = displayNumber;
            anew = false;
        } else 
            calculatorDisplay.textContent += displayNumber;

        if (num1 === '' || operator === undefined) {
            num1 += displayNumber;
        } else {
            num2 += displayNumber;
        }
    });
});

const operatorBtns = document.querySelectorAll('.operator');
operatorBtns.forEach(operatorBtn => {
    operatorBtn.addEventListener('click', event => {
        let displayText = operatorBtn.textContent;
        // Zone out the equal button 
        // because it has the operator class selector that is for styling 
        // but not for javascript functioning
        if (displayText === '=') {
            return;
        }

        // This conditional allow user to press the operator buttons before any operands and the first operand will have value 0
        if (anew && num1 === '' && displayText !== '=') {
            num1 = '0';
        }

        if (operator !== undefined) {
            if (num2 !== '') {
                let result = operate(num1, num2, operator);
                calculatorDisplay.textContent = result;
            }
        }

        operator = evaluateOperator(displayText);
        // This anew = true allow the calculator to display the next number being pressed
        anew = true;
        stringOperator = displayText;
    });
});


const equalBtn = document.querySelector('#equal');
equalBtn.addEventListener('click', () => {
    if (num2 !== '') {
        let result = operate(num1, num2, operator);
        calculatorDisplay.textContent = result;
    }
});

const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', () => {
    resetCalculator();
    calculatorDisplay.textContent = ':)';
});

const deleteBtn = document.querySelector('#delete');
deleteBtn.addEventListener('click', () => {
    if (num2 !== '') {
        num2 = deleteDigit(num2);
    } else if (anew) {
        resetCalculator();
    } else if (operator === undefined && num1 !== '') {
        num1 = deleteDigit(num1); 
    }
});

function deleteDigit(number) {
    if (number.length === 1 || number.length === 0) {
        number = '';
        calculatorDisplay.textContent = '0';
        anew = true;
    } else {
        number = number.slice(0, number.length - 1);
        calculatorDisplay.textContent = number;
    }
    console.log(number);
    return number;
}