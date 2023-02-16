// retorna titulo como array de string

const data = require("../tasksData")

function list() {
    let lista = []
    for (i = 0; i < data.length; i++) {
        lista.push(data[i].title)
    }
    return lista
}

module.exports = list