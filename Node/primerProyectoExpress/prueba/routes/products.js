var express = require('express');
var router = express.Router();

//entra por products


router.get('/', function (req, res) {
    console.log("products")

    res.send("Ruta /products");
});

router.get("/all.json", (req, res) => {
    const arrProducts = [
        { nombre: "Thermomix", precio: 1000 },
        { nombre: "Lavadora Bosch", precio: 564 },
        { nombre: "Horno Pirolitico", precio: 455 }]
    res.json(arrProducts)
})




//EL COMODIN SE PONE AL FINAL 

router.get('/:idProducto', function (req, res) {
    res.send("Recupero un producto por ID - valor de req.params.idProducto = " + req.params.idProducto);

});

router.post('/create', function (req, res) {

    console.log(req.method)

    res.send("peticion / productos / create " + "\n" +
        "nombre :" + req.body.nombre + "\n" +
        "precio :" + req.body.precio + "\n" +
        "descripcion :" + req.body.descripcion);

});

module.exports = router;
