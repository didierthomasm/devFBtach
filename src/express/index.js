const express = require('express');
const app = express();
const datosUsuarios = require('../datos-json/usuarios.json')

app.get('/', function (req, res) {
    res.send('Hello World');
})

app.get('/usuarios', function (req, res) {
    console.log("datosUsuarios ", datosUsuarios.datos);
    console.log(req.query);

    const respuesta = datosUsuarios.datos.find(dato => dato.id === req.query.id && dato.nombre === req.query.nombre)

    res.send(respuesta);
})

app.get('/usuarios/:id', function (req, res) {
    console.log(req.params);
    const parametros = req.params;
    const datos = datosUsuarios.datos;
    const respuesta = [];
    datos.forEach(dato => {
        const posicion = dato.nombre.indexOf(parametros.id);
        console.log("posicion", posicion);
        if (posicion > 0) {
            respuesta.push(datos[posicion]);
        }
    });
    console.log("respuesta", respuesta);
    res.send(respuesta);
})

app.post('/usuarios', function (req, res) {
    res.send("");
})


app.listen(3000)