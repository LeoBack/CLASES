// retorna titulo y descripcion como texto dede un indice

const data = require("../tasksData")

function retornar(pTitle) {
    let lista = []
    for (i = 0; i < data.length; i++) {
        if (data[i].title.includes(pTitle)) {
            lista.push(data[i].desc)
        }
    }

    return lista.length == 0 ? "No hay elementos" : lista
}

module.exports = retornar