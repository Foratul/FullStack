var express = require('express');
var router = express.Router();

var AlumnoDAO = require("../../models/alumnoDAO").AlumnoDAO

let middlewares = require("../middlewares").metodos


router.use(middlewares.checkToken)

//get localchost /api/alumnos

router.get('/', async function (req, res, next) {

    console.log("entramos en api alumnos")

    let rows = await AlumnoDAO.getAll();
    res.json(rows)
})

//post localchost /api/alumnos


router.post('/', async (req, res) => {
    const result = await AlumnoDAO.insertarAlumno(req.body);
    if (result.affectedRows === 1) {
        const alumnos = await AlumnoDAO.getById(result.insertId)

        res.json(alumnos)
    }
    else { res.json({ error: "Error en la insercion" }) }
})

//put localchost /api/alumnos

router.put("/", async (req, res) => {
    const result = await AlumnoDAO.updateById(req.body)
    if (result.affectedRows === 1) {
        res.json(await AlumnoDAO.getById(req.body.id))
    }
})

// delete localhost /api/alumnos

router.delete("/", async (req, res) => {
    const result = await AlumnoDAO.deleteById(req.body.id)
    if (result.affectedRows === 1) {
        res.json({ resutlado: result, mensaje: "Borrado con exito" })
    }
    else res.json({ mensaje: "No se ha borrado" })


})








module.exports = router;
