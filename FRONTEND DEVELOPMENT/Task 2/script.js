// script.js

const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentOperand = '';
let previousOperand = '';
let operation = undefined;

// Function to update the display
function updateDisplay() {
    display.textContent = currentOperand || '0';
}

// Function to handle number and decimal point button clicks
function appendNumber(number) {
    if (number === '.' && currentOperand.includes('.')) return;
    currentOperand = currentOperand.toString() + number.toString();
    updateDisplay();
}

// Function to handle operator button clicks
function chooseOperation(operator) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        compute();
    }
    operation = operator;
    previousOperand = currentOperand;
    currentOperand = '';
}

// Function to perform the calculation
function compute() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }

    currentOperand = computation;
    operation = undefined;
    previousOperand = '';
    updateDisplay();
}

// Function to clear the calculator
function clear() {
    currentOperand = '';
    previousOperand = '';
    operation = undefined;
    updateDisplay();
}

// Event listeners for buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('operator')) {
            chooseOperation(button.value);
        } else if (button.value === 'C') {
            clear();
        } else if (button.value === '=') {
            compute();
        } else {
            appendNumber(button.value);
        }
    });
});

// Initialize display
updateDisplay();
