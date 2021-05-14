var range;
var result = [];
var number;


function getNumbers() {
    var n = Number(document.getElementById("elementsNumbers").value);
    var min = Number(document.getElementById("minNiumber").value);
    var max = Number(document.getElementById("maxNumber").value);

    randomPick(n, min, max);
}

var randomPick = (n, min, max) => {
    var range = max - min + 1;
    // debugger;
    for (i = 0; i < n;) {
        number = Math.floor(Math.random() * range) + min;
        if (result.indexOf(number) < 0) {
            result.push(number);
            i++;
        }
    }
    paintResult(result);
}

function paintResult(result) {
    var initial = document.createElement("span");
    initial.innerText = "{";
    document.getElementById("result").appendChild(initial);
    for (var element of result) {
        var arrayElement = document.createElement("span");
        arrayElement.innerText = element;
        document.getElementById("result").appendChild(arrayElement);
    }
    var finish = document.createElement("span");
    finish.innerText = "}";
    document.getElementById("result").appendChild(finish);
}
document.getElementById("calculate").addEventListener("click", getNumbers)