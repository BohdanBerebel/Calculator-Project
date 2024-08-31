const numbers = document.querySelectorAll(".number");
const operators = document.querySelector(".operator");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const plus = document.querySelector("#add");
const minus = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const display = document.querySelector("#display");

const buttons = document.querySelector(".buttons");

let firstOperand, secondOperand, operator;
let result = 0;

buttons.addEventListener("click", (e) => {
    if (e.target.localName == "button") display.textContent = e.target.textContent;
    if (firstOperand != undefined && e.target.className == "operator") operator = e.target.textContent; 
    // console.log   
    if (firstOperand == undefined && e.target.className == "number") firstOperand = +e.target.textContent;
    if (firstOperand != undefined && operator!= undefined && secondOperand == undefined && e.target.className == "number") secondOperand = +e.target.textContent;
    if (firstOperand != undefined && operator!= undefined && secondOperand != undefined && e.target.className == "number") {
        secondOperand = +e.target.textContent;   
        result = operate(firstOperand, secondOperand, operator);
        display.textContent = result;
        firstOperand = result;
    }
})

function operate(number_1, number_2, sign) {
    const sings = ["+", "-", "x", "/"];
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