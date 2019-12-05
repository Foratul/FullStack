const express = require('express');

const app = express();

console.log("Cargamos index.js")

app.get('/info', (req, res) => {
    res.send('Estoy en la url /info');
});

app.get('/contact', (req, res) => {
    res.send('Estoy en la url /contact');
});

app.post('/formulario', (req, res) => {
    res.send('Estoy en la url /formulario con POST!');
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000 ¡¡GUAY!!...');
});