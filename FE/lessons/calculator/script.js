const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");
const equalsBtn = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");

let firstOperand = "";
let secondOperand = "";
let currentOperation = null;
let isAppending = false;

function resetCalculator() {
    display.innerText = "0";
    firstOperand = "";
    secondOperand = "";
    currentOperation = null;
    isAppending = false;
};

resetCalculator();

function appendToDisplay(number) {
    if (!isAppending) {
        display.innerText = "";
        isAppending = true;
    }
    display.textContent += number;
};

function operate(operator, a, b) {
    a = parseFloat(a);
    b = parseFloat(b);

    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
    };
};

function calculate() {
    if (currentOperation === null) return;
    if (currentOperation === "/" && display.textContent === "0") {
        display.innerText = "Error";
        resetCalculator;
        return;
    }
    secondOperand = display.textContent;
    display.innerText = operate(currentOperation, firstOperand, secondOperand);
    firstOperand = display.textContent;
    secondOperand = "";
    currentOperation = null;
}

function setOperation(operator) {
    if (currentOperation !== null) {
        calculate();
    }
    currentOperation = operator;
    isAppending = false;
    firstOperand = display.textContent;
}

buttons.forEach((button) => {
    button.onclick = () => {
        if (button.classList.contains("operator")) {
            setOperation(button.textContent);
        } else if (button.classList.contains("clear")) {
            resetCalculator();
        } else if (button.classList.contains("equals")) {
            calculate();
        } else {
            appendToDisplay(button.textContent);
        }
    };
});

document.addEventListener("keydown", (event) => {
    if (event.key >= "0" && event.key <= "9") {
        appendToDisplay(event.key);
    }

    const operatorKeys = ["+", "-", "*", "/"];
    const key = event.key;
    if (operatorKeys.includes(key)) {
        setOperation(key);
    }
    
    if (event.key === "Enter") {
        calculate();
    }
});



