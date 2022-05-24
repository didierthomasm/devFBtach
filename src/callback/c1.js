"use strict"

///Función clásica
function saludo() {
    return console.log("Hola");
}

//Función de flecha (arrow function).
//.this no funciona en ellas
const saludo = () => {
    return console.log("Hola");
}

//forma simple de arrow function
const saludo = nombre => console.log("Hola " + nombre);


function suma(num1, num2) {
    return console.log(num1 + num2);
}

function resta(num1, num2) {
    return console.log(num1 - num2);
}

function division(num1, num2) {
    return console.log(num1 / num2);
}

function multiplicacion(num1, num2) {
    return console.log(num1 * num2);
}

//funcion de orden superior = funcion que recibe como parametro otra funcion funcion(funcion)
function calculadora(num1, num2, computo) {
    //callback = funcion de orden superior que invoca otra funcion
    return computo(num1, num2);
}

calculadora(98, 16, multiplicacion);

//Ejecutar función
saludo("Didier");