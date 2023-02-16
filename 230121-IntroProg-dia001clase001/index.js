// Variables
let myName = "Leonardo"             // string
let age = 32                        // numerico
let teamBoca = false                // boolean
console.log("Mi nombre es: ", myName)
console.log("Mi edad es: ", age)
console.log("Es incha de Boca: ", teamBoca)

// Array
let list = ["Jorge", "Flor", 33]    // array (un array tiene n cantidad de elementos y n-1 cantidad de posiciones)
console.log("Array Completo: ", list)
console.log("Array elemento 0: ", list[0])

console.log("Ciclo for, n element:", list.length)
for (i=0; i<list.length; i++)
    console.log("Array elemento ", i, ": ", list[i])

// Objetos
let objeto = {
    name: "Leo",
    lastName: "Back",
    age: 32,
    jobs: ["Electronic", "Printer 3D", "Cycling"] 
}

console.log("Objeto: ", objeto)
console.log("Objeto Name: ", objeto.name)
console.log("Objeto Age: ", objeto.age)
console.log("Objeto Jobs elemento 0: ", objeto.jobs[0])

console.log("Ciclo for, n element:", objeto.jobs.length)
for (i=0; i<objeto.jobs.length; i++)
    console.log("Objeto Jobs elemento ", i, ": ", objeto.jobs[i])