const data = require("../tasksData")

function retornar(titulo) {
  for(i=0; i < data.length; i++) {
    if(titulo === data[i].title) {
      return data[i].desc
    }
  }

  return "No se encontró nada"
}

module.exports = retornar