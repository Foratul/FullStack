const express = require('express')

const Telegraf = require('telegraf')

const App = express()
let creadores = require('./creadores').creators
let funsiones = require('./funsiones.js').funsiones
let mensajes = require('./mensajes.js').mensajes
let usuarioDAO = require("./usuarioDAO").usuarioDAO
require("./db.js")

// env unbotnazi name
// unbotnazibot  username

// token 1060060456:AAH9B5canymV-qyl3Zq0aTPNJZHSgj2Mxpg

const bot = new Telegraf('1041852626:AAFV8bkJxE5t8AeuiQZIXI3xogsQk7Gvpec')

App.use(bot.webhookCallback('/rutabot'))
bot.telegram.setWebhook(' https://50689274.ngrok.io/rutabot')

bot.start((ctx) => {
    ctx.reply('Hola hamijo ' + ctx.from.first_name + " " + ctx.from.last_name + " me alegro de verte ")
    usuarioDAO.getByTelegramID(ctx.from.id)
        .then((resultado) => {
            if (resultado.length == 0) {
                console.log("usuario no existe") // con lo cual lo añado
                usuarioDAO.insertUsuario(ctx.from).then((resultado) => { console.log(resultado) })
            }
            else console.log("el usuario si existe")
        })


    console.log(ctx.from)
})
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()

// aqui los comandos

bot.command("/insert", (ctx) => {
    console.log("se entro insert")
})

bot.command("/spam", (ctx) => {
    console.log("se entro spam")
    // SE MANDA 
    let usuarios = usuarioDAO.getAll().then((rows) => {

        console.log(rows)
        for (const usuario of rows) {
            bot.telegram.sendMessage(usuario.telegramID, "sieg Heil")
        }
    })
})

bot.command("/random", (ctx) => {

    spamear(mensajes.generalistas)
    console.log("se entro spam")
    // SE MANDA 


})

bot.command("/Mario", (ctx) => {
    console.log("se entro en Spam")

    spamear(mensajes.marioLingo)

})

//esta funcion recibe un arraymensajes y los manda a todos los usuarios registradso

function spamear(arrayMensajes) {
    usuarioDAO.getAll().then((rows) => {

        console.log(rows)
        for (const usuario of rows) {
            bot.telegram.sendMessage(usuario.telegramID, arrayMensajes[Math.floor(Math.random() * (arrayMensajes.length - 1))])
        }
    })
}

function borracho(mensaje) {

    let divisiones = mensaje.split(" ")
    let size = divisiones.lenght()

}



bot.command("/existe", (ctx) => {
    console.log("se entro existe")
})

bot.command("/users", (ctx) => {
    ctx.reply("USUARIOS ATRAPADOS")

    usuarioDAO.getAll().then((rows) => {
        for (const resultado of rows) {
            ctx.reply(resultado.username)
        }
    })
})


bot.command('/who', (parametros) => {
    console.log(parametros.from)
    parametros.reply('se hizo /who')
})
bot.command('/test', (parametros) => {
    console.log("test")
    parametros.reply('bot funsiona')
})

bot.command('/creadores', (parametros) => {
    console.log("test")
    let texto = ""
    for (const elemento of creadores) {
        texto += "AUTOR: " + elemento.nombre + " DATOS :" + elemento.datos + "\n"
    }
    parametros.reply(texto)
})

bot.command('/info', (ctx) => {

    ctx.reply("FUNSIONES AVAILABLES")

    console.log("info")
    for (const funsion of funsiones) {
        ctx.reply(funsion)
    }
})

App.post('/rutabot', (req, res) => {
    console.log(req)
    res.send("RUTA BOT")
})

bot.command('/start', (ctx) => {
    console.log(ctx)
    ctx.reply("Se he hecho /start")
})

App.listen(8000, () => { console.log("servidor listening") })



