const lista = require("./comandos/list.js")
const find = require("./comandos/find.js")
// const filter = require("./comandos/filter.js")
const edit = require("./comandos/edit.js")
// const retornar = require("./comandos/return.js")
const help = require("./comandos/help.js")


// Funciones
const printList = () => { console.log("> Comando list: ", lista()) }
const printHelp = () => { console.log(help()) }

const printFind = (pTitle) => { 
    console.log(!pTitle ? 
        "> Comando find error: Titulo no ingresado." : 
        "> Comando find: ", pTitle, " = ", find(pTitle))
}

const printEdit = (pTitle, pNewDescripcion) => {
    if ((pTitle === undefined) | (pNewDescripcion === undefined)) {
        console.log("> Comando Edit error: Titulo y/o Descripcion no ingresado/s.")
    }
    else {
        console.log("> Comando edit: ", edit(pTitle, pNewDescripcion))
    }
}

// const printFilter = (pTitle) => { 
//     console.log("> Comando filter: ", filter(pTitle))
//  }

// const printRetornar = (pTitle) => { 
//     console.log(pTitle === undefined ? 
//         "> Comando return error: Titulo no ingresado." : "> Comando return: ", retornar(pTitle))
// }

const printDefault = () => {
    console.log("No se encontro argumento valido.\nEjecute para mas informacion:\n- npm start help")
}

// MAIN
const command = process.argv[2]
const param1 = process.argv[3]
const param2 = process.argv[4]

switch(command) {
    case "list": printList(); break
    case "find": printFind(param1); break
    case "edit": printEdit(param1, param2); break
    // case "filter": printFilter(param1); break
    // case "return": printRetornar(param1); break
    case "help": printHelp(); break
    default: printDefault(); break
}
