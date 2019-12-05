const mysql = require("mysql")

// let p = process.env
const pool = mysql.createPool(

    {
        host: "127.0.0.1",
        user: "root",
        password: "",
        port: 3306,
        database: "bot"
    })

module.exports = db;