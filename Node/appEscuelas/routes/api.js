var express = require('express');
var router = express.Router();
const apiAlumnosRouter = require("./api/alumnos")
const apiProfesoresRouter = require("./api/profesores")
const apiUsuarios = require("./api/usuarios.js")

// cuando me llega / alumnos usas ese otro JS

router.use('/alumnos', apiAlumnosRouter)
router.use('/profesores', apiProfesoresRouter)
router.use('/usuarios', apiUsuarios)


// / API
router.get('/', function (req, res, next) {
  console.log("entramos en api")
  res.render('index', { title: 'ESTAMOS EN API' });
});


module.exports = router;
