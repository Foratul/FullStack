const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs')

let url = "https://www.ulabox.com/categoria/charcuteria-y-embutidos/1599";
let z = 0
let arrayProductos = new Array();

(async () => {
    let response = await axios.get(url)
    const $ = cheerio.load(response.data)
    const pagination = $('.pagination').first()
    //movidote de MARIO
    let paginasTotales = pagination.children().last().prev().text()
    console.log(paginasTotales)

    for (let i = 1; i <= paginasTotales; i++) { await getProductsPage(url, i) }

    console.log(arrayProductos.length)

}
)()

//punto y coma antes de  funcion autoejecutable

getProductsPage(url, 1)

async function getProductsPage(url, pagina = 1) {

    // te inspeccionas el HTML buscando
    const response = await axios.get(url + "?p=" + pagina)
    const $ = cheerio.load(response.data)
    // funcion interna de cheerio a variable
    const productos = $('.product-item')

    for (const producto of Array.from(productos)) {

        let p = {}
        p.nombre = producto.attribs['data-product-name']
        p.precio = producto.attribs['data-price']
        p.marca = producto.attribs['data-product-brand']

        //HAY QUE INVESTIGAR DE LA HOSTIA EL HTML!!!
        const id = producto.attribs.id
        const img = $(`#${id} .product-item__image img`)
        p.image = img[0].attribs['data-src']
        z++
        console.log(z)
        arrayProductos.push(p)
        saveImage(p.image, id)
    }

};



function saveImage(url, productoID) {
    axios({
        method: 'get',
        url: url,
        responseType: 'arraybuffer'
    }).then((response) => {
        // console.log(response.data)
        fs.appendFile(`./images/${productoID}.jpg`, response.data, (err) => { if (err) console.log(err) })
    })

}

