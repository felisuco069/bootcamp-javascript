// Ejercicios Extra

// 1º

// const arrayExtra = ["andrés", { nombre: "Félix", age: 36 }, "Luis", 6, 7, 8];

// const swapFirstSecond = ([first, second, ...restElements]) => {
//     const newArrayOrdered = [second, first, ...restElements];
//     console.log(newArrayOrdered);
// };
// swapFirstSecond(arrayExtra);

// 2º

// const arrayWords2 = ["andrés", "aFélix", "aEstela", "aAlejandra", "aKaos", "aBeni", "aAlberto", "aPaco"];

// const firstEqual = (words, firstLetter) =>
//     words.every(word => word.indexOf(firstLetter) === 0);

// console.log(firstEqual(arrayWords2, "a"));

// 3º
// const array1 = [1, 2, 3, 4, 6, 5, 4, 7, 8, 9, 0];

// const longest = (...arrays) => {
//     arrays.sort((a, b) => (a.length > b.length) ? 1 : -1);
//     console.log("El array con más elementos es: " + (arrays[arrays.length - 1]));
// };
// longest(arrayExtra, arrayWords2, array1); // He usado las variables del ejercicio 1 y 2 aparte de la propia. Descomentar las líneas 5 y 15.

// 4º

// const searchInStringV1 = (string, letterToSearch) => Array.from(string).reduce((acc, letter) => ((letter === letterToSearch) ? acc + 1 : acc + 0), 0);
// console.log(searchInStringV1("alejandro", "a"));

// 5º

// const searchInStringV1 = (string, letterToSearch) => Array.from(string).filter(letter => (letter === letterToSearch));
// console.log(searchInStringV1("alejan1adroa", "a").length);

// 6º
// const randomString = "murcielago";
// const sortCharacters = string => Array.from(string).sort((a, b) => a > b ? 1 : -1);
// console.log(sortCharacters(randomString));


// 7º 
// En caso de hacerlo con entrada directa de varias palabras:

// const shout = (...multiWords) => multiWords.join("! ").toUpperCase();
// console.log(shout("felix", "manuel", "andres", "luis"));

// En caso de hacerlo con entrada de las palabras a través de un array:

// const shout = multiWords => multiWords.join("! ").toUpperCase();
// console.log(shout(arrayWords)); // He usado la variable del ejercicio 6 de entrega, descomentar la linea 51 del archivo demo.js.

// 8º

// const shoppingCart = [
//     { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
//     { category: "Carne y Pescado", product: "Pechuga pollo", price: 3.75, units: 2 },
//     { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
//     { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
//     { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
//     { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
//     { category: "Carne y Pescado", product: "Secreto ibérico", price: 5.75, units: 2 },
// ];

// Apartado A:

// const newShoppingCart = (iva, products) => products.map(product => ({ ...product, iva }));
// const nuevoCarrito = newShoppingCart("21 %", shoppingCart);
// console.log(nuevoCarrito);

// Apartado B:

// const orderedByUnits = productList => productList.sort((a, b) => (a.units > b.units) ? -1 : 1);
// console.log(orderedByUnits(nuevoCarrito));

// Apartado C:

// const totalImport = shoppingList => shoppingList
//     // .reduce((acc, element) => (element.category === "Droguería") ? (element.units * element.price + acc) : acc, 0);//solo con un reduce o en las dos lineas de abajo, un filter antes del reduce.
//     .filter(product => product.category === "Droguería")
//     .reduce((acc, element) => (element.units * element.price) + acc, 0)
// console.log("El importe total de la categoría de droguería es de: " + totalImport(nuevoCarrito));

// Apartado D:

// const newOrderedList = products => products
//     .map(product => ({ ...product, subtotal: product.price * product.units }))
//     .sort((a, b) => (a.category > b.category) ? 1 : -1);
// const ultimateCart = newOrderedList(nuevoCarrito);
// console.log(ultimateCart);

// const printNewOrderedList = shoppingList => shoppingList.forEach(element => {
//     console.log(element.product + " -> " + element.subtotal + " €");

// });
// printNewOrderedList(ultimateCart);
