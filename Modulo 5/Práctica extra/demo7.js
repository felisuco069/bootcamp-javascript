mayDeEdad = [];
menDeEdad = [];
for (y = 0; y < datos6.length; y++) {
    if (datos6[y].age >= 18) {
        mayDeEdad.push(datos6[y]);
        var lista7a = document.createElement("span");
        lista7a.innerText = JSON.stringify(datos6[y], null, 2);
        document.getElementById("ej7a").appendChild(lista7a);
    } else {
        var lista7b = document.createElement("span");
        lista7b.innerText = JSON.stringify(datos6[y], null, 2);
        document.getElementById("ej7b").appendChild(lista7b);
    }
}