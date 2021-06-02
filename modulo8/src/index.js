// Para ejecutarlo con CommonJS hay que descomentar la linea 5
// y comentar la linea 6.
// Para hacerlo con ES6 el paso inverso.

// const printClientAccount = require("./client-list-business");
import *as printClientAccount from "./client-list-business";

window.onload = function () {
    printClientAccount.printClientsAccounts();
    };