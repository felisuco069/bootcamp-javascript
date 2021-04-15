// La primera parte del ejercicio, con el código de abajo hace la primera parte
// salvo devolver el error en caso de no introducir un número.

// var getNum1 = () => parseFloat(document.getElementById("num1").value);
// var getNum2 = () => parseFloat(document.getElementById("num2").value);
// var sumatoria = () => getNum1() + getNum2();
// var opResta = () => getNum1() - getNum2();
// var opProducto = () => getNum1() * getNum2();
// var opDivision = () => getNum1() / getNum2();
// var resultSuma = () => document.getElementById("resultado").innerText = sumatoria();
// var resultResta = () => document.getElementById("resultado").innerText = opResta();
// var resultProducto = () => document.getElementById("resultado").innerText = opProducto();
// var resultDivision = () => document.getElementById("resultado").innerText = opDivision();
// document.getElementById("boton-suma").addEventListener("click", resultSuma);
// document.getElementById("boton-resta").addEventListener("click", resultResta);
// document.getElementById("boton-producto").addEventListener("click", resultProducto);
// document.getElementById("boton-division").addEventListener("click", resultDivision);


// Este código es distinto y es donde encontré algunas cosas diferentes para
// hacer la busqueda de todos los selectores button y hacer algo en cada caso
// con forEach.

document.querySelectorAll("button").forEach(function (btn) {
    btn.addEventListener("click", function (evt) {
        var getNum1 = parseFloat(document.getElementById("num1").value);
        var getNum2 = parseFloat(document.getElementById("num2").value);
        var resultadoEl = document.getElementById("resultado");
        if (isNaN(getNum2) || isNaN(getNum1)) {
            resultadoEl.innerText = "Los dos valores deben de ser números para realizar la operación";

        } else {

            switch (evt.target.innerText) {
                case "+":
                    resultadoEl.innerText = getNum1 + getNum2;
                    break;
                case "-":
                    resultadoEl.innerText = getNum1 - getNum2;
                    break;
                case "*":
                    resultadoEl.innerText = getNum1 * getNum2;
                    break;
                case "/":
                    resultadoEl.innerText = getNum1 / getNum2;
                    break;
            }
        }
    })
});