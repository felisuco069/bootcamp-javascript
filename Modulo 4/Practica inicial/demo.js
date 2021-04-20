var result;
var signo = 0;

function getnum(inputid) {
    return Number(document.getElementById(inputid).value);
}

function operator(signo) {
    switch (signo) {

        case "+":
            result = getnum("numb1") + getnum("numb2");
            break;
        case "-":
            result = getnum("numb1") - getnum("numb2");
            break;
        case "*":
            result = getnum("numb1") * getnum("numb2");
            break;
        case "/":
            result = getnum("numb1") / getnum("numb2");
            break;
    }!Number(getnum("numb1")) || !Number(getnum("numb2")) ? document.getElementById("resul").innerText = "En alguno de los campos no hay números" : document.getElementById("resul").innerText = result;

}
document.getElementById("btn-suma").addEventListener("click", () => operator("+"));
document.getElementById("btn-resta").addEventListener("click", () => operator("-"));
document.getElementById("btn-product").addEventListener("click", () => operator("*"));
document.getElementById("btn-division").addEventListener("click", () => operator("/"));