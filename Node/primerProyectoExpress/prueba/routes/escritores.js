var express = require('express');
var router = express.Router();
var arrayEscritores = require("../bin/db/escritores")


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('listaEscritores', { title: 'VIVA EL VINO', arrayEscritores: arrayEscritores });
});

module.exports = router;
