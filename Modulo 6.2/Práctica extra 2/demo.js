var moneys = [20000, 10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

var getData = () => {
    var totalimport = document.getElementById("totalImport").value;
    var moneyDelivered = document.getElementById("moneyDelivered").value;

    if (moneyDelivered < totalimport) {
        var warning = document.createElement("span");
        warning.innerText = "El importe entregado es insuficiente"
        document.getElementById("containerResult").appendChild(warning)
    } else {
        getChange(totalimport, moneyDelivered);
    }
}
var getlineMoney = (change, money) => {
    var text = document.createElement("span");
    if (money >= 500) {
        text.innerText = "Necesitas " + Math.floor(change / money) + " billetes de " + money/100 + " €.";
    } else if (money < 500 && money >= 100) {
        text.innerText = "Necesitas " + Math.floor(change / money) + " monedas de " + money/100 + " €.";
    } else if (money < 100 && money > 0) {
        text.innerText = "Necesitas " + Math.floor(change / money) + " monedas de " + money + " céntimos.";
    }
    document.getElementById("containerResult").appendChild(text);
    return change = change - (Math.floor(change / money) * money);
}
var getChange = (total, money) => {
    var changeReturn = (money - total) * 100;
    if (changeReturn === 0) {
        var text = document.createElement("span");
        text.innerText = "El importe pagado es justo el importe de compra. El cambio es 0.";
        document.getElementById("containerResult").appendChild(text);
    } else {
        for (var money of moneys) {
            if (Math.floor(changeReturn / money) > 0) {
                changeReturn = getlineMoney(changeReturn, money);
            }
        }
    }
}

document.getElementById("calculate").addEventListener("click", getData);