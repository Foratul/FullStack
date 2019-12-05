var express = require('express');
var router = express.Router();

let usuarioDAO = require("../../models/usuariosDAO").usuarioDAO

let bcrypt = require("bcryptjs")
let jwt = require("jwt-simple")
let moment = require("moment")
let middlewares = require("../middlewares").metodos


// router.use(middlewares.checkToken)


router.get("/", async (req, res, next) => {



    console.log("estamos en /api/usuarios")
    res.json(await usuarioDAO.getAll())

})

// /api//usuario/registro
router.post("/registro", async (req, res) => {
    console.log("Estamos en api/usuario/registro")
    let result = await usuarioDAO.newUsuario(req.body)
    let interim = await usuarioDAO.getByID(result.insertId)
    res.json(interim)



})
//api/usuario/login
// email & password

router.post("/login", (req, res) => {
    console.log("Estamos en api/usuario/login" + "me ha llegado " + (req.body)
    )
    let passwordPlain = req.body.password
    usuarioDAO.getByEmail(req.body.email)
        .then(
            (usuario) => {
                console.log("then", passwordPlain, usuario.password)
                let iguales = bcrypt.compareSync(passwordPlain, usuario.password)
                console.log(iguales)
                let resultado = null
                if (iguales) {
                    resultado = { exito: true, mensaje: crearToken(usuario) }
                }
                else { resultado = { exito: false, mensaje: "usuario y/o contraseña incorrectos" } }
                res.json(resultado)

            })
        .catch((err) => { res.json({ mensaje: err }) })

})


function crearToken(usuario) {
    let payload = {
        userId: usuario.id,
        createdAt: moment().unix(),
        expiresAt: moment().add(50, "minutes").unix()
    }
    return jwt.encode(payload, process.env.TOKEN_KEY)
}

module.exports = router;
