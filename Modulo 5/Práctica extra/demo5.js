var datos = [{
    id: 1,
    name: "Jhon",
}, {
    id: 2,
    name: "Doe",
}, {
    id: 3,
    name: "Clara",
}, {
    id: 4,
    name: "Elisa",
}, {
    id: 4,
    name: "Pedro",
}, ];

var datosInv = [];

for (z = (datos.length - 1); z >= 0; z--) {
    
    var lista5 = document.createElement("span");
    lista5.innerText = JSON.stringify(datos[z], null, 2);
    document.getElementById("ej5").appendChild(lista5);
}