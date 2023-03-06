const data = require("../tasksData")

function filter(palabra) {
  let encontrados = []
  
  for(i=0; i < data.length; i++) {
    let esEncontrado = data[i].title.includes(palabra)
    if (esEncontrado === true) {
      encontrados.push(data[i])
    }
  }

  if (encontrados.length === 0){
    return "No se encontraron elementos"
  }

  return encontrados
}

module.exports = filter