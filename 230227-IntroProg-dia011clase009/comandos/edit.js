const data = require("../tasksData");

function edit(titulo, nuevaDescripcion) {
  for (i = 0; i < data.length; i++) {
    if (titulo == data[i].title) {
      data[i].desc = nuevaDescripcion;
    }
  }

  return data;
}

module.exports = edit;
