var result = 0;
var operation = "+";
var operando;
x
function getValue() {
    return Number(document.getElementById("pantalla").value);
}

function cleanInput() {
    document.getElementById("pantalla").value = "";
}

function calculation(operationString) {
    switch (operation) {
        case "+":
            result = result + getValue();
            break;
        case "-":
            result = result - getValue();
            break;
        case "*":
            result = result * getValue();
            break;
        case "/":
            result = result / getValue();
            break;

    }
    document.getElementById("result").innerText = result;
    operation = operationString;
    cleanInput();
}

function handleEqual() {
    calculation();
}

document.getElementById("btn-suma").addEventListener("click", () => calculation('+'))
document.getElementById("btn-resta").addEventListener("click", () => calculation('-'))
document.getElementById("btn-producto").addEventListener("click", () => calculation('*'))
document.getElementById("btn-division").addEventListener("click", () => calculation('/'))
document.getElementById("btn-result").addEventListener("click", () => handleEqual())