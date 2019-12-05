const readline = require("readline") //equivale a import
const rl = readline.createInterface(process.stdin, process.stdout); // metodo entrada / salida

let fs = require("fs")


let resultados = []
let r = 0;




//  event line retorno de carror - tiene input


rl.question("¿Como te llamas? ", (answer) => {
    const streamW = fs.createWriteStream("./USER" + answer + ".md", "UTF-8");
    streamW.write("##Cabecera STREAM")


    rl.setPrompt("Dime una cosa ");

    rl.prompt();

    rl.on("close", function () { console.log("CERRADA APLICASION") })

    rl.on("line", function (input) {
        if (input === "exit") {
            rl.close()
            console.log(resultados)
            streamW.close()
        }
        else {
            r++
            resultados.push("Aqui se ha escrito " + input);
            streamW.write("\n" + input)
            rl.prompt()
        }
    }
    )
}




)

