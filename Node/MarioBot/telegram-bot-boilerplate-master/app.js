const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const Telegraf = require('telegraf');
var googleTTS = require('google-tts-api');




const bot = new Telegraf('1051031128:AAGixOdmoJGJRn-ng3vxa_Jv_BsdRJr6utw');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const nlu = require('./nlu.js')
const dialog = require('./dialog.js')
const app = express();

app.use(bot.webhookCallback('/secret-path'))
// Modifica la URL
bot.telegram.setWebhook('https://3b2f9e1a.ngrok.io/secret-path')
bot.start((ctx) => { ctx.reply("hola") })
bot.launch()

app.post('/secret-path', (req, res) => {
  res.end('Finaliza petición')
})

bot.command('test', (ctx) => {
  ctx.reply('Hola amiguito');
});

bot.on('text', (ctx) => {

  // la funcion metida como transplante, no parametro 

  nlu(ctx.message)
    .then(dialog).then((respuesta) => {
      bot.telegram.sendMessage(ctx.from.id, respuesta)
      googleTTS(respuesta, 'es', 1)   // speed normal = 1 (default), slow = 0.24
        .then(function (url) {
          console.log(url); // https://translate.google.com/translate_tts?...
          bot.telegram.sendAudio(ctx.from.id, url)

        })
        .catch(function (err) {
          console.error(err.stack);
        });
    })
    .catch(error => console.log(error))
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
