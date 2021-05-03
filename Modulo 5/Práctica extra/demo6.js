var datos6 = [{
    id: 1,
    name: "Jhon",
    age: 25,
}, {
    id: 2,
    name: "Doe",
    age: 8,
}, {
    id: 3,
    name: "Clara",
    age: 15,
}, {
    id: 4,
    name: "Elisa",
    age: 30,
}, {
    id: 4,
    name: "Pedro",
    age: 18,
}, ];

for (y = 0; y < datos6.length; y++) {
    if (datos6[y].age >= 18) {
        var lista6 = document.createElement("span");
        lista6.innerText = JSON.stringify(datos6[y], null, 2);
        document.getElementById("ej6").appendChild(lista6);
    }
}