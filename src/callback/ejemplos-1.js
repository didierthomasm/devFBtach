"use strict"


function funcion() {
    console.log(1);
    console.log(2);
    setTimeout(() => {
        console.log(3 + 9);
    }, 2);
    console.log(3);
    console.log("HEY");
    console.log("Carito <3");
}

funcion();

console.log("1");
console.log("2");
setTimeout(() => {
    console.log("tres");
}, 2000);
for (let i = 0; i <= 1000; i++) {
    console.log(i);;
    
}
console.log("4");