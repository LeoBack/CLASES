/*
 * VARIABLES
 */

function test() {
  var a = "A";
  var b = "B";

  if (true) {
    var a = "a";
    let b = "b";
  }

  console.log(a);
  console.log(b);
}

test();

/* notas
 * var => (global) se pisa
 * let => (limitado) vive solo en campo limitado entre llaves
 */

/*
 * Desectruturing array
 */

const [primerNom, secgundoNom] = ["A", "B"];
console.log(primerNom);
console.log(secgundoNom);

const listA = ["a", "b"];
const [primerNomA, secgundoNomA] = listA;
console.log(primerNomA);
console.log(secgundoNomA);

/*
 * Desectruturing objeto
 */

const datos = {
  nombre: "Leo",
  edad: 30,
  direccion: "1200",
  pais: "arg",
};
const { nombre, edad } = datos; // Atributos que quiero
const { pais } = datos; // Solo pais sin resto
console.log(nombre);
console.log(edad);
console.log(pais);

// con resto objeto
const datosA = {
  nombr: "Leo",
  edad: 30,
  direccion: "1200",
  pais: "arg",
};
const { nombr, ...rest } = datosA; // Solo nombre, y el resto queda en objeto
console.log(nombr);
console.log(rest);

/*
 * concatena array
 */

const num1 = [1, 2, 3, 4];
const num2 = [5, 6, 7, 8];
const concatenado = [...num1, ...num2];
console.log(concatenado);

// Desectruturing objeto  (parametro)
function mostrarNombrePais(data) {
  console.log("Nombre: ", data.nombre);
  console.log("Pais: ", data.pais);
}
mostrarNombrePais(datos);

// es lo mismo que
function mostrarNombrePaisTwo({ nombre, pais }) {
  console.log("Nombre: ", nombre);
  console.log("Pais: ", pais);
}
mostrarNombrePaisTwo(datos);

// Desectruturing array (parametro)
const datosB = ["Leo", "arg"];
function mostrarNombrePaisTree(nombre, pais) {
  console.log("Nombre: ", nombre);
  console.log("Pais: ", pais);
}
mostrarNombrePaisTree(...datosB);

const [a = 1] = []; // a = 1
const [b = 1] = [5]; // b = 5

/*
*   Spread operator
*/
function unir(...y) {
  console.log(y);
}
unir(3, 4, "hola");

function desunir(x, y, z) {
  console.log(x + y + z);
}
desunir(...[1, 2, 3]);
