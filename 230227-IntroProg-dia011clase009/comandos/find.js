const data = require("../tasksData")

function find(titulo) {
  for(i=0; i < data.length; i++) {
    if (titulo == data[i].title) {
      return true
    }
  }
  
  return false
}

module.exports = find