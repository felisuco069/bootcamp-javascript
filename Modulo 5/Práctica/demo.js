const carrito = [{
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true
}, {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true
}, {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false
}, {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false
}];
listado(carrito);

function listado(carrito) {
    for (i = 0; i < carrito.length; i++) {
        var titleProduct = document.createElement("li");
        titleProduct.innerText = carrito[i].name.toUpperCase();
        titleProduct.setAttribute("id", carrito[i].id)
        document.getElementById("object-list").appendChild(titleProduct);
        var sublist = document.createElement("ul");
        sublist.setAttribute("id", "sublist" + carrito[i].id);
        document.getElementById(carrito[i].id).appendChild(sublist);
        var prodIndep = carrito[i];
        for (prop in prodIndep) {
            var currentDiv = document.getElementById("sublist" + carrito[i].id);
            var newElement = document.createElement("li");
            newElement.innerText = prop.toUpperCase() + ": " + prodIndep[prop];
            currentDiv.appendChild(newElement);
        }

    }
}

// eliminamos el tercer elemnto, 54657
var removedElement = carrito.splice(2, 1);
document.getElementById("removedProd").innerText = removedElement[0].name;
//Cálculo del importe totral
var total = 0;
for (product of carrito) {
    total += product.price * product.count;
}

document.getElementById("totalimport").innerText = total + " €";

// Si el importe es superior a 50 € aplicamos un descuento del 5%
if (total > 50) {
    document.getElementById("discount").innerText = "Como ha superado el importe de 50€ le aplicamos un 10% con lo que el importe es de: " + total * 0.9 + " €"
}

// Localizar los productos premium
elementsPremium();
function elementsPremium() {
    i = 0;
    while (i < carrito.length) {
        if (carrito[i].premium) {
            var prPremium = document.createElement("li");
            prPremium.innerText = carrito[i].name.toUpperCase();
            document.getElementById("prPrem").appendChild(prPremium);
        }
        i++;
    }
       
}

// En caso de que todos los productos sean premium los gastos de envío serán cero.
function myFunction() {
    i = 0;
    while (i < carrito.length) {
        if (!carrito[i].premium) {
            return "Con gastos de envío"
        }
        i++;
    }
    return "Gastos de envío cero"
}


document.getElementById("shipping-costs").innerText = myFunction();