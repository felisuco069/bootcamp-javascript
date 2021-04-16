var result;
var signo = 0;

function getnum1() {
    return Number(document.getElementById("numb1").value);
}

function getnum2() {
    return Number(document.getElementById("numb2").value);

}

function operator(signo) {
    switch (signo) {

        case "+":
            result = getnum1() + getnum2();
            break;
        case "-":
            result = getnum1() - getnum2();
            break;
        case "*":
            result = getnum1() * getnum2();
            break;
        case "/":
            result = getnum1() / getnum2(); 
            break;
    }
    if (isNaN (result)) {
        document.getElementById("resul").innerText = "En alguno de los campos no hay números";
    } else {
        document.getElementById("resul").innerText = result;
    }
}
document.getElementById("btn-suma").addEventListener("click", () => operator("+"));
document.getElementById("btn-resta").addEventListener("click", () => operator("-"));
document.getElementById("btn-product").addEventListener("click", () => operator("*"));
document.getElementById("btn-division").addEventListener("click", () => operator("/"));