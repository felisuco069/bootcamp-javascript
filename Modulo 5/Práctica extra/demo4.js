var valores2 = [14, 2, 2.02, 63, 0, -9];
for (i = 0; i < valores2.length; i++) {
    if (valores2[i] < 0) valores2.splice(i, 1);
}
document.getElementById("ej4").innerText = "[" + valores2 + "]";