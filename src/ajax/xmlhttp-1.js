//import { XMLHttpRequest } from "xmlhttprequest";
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

//URL a la que quiero hacerle la petición
let url = "https://rickandmortyapi.com/api/character/";

function getData(url, callback) {   
    //crear un objeto a partir de la clase XMLHttpRequest
    let xhttp = new XMLHttpRequest();

    xhttp.open("GET", url, true)
    
    xhttp.onreadystatechange = () => {
        //si la respuesta ya está lista
        if(xhttp.readyState === 4) {
            //si la respuesta es satisfactoria
            if (xhttp.status === 200) {
                //console.log(xhttp.responseText);
                callback(null, JSON.parse(xhttp.responseText))
            } else {
                let error = new Error("Error: " + url)
                //console.log(error);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

getData(url, (error, data) => {
    if (error) return console.error(error)
    console.log(`Esta es mi primera data: ${data}`);
    console.log(data);
    return getData(url + data.results[0].id, (error2, data2) => {
        if (error2) return console.error(error2);
        console.log(`Esta es mi segunda data: ${data2}`);
        console.log(data2);
        return getData(url + data.results[1].id, (error3, data3) => {
            if (error3) return console.error(error3);
            console.log(`Esta es mi tercera data: ${data3}`);
            console.log(data3);
        })
    })
});


//let num = 2;
//num != 2 ? console.log("Este no es un dos") : console.log("El dos es lo máximo");