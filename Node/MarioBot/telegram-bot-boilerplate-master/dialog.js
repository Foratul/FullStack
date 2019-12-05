let fs = require('fs')



function dialog(message) {
    console.log("a dialog le ha llegado : " + message)
    return new Promise((resolve, reject) => {
        if (message.nlu.entities && message.nlu.entities.intent && message.nlu.entities.intent.length > 0) {

            let intent = message.nlu.entities.intent[0].value;
            let confidence = message.nlu.entities.intent[0].confidence

            if (confidence < 0.6) { resolve('no te entiendo') }
            else {
                resolve(getRandomPhrase(intent))
            }
        }
        else { resolve('no te entiendo') }
        reject("error")
    })


}

function getRandomPhrase(intent) {

    let content = fs.readFileSync(`./phrases/${intent}.txt`, 'UTF-8')
    let frases = content.split('\n')
    let aleatorio = Math.floor((Math.random() * frases.length))
    return frases[aleatorio]

}




module.exports = dialog