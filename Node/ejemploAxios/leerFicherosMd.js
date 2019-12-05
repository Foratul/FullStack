let fs = require("fs")

datos = []
fs.readdir("./ficheros", (error, resultado) => {
    if (error) console.log(error)
    datos = resultado.filter((item) => { return item.endsWith(".md") })
    console.log(datos)

    for (const dato of datos) {
        fs.readFile("./ficheros/" + dato, 'UTF-8', (error, resultado) => {
            if (error) console.log(error)
            console.log("fichero " + dato, "contenido " + resultado)
        })
    }
})

fs.readdir("./ficheros", (error, resultado) => {
    resultado.filter((dato) => { dato.endsWith(".md") }).forEach((dato) => {
        fs.readFile(".ficheros/" + dato, "UTF-", (error, resultado) => {
            console.log(resultado)
        })
    })
})
