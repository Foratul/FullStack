
let metodos = {


    getAll: function () {
        let prom = new Promise((resolve, reject) => {
            db.query("SELECT * FROM profesores", (err, res) => {
                if (err) reject(err);
                else resolve(res)
            })
        })

        return prom;
    },

    newProfesor: function ({ nombre, apellidos, titulo }) {
        let prom = new Promise((resolve, reject) => {
            console.log("newProfesorDAO")
            db.query("INSERT INTO profesores VALUES (null, ?, ?, ?, ?, ?, ?)", [nombre, apellidos, Date.now(), 0, titulo, 0], (err, res) => {
                if (err) reject(err)
                else resolve(res)
            })
        })
        return prom;
    },

    getByID: function (id) {

        let prom = new Promise((resolve, reject) => {
            db.query("SELECT * from profesores WHERE id=?", [id], (err, res) => {
                if (err) reject(err)
                if (res.rows === 0) reject("Sin resultados")
                resolve(res[0])
            }
            )
        })
        return prom

    },

    updateProfesor: function (profesor) {
        console.log(profesor)

        let prom = new Promise((resolve, reject) => {
            db.query("UPDATE profesores SET nombre=?, apellidos=?, titulo=? where id=?", [profesor.nombre, profesor.apellidos, profesor.titulo, profesor.id], (err, res) => {
                if (err) reject(err)
                resolve(res)
            })
        })
        return prom
    },

    deleteById: function (id) {
        let prom = new Promise((resolve, reject) => {
            db.query("DELETE from profesores where id=?", [id], (err, res) => {
                if (err) reject(err)
                resolve(res)
            })
        })
        return prom
    }
}


module.exports = {
    ProfesorDAO: metodos

}