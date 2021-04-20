var totalPrice = 0;
var tipo;
var ocup;
var spa = 0;
var typeR = document.getElementById("typeRoom");
var typeOc = document.getElementById("ocupation");
function getTypeRoom() {
    switch (typeR.value) {
        case "standard":
            tipo = 100;
            break;
        case "juniorSuite":
            tipo = 120;
            break;
        case "suite":
            tipo = 150;
            break;
    }
    return tipo;
}

function nigthNum() {
    return document.getElementById("night").value;
}

function spaPrice() {
    var box = document.getElementById("spa").checked;
    if (box) {
        var spa = 20;
    } else {
        var spa = 0;
    }
    return spa;

}

function getOcupRoom() {
    switch (typeOc.value) {
        case "simple":
            ocup = 0.75;
            break;
        case "doble":
            ocup = 1;
            break;
        case "triple":
            ocup = 1.25;
            break;
    }
    return ocup;
}

function getNightPark() {
    return document.getElementById("nightPark").value;
}
function roomPrice() {
    totalPrice = ((getTypeRoom() + spaPrice())*getOcupRoom())*nigthNum() + 10*getNightPark();
    
    document.getElementById("result").innerText = totalPrice;
}

document.getElementById("nightPark").addEventListener("click", getNightPark);
document.getElementById("night").addEventListener("click", nigthNum);
document.getElementById("ocupation").addEventListener("change", getOcupRoom);
document.getElementById("typeRoom").addEventListener("change", getTypeRoom);
document.getElementById("calc").addEventListener("click", roomPrice);