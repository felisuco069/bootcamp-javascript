var mayQueCero = [];
var menQueCero = [];
for (i = 0; i < valores.length; i++){
    if (valores[i]>=0) {
        mayQueCero.push(valores[i]);
    } else {
        menQueCero.push(valores[i]);
    }
}
document.getElementById("ej3-mayor").innerText = "[" + mayQueCero + "]";
document.getElementById("ej3-menor").innerText = "[" + menQueCero + "]";