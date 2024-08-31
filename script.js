const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const plus = document.querySelector("#add");
const minus = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const display = document.querySelector("#display");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");


const buttons = document.querySelector(".buttons");

let firstOperand = "", secondOperand = "", operator;
let result = 0;
const sings = ["+", "-", "x", "/"];
let numberTurn = 0;

buttons.addEventListener("click", (e) => {
    if (e.target.className == "number" && firstOperand == display.textContent && numberTurn == 0) display.textContent = "";
    if (e.target.className == "number") display.textContent += e.target.textContent;
    if (e.target.className == "number") numberTurn++;
})

Array.from(operators).forEach(element => {
    element.addEventListener("click", (e) => {
        if (firstOperand && operator) {
            secondOperand = +display.textContent;
            firstOperand = operate(firstOperand, secondOperand, operator);
            display.textContent = firstOperand;
            operator = e.target.textContent.trim();
            numberTurn = 0
        }
        else {
            firstOperand = +display.textContent;
            operator = e.target.textContent.trim();
            numberTurn = 0;
        }
    })
})

equal.addEventListener("click", (e) => {
    secondOperand = +display.textContent;
    display.textContent = operate(firstOperand, secondOperand, operator);
    numberTurn = 0
})

clear.addEventListener("click", (e) => {
    display.textContent = "";
    firstOperand = "";
    secondOperand = "";
    operator = null;
    numberTurn = 0
})

function operate(number_1, number_2, sign) {
    switch (sign) {
        case sings[0]:
            return sum(number_1, number_2);
        case sings[1]:
            return subtract(number_1, number_2);
        case sings[2]:
            return multiply(number_1, number_2);
        case sings[3]:
            return divide(number_1, number_2);
    }
}

function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}