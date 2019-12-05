const mysql = require("mysql")

let p = process.env
const pool = mysql.createPool(

    {
        host: p.HOSTNAME,
        user: p.USERDB,
        password: p.PASSWORDDB,
        port: p.PORTDB,
        database: p.DATABASE
    })

global.db = pool //variable global