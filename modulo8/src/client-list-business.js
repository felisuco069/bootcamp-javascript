const getClient = require("./data-business");
const clientElement = require("./client-business")

function printClientsAccounts() {
    const clients = getClient.getClients();
    const ul = document.createElement("ul");
    for (let client of clients) {
      const element = clientElement.getClientElement(client);
      ul.appendChild(element);
    }
  
    document.getElementById("root").appendChild(ul);
}
module.exports = { printClientsAccounts };