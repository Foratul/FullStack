const axios = require('axios').default
const parser = require('fast-xml-parser')
const terminalImage = require('terminal-image');
const got = require('got');

let url = "https://datos.madrid.es/egob/catalogo/202088-0-trafico-camaras.kml"
arrayCamaras = []


function sacarImage() {

    let prom = new Promise((resolve, reject) => {
        axios.get(url).then(async (results) => {
            let data = parser.parse(results.data)
            // console.log(data.kml.Document.Placemark)
            for (const dato of data.kml.Document.Placemark) {
                let value = dato.ExtendedData.Data[0].Value.toString()
                arrayCamaras.push(`http://informo.munimadrid.es/cameras/Camara${value.padStart(5, "0")}.jpg`)
            }

            let aleatorio = Math.floor(Math.random() * arrayCamaras.length)
            let url = arrayCamaras[aleatorio]
            console.log(url)


            const body = await axios({
                method: 'get',
                url: url,
                responseType: 'arraybuffer'
            })

            console.log(await terminalImage.buffer(body.data))

            resolve("HA FUNCIONADO")
            reject("HA HABIDO ERROR")
        });



    })
    return prom
}


module.exports = sacarImage

// tiene sentido usar axios en lugar del http client

