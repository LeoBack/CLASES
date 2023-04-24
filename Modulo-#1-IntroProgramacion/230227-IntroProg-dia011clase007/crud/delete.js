const readFile = require("./readJSON");
const writeFile = require("./writeJSON");

function delet(pTitle) {
  const data = readFile();
  for (i = 0; i < data.length; i++) {
    if (data[i].title === pTitle) {
      let indice = data.indexOf(data[i]);
      data.splice(indice, 1);
      writeFile(data);
      return true;
    }
  }
  return false;
}

module.exports = delet;
