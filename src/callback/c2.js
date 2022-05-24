"use strict"

function saludar() {
    return console.log("Hola Mundo!");
}

const greetings = (name) => console.log(`Hola ${name}`);

const run = (runFunction, name) => runFunction(name);

function ejecutarFuncion(otraFuncion) {
    return otraFuncion();
}


//ejecutarFuncion(saludar);

run(greetings, "Didier");