console.log("---- Buscar Expresiones regulares ----");

console.log("- Comprobar si una clave es fuerte o no -");

const patternPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{1,}$/;
const password = "1dE-";
console.log("Comprobación contraseña compleja: " + patternPass.test(password));

const patternPassM = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
const password2 = "16dE-";
console.log("Comprobación contraseña moderada: " + patternPassM.test(password2));

console.log("- Validar que una URL esta bien formada -");

const patternUrlvalidation = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&=]*)/;
const arrayUrl = ["https://www.lemoncode.net",  "www.lemoncode.net", "lemoncode.net"];
arrayUrl.forEach((url,index2) =>
    console.log("Comprobación url: La url " + (index2+1) + " es " + patternUrlvalidation.test(url))
    );

console.log("- Validar que un color en Hexadecimal esta bien formado -");
const patternColourHex = /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
const colourHex = "#D2B2AC";
console.log("El código de color " + colourHex + " es " + patternColourHex.test(colourHex));