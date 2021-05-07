// Constantes.
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

// Entrada.
var products = [{
        description: "Goma de borrar",
        price: 0.25,
        tax: LOWER_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Lápiz H2",
        price: 0.4,
        tax: LOWER_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: "Cinta rotular",
        price: 9.3,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Papelera plástico",
        price: 2.75,
        tax: REGULAR_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: "Escuadra",
        price: 8.4,
        tax: REGULAR_TYPE,
        stock: 3,
        units: 0,
    },
    {
        description: "Pizarra blanca",
        price: 5.95,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Afilador",
        price: 1.2,
        tax: LOWER_TYPE,
        stock: 10,
        units: 0,
    },
    {
        description: "Libro ABC",
        price: 19,
        tax: EXEMPT_TYPE,
        stock: 2,
        units: 0,
    },
];
var container = document.getElementById("product-list");

var createList = product => {
    var productLine = document.createElement("li");
    var productDescription = document.createElement("span");
    productDescription.innerText = product.description;
    container.appendChild(productLine);
    productLine.appendChild(productDescription);
    var input = document.createElement("input");
    input.setAttribute("class", "product-unit");
    input.setAttribute("type", "number");
    input.setAttribute("value", 0);
    input.setAttribute("id", products.indexOf(product));
    input.setAttribute("min", 0);
    input.setAttribute("max", product.stock);
    input.addEventListener("change", event => {
        product.units = event.target.valueAsNumber;
        checkUnits()
    });
    productLine.appendChild(input);
}

function showProducts(productList) {
    for (var product of productList) {
        createList(product);
    }
}

showProducts(products);

function calculateBill() {
    var subTotal = 0;
    var iva = 0;
    for (var product of products) {
        if (product.units > product.stock) {
            alert("El stock máximo de " + product.description + " es de " + product.stock + " y lo tomaremos para el cálculo.")
                    product.units = product.stock
            subTotal += (product.price * product.units);
            iva += (product.price * (product.tax / 100)) * product.units;
        } else {
            subTotal += (product.price * product.units);
            iva += (product.price * (product.tax / 100)) * product.units;
        }
    }
    document.getElementById("subtotal").innerText = subTotal.toFixed(2) + " €";
    document.getElementById("iva").innerText = iva.toFixed(2) + " €";
    document.getElementById("total").innerText = (subTotal + iva).toFixed(2) + " €";
}
document.getElementById("calculate").disabled = true;

function checkUnits() {
    document.getElementById("calculate").disabled = true;
    var i = 0;
    while (i < products.length) {
        if (products[i].units > 0) {
            return document.getElementById("calculate").disabled = false;
        }
        i++;
    }
}
document.getElementById("calculate").addEventListener("click", calculateBill);