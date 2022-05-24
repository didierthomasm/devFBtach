"use strict"

const { response } = require("express");
const res = require("express/lib/response");

const promesa = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 10);

    setTimeout(
        () => number > 3
            //? resolve(`Todo bien!, el número es ${number} :)`)
            ? resolve(number)
            : reject(`Todo mal!, el número es ${number} :(`)
    , 1000);
})

function suma(num1, num2) {
    return num1 + num2
}

function mult(num1, num2) {
    return num1 * num2
}

promesa
    .then(response => {
        console.log("response1 ", response);
        return suma(response, 5);
    })
    .then(response => {
        console.log("response2", response);
        return mult(response, 5);
    })
    .then(response => {
        console.log("response3", response);
        console.log("Fin de operaciones, el valor obtenido es: ", response);
    })
    .catch((error) => {
        console.log("error", error);
    })