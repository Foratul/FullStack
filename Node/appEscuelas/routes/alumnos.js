var express = require('express');
var router = express.Router();
var moment = require('moment');


var AlumnoDAO = require("../models/alumnoDAO").AlumnoDAO
let nombres = [

  { nombreVisible: "Nombre", nombreClave: "nombre" },
  { nombreVisible: "Apellidos", nombreClave: "apellidos" },
  { nombreVisible: "Correo Electrónico", nombreClave: "email" },
  { nombreVisible: "Nota Media", nombreClave: "notamedia" },
  { nombreVisible: "Fecha de Matrículacion", nombreClave: "fecha_matricula" },
  { nombreVisible: "Matrícula", nombreClave: "matricula" },
  { nombreVisible: "Discapacidad", nombreClave: "discapacidad" },
  { nombreVisible: "Sexo", nombreClave: "sexo" }
]


/* GET alumnos page. */
router.get('/', function (req, res, next) {
  console.log("entramos en alumnos")
  AlumnoDAO.getAll()
    .then((rows) => {
      for (const row of rows) {
        // row.fecha_matricula = row.fecha_matricula)

      }
      res.render('alumnos.pug', { arrayAlumnos: rows, exito: req.query.exito });
      let exito = false
    })
    .catch((err) => { console.log(err) })
});

router.get('/promesa', async (req, res, next) => {
  const rows = await AlumnoDAO.getAll();
  res.render("alumnos.pug", { arrayAlumnos: rows })

}
)

router.get('/new', (req, res, next) => {

  res.render("alumnosForm.pug", {})

})

router.get("/edit/:alumnoId", (req, res) => {
  AlumnoDAO.getById(req.params.alumnoId)
    .then((row) => {
      res.render("formGenerico", { alumno: row, nombres: nombres })
    })
    .catch(error => { console.log(error) })
})

router.post('/create', (req, res) => {

  console.log("entramos create")
  AlumnoDAO.insertarAlumno(req.body)
    .then(result => {
      console.log(result)
      res.redirect("/alumnos?exito=true")
      res.result
    })
    .catch(err => { console.log(err) })
})

router.post('/update', (req, res) => {
  console.log(console.log(req.body))
  AlumnoDAO.updateById(req.body)
    .then(result => {
      console.log(result)
      res.redirect("/alumnos?exito=true")
    })
    .catch((err) => {
      console.log(err)
      res.redirect("/alumnos?exito=false")
    })
})

module.exports = router;
