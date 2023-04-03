/*
 *   Metodos de Array
 */

// forEach

const lista = ["a1", "b1", "c1"];
const listaTwo = [
  { A: "a1", b: "1" },
  { A: "b1", b: "2" },
  { A: "c1", b: "3" },
];

// function(elemento) {
// }

lista.forEach(function (elemento) {
  console.log(elemento);
});

listaTwo.forEach(function (elemento, i) {
  console.log(i + ": " + elemento.A);
});

// map
const elementUpdate = lista.map(function (elemento, i) {
  return elemento + "3";
});

console.log("map: " + elementUpdate);

// filter
const filtrados = listaTwo.filter(function (elemento, i) {
  return elemento.A.charAt(0) === "b";
});

//console.log("filtrados: " + filtrados);
console.log(filtrados);

// reduce
const numeros = [2, 5, 7, 8];

// ejemplo sin usar reduce
let acumulador = 0;
for (i = 0; i < numeros.length; i++) {
  acumulador = acumulador + numeros[i];
}
console.log("for: " + acumulador);

// usando reduce
const resultado = numeros.reduce((acc, elemento) => {
  return acc + elemento;
}); // El acc arranca cargado con el primer valor del array y elemeto con el segundo

console.log("reduce #1: " + resultado)


const resultadoOne = numeros.reduce((acc, elemento) => {
  return acc + elemento;
}, 10); // El acc arranco precargado con 10

console.log("reduce #2: " + resultadoOne)

// usando reduce con objeto ejemplo
const numerosArray = [[2, 5], [7, 8]];

const resultadoTwo = numerosArray.reduce((acc, elemento) => {
  const subResultado = elemento.reduce((accTwo, elementoTwo) => {
    return accTwo + elementoTwo;
  });
  return acc + subResultado;
},0 );

console.log("reduce #3: " + resultadoTwo)