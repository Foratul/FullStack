let http = require("http")
let https = require("https")

let server = http.createServer((req, res) => {

    console.log(req.url)
    console.log(req.method)

    res.end("Hola Mundo")
});


server.listen(3000)