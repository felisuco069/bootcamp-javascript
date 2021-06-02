// Para ejecutarlo con CommonJS hay que descomentar las lineas 5 y 23
// y comentar las lineas 6 y 24.
// Para hacerlo con ES6 el paso inverso.

// const NodeStyle = require("./style-business");
import * as NodeStyle from "./style-business";
function getClientAccountsElement(accounts) {
    const ul = document.createElement("ul");
    for (let account of accounts) {
      ul.append(getAccountElement(account));
    }
    return ul;
  }
  
  function getAccountElement(account) {
    const li = document.createElement("li");
  
    li.style = NodeStyle.getNodeStyle(account);
  
    li.append("[Saldo: " + account.money + "] IBAN: " + account.iban);
    return li;
}
//   module.exports = {getClientAccountsElement};
export { getClientAccountsElement };