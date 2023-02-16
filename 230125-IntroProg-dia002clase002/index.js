let myName = "Leonardo"
let secondName = "Back"

// Funciones
console.log("var myName: " + myName + " - pos 2: " + myName[2])
console.log("var myName: " + myName + " - pos 2 (charAt): " + myName.charAt(2))
console.log("var myName: " + myName + " - length: " + myName.length)

const fullName = secondName + " " + myName
console.log(fullName)

function concatenarPalabras() {
    let fullNameF = secondName + " " + myName
    fullNameF = fullNameF.replace("e", "i")
    return fullNameF
}

let fName = concatenarPalabras();
console.log(fName);

// #1
function concatenarPalabras1(paramName, paramSecondName) {
    let fullNameF0 = paramSecondName + " " + paramName
    return fullNameF0
}

// #2
function concatenarPalabras2(paramName, paramSecondName) {
    const fullNameF1 = paramSecondName + " " + paramName
    return fullNameF1
}

// #3
function concatenarPalabras3(paramName, paramSecondName = "") {
    return paramSecondName + " " + paramName
}

// #4
function concatenarPalabras3(paramName, paramSecondName = " ") {
    return paramSecondName + " " + paramName
}

let name1 = concatenarPalabras1("Markos", "Gomez")
const name2 = concatenarPalabras2("Markos", "Gomez")
const name3 = concatenarPalabras3("Markos", "Gomez")
console.log(name1);
console.log(name2);
console.log(name3);
console.log(concatenarPalabras1("Markos", "Gomez"))
console.log(concatenarPalabras3("Markos"))

// Arrow functions
const concatenarArrow1 = (param1, param2, paramN) => {
    return param1 + " "+ param2 + " " + paramN
}

const concatenarArrow2 = (param1, param2, paramN) => param1 + " "+ param2 + " " + paramN

console.log(concatenarArrow1);
console.log(concatenarArrow1("A", "B", "C"));
console.log(concatenarArrow2);
console.log(concatenarArrow2("D", "E", "F"));

// Condicionales y sentencia if
const miFuction = function(name, secondName) {
    if(name == secondName)
        return "Son iguales"
    return "No son iguales"
}

console.log(miFuction("Leo", "Leo"))
console.log(miFuction("Leo", "Leon"))


function Doble(pOrigin = 1) {
    return pOrigin += pOrigin
}

console.log(Doble())

// Control: IF - ELSE IF
function isMayor20(pNum) {
    if (pNum > 20)
        return "Es Mayor a 20"
    else
        return "Es Menor a 20"
}

function isMayorEquals20(pNum) {
    if (pNum > 20)
        return "Es Mayor a 20"
    else if (pNum == 20)
        return "Es igual a 20"
    else
        return "Es Menor a 20"
}

console.log(" 15 es mayor a 20: ", isMayor20(15))
console.log(" 25 es mayor a 20: ", isMayor20(20))
console.log(" 25 es mayor a 20: ", isMayor20(25))
console.log(" 15 es mayor o igual: ",isMayorEquals20(15))
console.log(" 25 es mayor o igual: ",isMayorEquals20(25))
console.log(" 20 es mayor o igual: ",isMayorEquals20(20))

// Control: Switch
function testSwitch(pLetter) {
    switch(pLetter) {
        case "A":
            console.log("A -ok")
            break;
        case "B":
            console.log("B -ok")
            break;
        case "C":
            console.log("C -ok")
            break;
        default:
            console.log("None")
            break;
    }
}

testSwitch("A")
testSwitch("B")
testSwitch("E")

/*
console.log("testSwitch: ", testSwitch("A"))
console.log("testSwitch: ", testSwitch("B"))
console.log("testSwitch: ", testSwitch("E"))
*/

// Control: Do While

let num = 9
do {
    console.log(++num)
}
while (num < 8)

// Control:  While
while (num < 11){
    num++
    console.log(num)
}

// Control:  FOR
const listA = ["A", "B", 30]
for (let i = 0; i < listA.length; i++){
    listA[i] = listA[i] + "#"
    console.log("Posicion: "+ i + ", contiene: " +listA[i])
}

listA.push(13)
console.log(listA)

const itemDelete = listA.pop()
console.log(listA)
console.log(itemDelete)
