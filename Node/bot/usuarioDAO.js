let db = require("./db.js")


let usuarioDAO = {
    getAll: function getAll() {
        console.log("se ha llamaod a get All usuarioDAO")
        let prom = new Promise((resolve, reject) => {
            db.query("select * from usuarios", (err, rows) => {
                resolve(rows)
                reject(err)
            }
            )
        })
        return prom
    },

    getByTelegramID(id) {
        let prom = new Promise((resolve, reject) => {
            db.query("SELECT * from bot.usuarios where telegramID =?", [id], (err, rows) => {
                if (err) reject(err)
                resolve(rows)
            })

        })
        return prom

    },

    insertUsuario: function insertUsuario(objetoFrom) {
        console.log("se ha llamaod a insertDAO")
        let prom = new Promise((resolve, reject) => {
            db.query("INSERT INTO bot.usuarios (username, first_name, last_name, telegramID) values (?, ?, ?, ?)", [objetoFrom.first_name + objetoFrom.last_name, objetoFrom.first_name, objetoFrom.last_name, objetoFrom.id])
            resolve("SE HA INSERTADO BIEN")
            reject("SE HA INSERTADO MAL")
        })
        return prom



    }
}

module.exports = {
    usuarioDAO: usuarioDAO

}