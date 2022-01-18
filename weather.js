const api = {
    key: "7c7ffb30d0e820a9261d2a43dc258e93",
    base: "https://api.openweathermap.org/data/2.5/",
    lang: "pt br",
    units: "metric"
}

fetch(`${api.base}weather?q=${city = 'Foz Do Iguaçu'}&lang=${api.lang}&units=${api.units}&appid=${api.key}`)
    .then(response => { response.json()
        .then( data => console.log(data))
    })
    .catch(e => console.log(`Error: ${e.message}`))