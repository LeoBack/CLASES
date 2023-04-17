function saludarOne() {
    return "Hola"
}

function principalOne(callback) {
    const saludo = callback();
    return saludo + " como estas";
}

const saludoFinalOne = principalOne(saludarOne)

console.log(saludoFinalOne)

//------------------------------------
function saludarTwo(nombre) {
    return "Hola " + nombre
}

function principalTwo(callback, nombre) {
    const saludo = callback(nombre);
    return saludo + " como estas";
}

const saludoFinalTwo = principalTwo(saludarTwo, "Leo")

console.log(saludoFinalTwo)

//------------------------------------
function saludoMejorado(nombre) {
    return "Hola genio " + nombre
}

function principalTree(callback, nombre){
    const saludo = callback(nombre);
    return saludo + " Como estas";
}

const saludoFinalTree = principalTree(saludoMejorado, "Leo")

console.log(saludoFinalTree)

//------------------------------------