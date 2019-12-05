let jwt = require('jwt-simple')
let moment = require("moment")
let metodos = {

    checkToken: function (req, res, next) {
        console.log("pasa por check")
        if (!req.headers['user-token']) {
            return res.json({ error: "Tienes que incluir la cabecera user-token" })
        }
        let token = req.headers['user-token']
        let payload = null
        try {
            payload = jwt.decode(token, process.env.TOKEN_KEY)
        }
        catch (err) { return res.json({ error: "Token invalido" }) }
        console.log(payload)
        if (moment().unix() > payload.expiresAt) { return res.json({ error: "El Token está caducado, pide otro" }) }
        next()
    }

}
module.exports = {
    metodos: metodos
}