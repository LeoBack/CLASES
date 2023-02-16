// retorna titulo como array de string

const data = require("../tasksData")

function filter(pFilter) {
    let lista = []
    for (i = 0; i < data.length; i++) {
        if (data[i].title.includes(pFilter)) {
            lista.push(data[i])
        }
    }

    return lista.length === 0 ? "No hay elementos" : lista
    //return lista
}

module.exports = filter