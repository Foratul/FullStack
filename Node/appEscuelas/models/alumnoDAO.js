// ENLAZANDO LO QUE TENGO EN JAVA A EXPRESS DE NEOLAND
// LO QUE HEMOS LLAMADO MODELO , LO LLAMO DAO 
// Y EN LUGAR DE HACER LOS METODOS POR AHI SUELTOS QUE ME DA TOC, los METO COMO ATRIBUTOS, 
// ASI NO TENGO QUE EXPORTARLOS  UNO A UNO

// OTRA MANERA DE HACER EXPORT / PUBLIC CLASS???????




let AlumnoDAO = {
    getAll: function getAll() {
        let prom = new Promise((resolve, reject) => {
            db.query("select * from alumnos", (err, rows) => {
                resolve(rows)
                reject(err)
            }
            )
        })
        return prom
    },
    insertarAlumno: function insertarAlumno({ nombre, apellidos, edad, email, notamedia, fecha_matricula = Date.now(), matricula, discapacidad = 0, sexo }) {
        console.log("insertarAlumno")

        let prom = new Promise((resolve, reject) => {
            db.query("insert into alumnos (nombre,apellidos,edad,email,notamedia,fecha_matricula, matricula,discapacidad,sexo) values(?,?,?,?,?,?,?,?,?)", [nombre, apellidos, edad, email, notamedia, fecha_matricula, matricula, discapacidad, sexo], (err, result) => {
                if (err) reject(err)
                else resolve(result)
            })
        }
            //   params id, nombre, apellidos, edad, email, notamedia, fecha_matricula, matricula, discapacidad, sexo, fk_sedes
        )
        return prom
    }
    , getAllCallBack: function (doneCallback) {

        db.query("select * from alumnos", (err, rows) => {
            if (err) doneCallback(err)
            else doneCallback(null, rows)
        }
        )
    },
    getById: function getById(id) {
        let prom = new Promise((resolve, reject) => {
            db.query("select * from alumnos where id = ?", [id], (err, rows) => {
                if (err) reject(err)
                if (rows.length === 1) resolve(rows[0])
                else reject("Alumno no encontrado")
            })
        })

        return prom;

    }
    , updateById: function updateById({ id, nombre, apellidos, edad, email, notamedia, fecha_matricula, matricula, discapacidad, sexo }) {
        let prom = new Promise((resolve, reject) => {
            db.query("UPDATE alumnos SET nombre=?,apellidos=?,edad=?,email=?,notamedia=?,fecha_matricula=?,matricula=?,discapacidad=?,sexo=? WHERE id=?", [nombre, apellidos, edad, email, notamedia, fecha_matricula, matricula, discapacidad, sexo, id], (err, result) => {
                if (err) reject(err)
                resolve(result)
            })
        })
        return prom
    }
    , deleteById: function deleteById(id) {
        console.log("DELETE DAO")

        let prom = new Promise((resolve, reject) => {
            db.query("DELETE from alumnos where id=?", [id], (err, result) => {
                if (err) { reject(err) }
                else resolve(result)
            })
        })
        return prom
    }
    , updateFieldById: function updateFieldById(id, field) { }
}

// MODO MARIO
//  funciones sueltas y luego exportar una a una



// OPCION 1

//OPCION 2

// function getAll() { }


// //OPCION3

// exports.getAll = () => { }
module.exports = {
    AlumnoDAO: AlumnoDAO

}