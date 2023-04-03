const readFile = require("./readJSON");
const writeFile = require("./writeJSON");

function update(pTitle, pNewDescription) {
  const data = readFile();
  for (i = 0; i < data.length; i++) {
    if (data[i].title === pTitle) {
      data[i].desc = pNewDescription;
      writeFile(data);
      return true;
    }
  }
  return false;
}

module.exports = update;
