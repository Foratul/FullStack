var express = require('express');
var router = express.Router();

//ruta /profesores

let ProfesorDAO = require("../models/profesorDAO").ProfesorDAO


router.get("/", function (req, res) {
  console.log("estamos en profesores")
  ProfesorDAO.getAll()
    .then((resolve) => {
      console.log(resolve)
      res.render("profesores.pug", { arrayProfesores: resolve })
    })
    .catch((reject) => { console.log("err") })
})


//ruta /profesores/new

router.get("/new", (req, res) => {
  res.render("profesorNew.pug")
})

router.post("/create", (req, res) => {
  console.log("ruta : profesores create")
  console.log(req.body)

  ProfesorDAO.newProfesor(req.body)
    .then(
      (result) => { console.log(result) })
    .catch((err) => { console.log(err) })
  res.redirect("/profesores")
})

router.get("/edit/:profesorID", async (req, res) => {
  let result = await ProfesorDAO.getByID(req.params.profesorID)
  res.render("profesorEdit.pug", { profesor: result })
})


router.post("/update", async (req, res) => {

  await ProfesorDAO.updateProfesor(req.body)
  res.redirect("/profesores")



})




module.exports = router;
