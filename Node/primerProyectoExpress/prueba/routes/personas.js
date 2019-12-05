var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('listaPersonas', {
        nombre: "Mario por variable",
        clases: ["uno", "dos", "tres", "cuatro"],
        manzanas: 13
    })


    // res.send("Personas RAIZ")
})

router.get('/new/', function (req, res, next) {
    res.send("Personas NEW")
})

router.post('/create/', function (req, res, next) {
    req.body = JSON.parse(JSON.stringify(req.body));
    let object = req.body;


    let texto = "Personas POST con body \n"
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            const element = object[key];
            texto += [key] + " : " + element + "\n"
        }
    }
    res.send(texto)
}
)



module.exports = router;
