var valores = [14, 2, 2.02, 63, 0, -9];

for (i = 0; i < valores.length; i++) {
    if (valores[i] > 0) {
        var lista = document.createElement("dt");
        lista.innerText = "Elemento " + [i + 1] + ": " + valores[i];
        document.getElementById("ej2").appendChild(lista);
    }
}