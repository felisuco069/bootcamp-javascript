console.log("---- Ejercicios opcionales ----");

console.log("---- Extraer imágenes de un fichero HTML ----");
console.log("---- Caso 1 ----");

const pattern3 = /^\s*<img\s*src="(.+)"\s*\/>$/;
const tag = '<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>'
console.log("De la etiqueta " + tag + " dada, la url es: ")
console.log(tag.match(pattern3)[1]);

console.log("---- Caso 2 ----");

const pattern4 = /^\s*<img\n\s*src="(.+)"\n\s*\/>$/gm
const textHtml = `<html>
<body>
  <img
    src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"
  />
  <h1>ejemplo</h1>
  <img
    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
  />
</body>
</html>`;
const textTag = textHtml.match(pattern4);
console.log(textTag);
textTag.forEach((element, index) =>
    console.log("La dirección de la foto " + (index+1) + " es: " + element.match(pattern3)[1])
);

// console.log("---- Validar sintaxis tarjeta de crédito ----");
// console.log("---- Caso 1 ----");
// const pattern5 = /^(5[0-5]\d{2})(\s|-)?(\d{4})(\s|-)?(\d{4})(\s|-)?(\d{4})$/;
// const numberCard = ["5299 6400 0000 0000", "5299-6400-0000-0000" , "5299640000000000"];
// console.log("---- Caso 2 ----");
// numberCard.forEach(card => console.log("Para la tarjeta " + card + " los grupos de números son: Grupo 1 " + card.match(pattern5)[1]+ " Grupo 2 " + card.match(pattern5)[3] + " Grupo 3 " + card.match(pattern5)[5] + " Grupo 4 " + card.match(pattern5)[7]));



