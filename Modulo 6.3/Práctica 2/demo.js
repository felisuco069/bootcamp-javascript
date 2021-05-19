var moneys = [{
    name: 20000,
}, {
    name: 10000,
}, {
    name: 5000,
}, {
    name: 2000,
}, {
    name: 1000,
}, {
    name: 500,
}, {
    name: 200,
}, {
    name: 100,
}, {
    name: 50,
}, {
    name: 20,
}, {
    name: 10,
}, {
    name: 5,
}, {
    name: 2,
}, {
    name: 1
}]
var getData = () => {
    for (var element of moneys) {
        element.number = document.getElementById("money" + element.name).value;
    }
    var totalimport = document.getElementById("totalImport").value;

    var moneyDelivered = document.getElementById("moneyDelivered").value;

    if (moneyDelivered < totalimport) {
        var warning = document.createElement("span");
        warning.innerText = "El importe entregado es insuficiente"
        document.getElementById("containerResult").appendChild(warning)
    } else {
        getChange(moneyDelivered, totalimport);
    }
}
var getLineMoney = (num, nameMoney, cashBack) => {
    var text = document.createElement("span");
    if (nameMoney >= 500) {
        text.innerText = "Coge " + num + " billetes de " + nameMoney / 100 + " €."
    } else if (nameMoney < 500 && nameMoney >= 100) {
        text.innerText = "Coge " + num + " monedas de " + nameMoney / 100 + " €."
    } else if (nameMoney < 100 && nameMoney >= 0) {
        text.innerText = "Coge " + num + " monedas de " + nameMoney + " céntimos."
    }
    document.getElementById("containerResult").appendChild(text);
    return cashBack = (cashBack - (num * nameMoney));
}

var getChange = (cash, total) => {
    var moneyBack = (cash - total) * 100;
    if (moneyBack === 0) {
        var text = document.createElement("span");
        text.innerText = "El importe entregado es justo el importe de compra. La vuelta es 0."
        document.getElementById("containerResult").appendChild(text);
    } else {
        for (var money of moneys) {
            if (money.number > 0) {
                var numberCash = Math.floor(moneyBack / money.name);
                if (numberCash > 0 && numberCash <= money.number) {
                    moneyBack = getLineMoney(numberCash, money.name, moneyBack);
                } else if (numberCash > 0 && numberCash > money.number) {
                    numberCash = money.number;
                    moneyBack = getLineMoney(numberCash, money.name, moneyBack);
                }
            }
        }
    }
}

document.getElementById("calculate").addEventListener("click", getData);