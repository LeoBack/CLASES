// Crear archivo productos.json
// 
// {
//     "nombre": "Cafe"
// }
//
// Ejecutar: 
//   npm init -y
//
// Modificamos a:
//  "scripts": {
//    "start": "node index.js"
//  },
//
// Ejecutamos en consola: 
//   npm start
//
// Ejecutamos en consola: 
//   npm i readline-sync 
// o 
//   npm install readline-sync 
// 
//

console.log("Hola hoy vemos archivos .json");

const readlineSync = require("readline-sync")

const userName = readlineSync.question("Ingrese su nomnbre: ")

console.log("Hola como estas ", userName)


console.log(process.argv)

switch(process.argv[0]) {
    case "saludar":
        console.log("Chau Leo")
        break
    case "despedir":
        console.log("Chau Leo")
        break
    default:
        console.log("#")
        break
}

