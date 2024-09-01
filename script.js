const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const plus = document.querySelector("#add");
const minus = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const display = document.querySelector("#display");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");
const dot = document.querySelector("#dot");


const buttons = document.querySelector(".buttons");

let firstOperand = "", secondOperand = "", operator;
let result = 0;
const sings = ["+", "-", "x", "/"];
let numberTurn = 0;

dot.addEventListener("click", (e) => {
    if ((display.textContent).indexOf('.') == -1 && display.textContent != "") { 
    display.textContent += dot.textContent;
    }
})

buttons.addEventListener("click", (e) => {
    if (e.target.className == "number" && firstOperand == display.textContent && numberTurn == 0) display.textContent = "";
    if (display.textContent.length > 10) return;
    if (e.target.className == "number" && display.textContent === "Dude, it does not work") reset();
    if (e.target.className == "number" && firstOperand == display.textContent && numberTurn == 0) {
        firstOperand = '';
        operator = null;
    }   
    if (e.target.className == "number") display.textContent += e.target.textContent;
    if (e.target.className == "number") numberTurn++;
})

Array.from(operators).forEach(element => {
    element.addEventListener("click", (e) => {
        if (firstOperand != 0 && operator) {
            if (display.textContent === "") return;
            if (display.textContent == firstOperand) return;
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
    if(firstOperand == '') return
    if(secondOperand === 0 && operator == "/") { 
        display.textContent = "Dude, it does not work";
        firstOperand = "";
        secondOperand = "";
        operator = null;
        numberTurn = 0
        return
    }
    display.textContent = operate(firstOperand, secondOperand, operator);
    firstOperand = '';
    secondOperand = +display.textContent;
    numberTurn = 0
})

clear.addEventListener("click", (e) => {
    reset()
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

function reset() {
    display.textContent = "";
    firstOperand = "";
    secondOperand = "";
    operator = null;
    numberTurn = 0
}

document.addEventListener("keypress", (e) => {
    if (isNaN(+e.key)) return;
    if (display.textContent.length > 10) return;
    display.textContent += e.key;

})

document.addEventListener("keydown", (e) => {
    if (e.key == "Backspace") display.textContent =
     display.textContent.slice(0, -1);
})

document.addEventListener("keydown", (e) => {
    if (e.key == "Escape") reset();
})