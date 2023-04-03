const data = require("../tasksData")

function edit(pTitle, pNewDescription) {
    for (i = 0; i < data.length; i++) {
        if ( data[i].title == pTitle) {
            data[i].desc = pNewDescription
        }
    }
    return data
}

module.exports = edit