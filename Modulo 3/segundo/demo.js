const empleado = {
    bruto: 144000,
    hijos: 2,
    pagas: 14
}
if (empleado.hijos > 0) {
    deduccion = 0.02
} else {
    deduccion = 0
};
let nominaBrutanual = empleado.bruto;
if (empleado.bruto < 12000) {
    nominaBrutanual;
} else if (empleado.bruto >= 12000 && empleado.bruto < 24000) {
    nominaBrutanual = empleado.bruto * (0.92 + deduccion);
} else if (empleado.bruto >= 24000 && empleado.bruto < 34000) {
    nominaBrutanual = empleado.bruto * (0.84 + deduccion);
} else {
    nominaBrutanual = empleado.bruto * (0.70 + deduccion);
}
console.log("El importe neto anual de su nómina es de: " + nominaBrutanual + " €")

let nominamensual = 0;

if (empleado.pagas = 14) {
    nominamensual = nominaBrutanual / 14;
} else {
    nominaBrutanual = nominaBrutanual / 12;
}
console.log("El importe neto mensual de su nómina es de: " + nominamensual + " €")