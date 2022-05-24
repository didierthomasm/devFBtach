"use strict"

const {usuarioSinc} = require("./usuarios.js")

console.log("Inicio del programa");
console.time("inicio");

console.log(usuarioSinc(1));
console.log(usuarioSinc(2));

console.timeEnd("inicio");
console.log("Fin del programa");