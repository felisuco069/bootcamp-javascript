// Para ejecutarlo con CommonJS hay que descomentar las lineas 5,6 y 37
// y comentar las lineas 7,8 y 38.
// Para hacerlo con ES6 el paso inverso.

// const Accounts = require("./data-business");
// const ClientAccountsBusines = require("./account-business");
import *as Accounts from "./data-business";
import *as ClientAccountsBusines from "./account-business";

function getClientElement(client) {
    const allAccounts = Accounts.getAccounts();
    const clientAccounts = [];
    for (let account of allAccounts) {
      if (account.clientId === client.id) {
        clientAccounts.push(account);
      }
    }
  
    const node = getClientNode(client);
    const ul = ClientAccountsBusines.getClientAccountsElement(clientAccounts);
  
    node.appendChild(ul);
  
    return node;
  }
  
  function getClientNode(client) {
    const li = document.createElement("li");
    li.append(getFullName(client));
  
    return li;
  }
  
  function getFullName(client) {
    return client.first_name + " " + client.last_name;
}
// module.exports = { getClientElement };
export { getClientElement };