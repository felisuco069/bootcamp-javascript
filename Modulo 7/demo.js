console.log("----- Validación de IBAN -----");

const pattern = /^(ES)(\d{2})\s?(\d{4}\s?){4}\d{4}/;
const iban = "ES66 0019 0020 9612 3456 7890";
var arrayIban = iban.match(pattern);
// console.log(arrayIban);
console.log("-- Caso 2 --");
console.log("El número de cuenta introducido " + iban + " tiene el valor: " + pattern.test(iban));
console.log("-- Caso 3 --");
console.log("El código del pais es " + arrayIban[1] + " y el dígito de control es " + arrayIban[2]);


console.log("----- Validación de matrícula de coche -----");

const pattern2 = /^(\d{4})(\s|-)?([A-Z]{3})$/;
var arrayRegistration = ["2021 GMD", "2345-GMD", "4532BDB", "0320-AAA"];
arrayRegistration.forEach(carRegistration => console.log("La matrícula " + carRegistration + " está validada como: " + pattern2.test(carRegistration)));
for (var registration of arrayRegistration) {
    if(registration.match(pattern2)) console.log("De la matrícula " + registration + " la parte numérica es  " + registration.match(pattern2)[1] + " y las letras son " + registration.match(pattern2)[3]);
}