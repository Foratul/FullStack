const camera = require('./camera.js')
const vorpal = require('vorpal')()
const chalk = vorpal.chalk

function cameraMain() { camera().then((result) => { }) }

vorpal.command("blue", "Dibuja en azul").action(function (args, callback) {
    console.log(chalk.blue("HOLA MUNDO AZUL"))
    callback()
}
)

vorpal.command("camera", "Show camera").action(function (args, callback) {

    console.log("hace lo de imagenes")
    cameraMain(callback())


})



//pifostio de MARIO
vorpal
    .command('preguntas', 'Pequeño test con preguntas')
    .action(function (args, callback) {
        return this.prompt([
            {
                type: 'list',
                message: 'Selecciona una de las opciones',
                name: 'opciones',
                choices: ['primera', 'segunda', 'tercera']
            },
            {
                type: 'confirm',
                message: '¿De verdad quieres eso?',
                name: 'confirmacion'
            },
            {
                type: 'input',
                message: 'Dime tu nombre',
                name: 'nombre',
                default: 'Mario Girón'
            }
        ], function (results) {
            console.log(results);
            callback();
        });
    });
vorpal.delimiter("$cli>").show()

