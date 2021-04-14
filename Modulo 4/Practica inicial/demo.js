function getNum1() {
    document.getElementById("num1").value;

}
var getNum2 = () => document.getElementById("num2").value;

var sumatoria = () => parseFloat(getNum1()) + parseFloat(getNum2());
var opResta = () => parseFloat(getNum1()) - parseFloat(getNum2());
var opProducto = () => parseFloat(getNum1()) * parseFloat(getNum2());
var opDivision = () => parseFloat(getNum1()) / parseFloat(getNum2());
var resultSuma = () => document.getElementById("resultado").innerText = sumatoria();
var resultadoResta = () => document.getElementById("resultado").innerText = opResta();
var resultadoProducto = () => document.getElementById("resultado").innerText = opProducto();
var resultadoDivision = () => document.getElementById("resultado").innerText = opDivision();
document.getElementById("boton-suma").addEventListener("click", resultSuma);
document.getElementById("boton-resta").addEventListener("click", resultadoResta);
document.getElementById("boton-producto").addEventListener("click", resultadoProducto);
document.getElementById("boton-division").addEventListener("click", resultadoDivision);