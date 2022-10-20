"use strict"

fetch("http://localhost:3000/usuarios")

.then(response => response.json())
.then(data => {
    if(data.error) return data.error;
    console.log("reponse: ", data);
})
.catch((error) => {
    console.log("error", error);
})