"use strict"

function hola() {
    return console.log("Hola Mundo!");
}

setTimeout(hola , 3000);

/*
-funcion del navegador.
-funcion de orden superior
-funcion asincrona */
setTimeout(() => {
    console.log("Hola");
}, 3000);

let i = 0;

setInterval(() => {
    console.log(i);
}, 1000);