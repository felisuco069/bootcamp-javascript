var bills = [200, 100, 50, 20, 10, 5];
var coins = [200, 100, 50, 20, 10, 5, 2, 1];

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
var getChange = (total, money) => {
    var changeReturn = money - total;
    if (changeReturn >= 5) {
        for (var bill in bills) {
            if (Math.floor(changeReturn / bills[bill]) > 0) {
                var text = document.createElement("span");
                text.innerText = "Necesitas " + Math.floor(changeReturn / bills[bill]) + " billetes de " + bills[bill];
                document.getElementById("containerResult").appendChild(text);
                changeReturn = changeReturn - (Math.floor(changeReturn / bills[bill]) * bills[bill]);
            }
        }
    }
    if (changeReturn < 5 && changeReturn * 100 > 0) {
        for (var coin in coins) {
            if (Math.floor(changeReturn / coins[coin]) > 0) {
                var text = document.createElement("span");
                text.innerText = "Necesitas " + Math.floor(changeReturn / coins[coin]) + " monedas de " + coins[coin];
                document.getElementById("containerResult").appendChild(text);
                changeReturn = changeReturn - (Math.floor(changeReturn / coins[coin]) * coins[coin]);
            }
        }
    }
}




document.getElementById("calculate").addEventListener("click", getData);