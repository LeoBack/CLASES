const readFile = require("./readJSON");
const writeFile = require("./writeJSON");

function create(pNewTitle, pNewDescription) {
  const newObject = {
    title: pNewTitle,
    desc: pNewDescription,
  };
  try {
    const data = readFile();
    data.push(newObject);
    writeFile(data);
    return "Ok";
  } catch (excepcion) {
    return "Fail";
  }
}

module.exports = create;
