// retorna true o false si lo encuentra

const data = require("../tasksData")

function find(pTitle) {
    for (i = 0; i < data.length; i++) {
        if (data[i].title === pTitle) {
            return true
        }
    }
    return false
}

module.exports = find