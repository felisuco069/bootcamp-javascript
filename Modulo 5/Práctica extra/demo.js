var ejercicio1 = [25, 2.05, 1000, 63, 4.01, -9];

for (i = 0; i < ejercicio1.length; i++) {
    var lista = document.createElement("dt");
    lista.innerText = "Elemento " + [i + 1] + ": " + ejercicio1[1];
    document.getElementById("for").appendChild(lista);
}
for (num in ejercicio1) {
    var lista = document.createElement("dt");
    lista.innerText = "Elemento " + [num + 1] + ": " + ejercicio1[num];
    document.getElementById("for-in").appendChild(lista);
}
for (num of ejercicio1) {
    var i = 1;
    var lista = document.createElement("dt");
    lista.innerText = "Elemento " + i + ": " + num;
    document.getElementById("for-of").appendChild(lista);
    i++
}
var i = 0;
do {
    var lista = document.createElement("dt");
    lista.innerText = "Elemento " + (i + 1) + ": " + ejercicio1[i];
    document.getElementById("do-while").appendChild(lista);
    i++;
} while (i < ejercicio1.length);
x = 0;
while (x < ejercicio1.length) {
    var lista = document.createElement("dt");
    lista.innerText = "Elemento " + (x + 1) + ": " + ejercicio1[x];
    document.getElementById("while").appendChild(lista);
    x++;
};