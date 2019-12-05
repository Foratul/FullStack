var express = require('express');
var router = express.Router();

var ProfesorDAO = require("../../models/ProfesorDAO").ProfesorDAO

// read
router.get("/", async (req, res) => {

    console.log("api/profesores")
    res.json(await ProfesorDAO.getAll())
})

router.get("/edit/*", async (req, res) => {

    console.log(req.url)
    // res.json(await ProfesorDAO.getAll())
})
// create
router.put("/", async (req, res) => {

    let result = await ProfesorDAO.newProfesor(req.body)
    res.json(await ProfesorDAO.getByID(result.insertId))

})

//update

router.post("/", async (req, res) => {
    let result = await ProfesorDAO.updateProfesor(req.body)
    res.json(result)
})

router.delete("/", async (req, res) => {
    let result = await ProfesorDAO.deleteById(req.body.id)
    if (result.rows == 1) res.json({ resultado: result, mensaeje: "borrado con exito" })
    else res.json({ mensaje: "algo ha fallado" })

})




module.exports = router;
