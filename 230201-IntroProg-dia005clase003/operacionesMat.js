function sumar (num1, num2) {
    return num1 + num2
}

function restar (num1, num2) {
    return num1 - num2
}

function multiplicar (num1, num2) {
    return num1 * num2
}

function dividir (dividendo, divisor) {
    if (divisor !== 0) {
        return dividendo / divisor
    }

    throw new Error ("Hubo un error")
}

module.exports = {
    restar, sumar, multiplicar, dividir
}
