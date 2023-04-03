// Escribir un proramam que permita 
// ingresar nombre y apellido, que primero
// me salude y luego, me "indique cuantas letras suman en total nombre y apellido juntos"


const saludar = (nombre, apellido) => "Hola como estas " + `${nombre} ${apellido}`
const contar = (nombre, apellido) => nombre.length + apellido.length

function principal(nombre, apellido, callbackSaludar, callbackContar){
    console.log("# " + `${callbackSaludar(nombre, apellido)}`);
    console.log("# Cant. letras es: " + `${callbackContar(nombre, apellido)}`);
}

principal("Leo", "Back", saludar, contar)