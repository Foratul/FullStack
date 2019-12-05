const axios = require('axios');
const exec = require("child_process").exec

let url = "http://google.com"
exec("open 'http://google.com'")

url = "https://swapi.co/api/planets/?format=json"
axios.get(url)

    .then((response) => {
        let arrNames = response.data.results.map((item) => { return item.name })

        return arrNames
    }).then((arrNames) => { printArr(arrNames) })

    .catch((err) => { console.log(err) })


function printArr(array) { console.log(array) };

(async () => {
    await axios.get("http://google.es")
        .then((res) => { console.log(res) })
})();

(() => { console.log("hola") })();

//funcion autoejecutada (myFunction)(); equivalente a ( () = > {} ) ()

// CREAR / APPEND FICHERO
