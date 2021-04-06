
const product = {
    count: 3,
    price: 12.55,
    type: "alimentacion"
};
let coste = 0;
if (product.count <= 0) {
    product.count = 0;
}
else {
    coste = product.count * product.price
};

if (product.count <= 0) {
    console.log("El precio total es cero")
} else {
    console.log("El precio del producto sin IVA es: " + coste)
};
// pasamos a calcular el IVA
switch (product.type) {
    case "alimentacion":
        console.log("El importe del 10% de IVA es: " + coste * 0.1);
        break;
    case "libro":
        console.log("El importe del 4% de IVA es: " + coste * 0.04);
        break;
    default:
        console.log("El importe del 21% de IVA es: " + coste * 0.21);
        break;
}
switch (product.type) {
    case "alimentacion":
        console.log("El importe Total del producto es: " + coste * 1.1 + " €");
        break;
    case "libro":
        console.log("El importe Total del producto es: " + coste * 1.04 + " €");
        break;
    default:
        console.log("El importe Total del producto es: " + coste * 1.21 + " €");
        break;
}