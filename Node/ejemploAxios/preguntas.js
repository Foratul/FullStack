const readline = require("readline") //equivale a import
const rl = readline.createInterface(process.stdin, process.stdout); // metodo entrada / salida

let fs = require("fs")
let files = fs.readdirSync(".") //SINCRONO
console.log(files)
fs.readdir(".", (err, files)
    => { console.log(files) })
// ASYNCRONO

let resultados = []
let r = 0;


rl.on("close", function () { console.log("CERRADA APLICASION") })

rl.question("¿Como te llamas? ", (answer) => {
    fs.appendFile("nombre.md", "\n" + answer + "\n", (err) => {
        if (err) console.log("error")
    })


    rl.setPrompt("Dime una cosa ");

    rl.prompt();
})
//  event line retorno de carror - tiene input

rl.on("line", function (input) {
    if (input === "exit") {
        rl.close()
        console.log(resultados)
    }
    else {
        r++
        resultados.push("Aqui se ha escrito " + input);
        fs.appendFile("nombre.md", "respuesta " + r + " " + input, (err) => {
            if (err) console.log("error")
        })

        rl.prompt()
    }
}
)

