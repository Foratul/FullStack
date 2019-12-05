const TelegrafWit = require('telegraf-wit')

const wit = new TelegrafWit('6HJ4XLKNIPTMXEN7KCAGBWAPZIIOQE2V')


function nlu(message) {

    console.log("soy nlu y me ha llegado el texto : " + message)
    return new Promise((resolve, reject) => {
        wit.meaning(message.text).then((result) => {
            console.log(result)
            message.nlu = result
            console.log("de nlu sale " + message.nlu)
            resolve(message)
        })
    })
}

module.exports = nlu