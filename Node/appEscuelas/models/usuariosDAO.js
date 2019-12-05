
let bcrypt = require("bcryptjs")



let metodos = {


    getAll: function () {
        let prom = new Promise((resolve, reject) => {
            db.query("SELECT * FROM usuarios", (err, res) => {
                if (err) reject(err);
                else resolve(res)
            })
        })
        return prom;
    },

    newUsuario: function ({ username, password, email }) {
        let prom = new Promise((resolve, reject) => {

            // comprobar que el mail no está en la bd
            password = bcrypt.hashSync(password, 10)

            db.query("INSERT INTO usuarios VALUES (null, ?, ?, ?)", [username, password, email], (err, res) => {
                if (err) reject(err)
                else resolve(res)
            })
        })
        return prom;
    },
    getByID: function (id) {

        let prom = new Promise((resolve, reject) => {
            console.log("ID", id)
            db.query("SELECT * from usuarios WHERE id=?", [id], (err, res) => {
                if (err) reject(err)
                if (res.rows === 0) reject("Sin resultados")
                resolve(res[0])
            }
            )
        })
        return prom
    },

    getByEmail: function (email) {
        let prom = new Promise((resolve, reject) => {
            db.query("SELECT * from usuarios where email=?", [email], (err, res) => {
                if (err) reject(err)
                if (res.rows === 0) reject("usuario y/o contraseña incorrectos")
                resolve(res[0])
            })

        })
        return prom
    },

    updateUsario: function (profesor) {
        console.log(profesor)

        let prom = new Promise((resolve, reject) => {
            db.query("UPDATE usuarios SET nombre=?, apellidos=?, titulo=? where id=?", [profesor.nombre, profesor.apellidos, profesor.titulo, profesor.id], (err, res) => {
                if (err) reject(err)
                resolve(res)
            })
        })
        return prom
    },

    deleteById: function (id) {
        let prom = new Promise((resolve, reject) => {
            db.query("DELETE from usuario where id=?", [id], (err, res) => {
                if (err) reject(err)
                resolve(res)
            })
        })
        return prom
    }
}

module.exports = {
    usuarioDAO: metodos

}