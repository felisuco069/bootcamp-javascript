// Para ejecutarlo con CommonJS hay que descomentar la linea 12
// y comentar la linea 13.
// Para hacerlo con ES6 el paso inverso.

function getNodeStyle(account) {
    if (account.money < 0) {
      return "color: red";
    }
  
    return "color: blue";
}
// module.exports = { getNodeStyle };
export { getNodeStyle };