const miLista = ["Leo", 33, "Back"]

console.log("Array al inicio: ", miLista)

miLista.push("Alberto")

console.log("Array luego del push: ", miLista)

miLista.pop()

console.log("Array luego del pop: ", miLista)

const nuevoTexto = miLista.join(", ")

console.log("nuevo Array: ", nuevoTexto)

const elementoaBuscar = "Leo"
let indice = miLista.indexOf(elementoaBuscar)

console.log("indexOf Posicion: ", indice, "Buscar:", elementoaBuscar )
console.log(indice !== -1 ? "indexOf Elemento encontrado" : "indexOf Elemento no encontrado")

indice = miLista.lastIndexOf(elementoaBuscar)

console.log("LastIndexOf Posicion: ", indice, "Buscar:", elementoaBuscar )
console.log(indice !== -1 ? "LastIndexOf Elemento encontrado" : "indexOf Elemento no encontrado")

console.log(miLista.includes(33) ? "El array incluye: 33" : "El array no incluye: 33")

//const subLista = miLista.slice(1,3)
const subLista = miLista.slice(0)
console.log("subLista: ", subLista)

const months = ['jan', 'March', 'April', 'June']
console.log("Months origin: ", months)
months.splice(1, 1,'Feb')
console.log("(splice) Months new: ", months)
months.splice(2, 1)
console.log("(splice) Months new: ", months)

miLista.shift()
console.log("miLista shift: ", miLista)
miLista.unshift("Hola")
console.log("miLista unshift: ", miLista)
