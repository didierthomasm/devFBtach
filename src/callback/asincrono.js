"use strict"

const {usuarioAsinc,} = require("./usuarios.js")

console.log("Inicio del programa");
console.time("inicio");

usuarioAsinc(1, (usuario) => {
    console.log(usuario);
})

usuarioAsinc(2, (usuario) => {
    console.log(usuario);
    console.timeEnd("inicio");
})


console.log("Fin del programa");