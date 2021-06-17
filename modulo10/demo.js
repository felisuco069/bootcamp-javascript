// Ejercicios Entregables

// // 1º

// const myObject = {
//     name: "Félix",
//     id: 1245,
//     surname: "Franco",
//     heigth: "1,82",
// }

// const hasId = ({
//     id
// }) => id ? console.log("true") : console.log("false");
// hasId(myObject);

// // 2º

// const myArray = ["pepito", "javier", user = {
//     id: 123,
//     altura: "1,82",
// }];

// const head = ([primero, ...rest]) => console.log(primero);
// head(myArray);

// 3º

// const myArray3 = ["daniel", user2 = { pantalon: "Marrón", camiseta: "Azul", }, "rosa", 5, 7, 6, 3, 9];
// const tail = ([, ...restElement]) => console.log([...restElement]);
// tail(myArray3);

// // 4º

// const swapFirstToLast = ([primero, ...restElement]) => console.log([...restElement, primero]); 
// swapFirstToLast(myArray3); // Uso la variable del ejercicio 3, descomentar la línea 29.

// 5º

// const excludeId = ({
//     id,
//     ...restProperty
// }) => console.log({
//     ...restProperty
// });
// excludeId(myObject); // Variable del ejercicio 1, descomentar las línea de la 5 a la 10.

// 6º

// const arrayWords = ["andrés", "Félix", "Estela", "Alejandra", "Kaos", "Beni", "Alberto", "Paco"];
// const wordsStartingWithA = words => words.filter(word => word[0] === "a" || word[0]==="A");
// console.log(wordsStartingWithA(arrayWords));

// 7º

// const concat = words => words.join(" - ");
// console.log(concat(arrayWords)); // Uso la variable del ejercicio 6, descomentar la línea 50.

// 8º

// const numberArray = [1, 5, 7, 32, 7, 8, 9, 12];
// const multArray = (numbers, product) => numbers.map(number => number* product);
// console.log(multArray(numberArray, 2));

// 9º

// const calcMult = numbers => numbers.reduce((acc, number) => acc + number, 0);
// console.log(calcMult(numberArray)); // Uso la variable del ejercicio 8, descomentar la línea 61.