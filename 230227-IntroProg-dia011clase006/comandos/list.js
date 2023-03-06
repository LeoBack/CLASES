const data = require("../tasksData")

function list() {
  let lista = []
  
  for(i=0; i < data.length; i++) {
    const elemento = data[i]
    lista.push(elemento.title)
  }

  return lista
}

module.exports = list