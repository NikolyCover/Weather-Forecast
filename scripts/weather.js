const api = {
    key: "7c7ffb30d0e820a9261d2a43dc258e93",
    base: "https://api.openweathermap.org/data/2.5/",
    lang: "pt_br",
    units: "metric"
}

function insertData(data) {
    const cityName = document.querySelector('#city-name')
    cityName.textContent = data.name + ' - ' + data.sys.country

    const date = document.querySelector('#date')
    let dt = new Date();
    let day = String(dt.getDate()).padStart(2, '0')
    let month = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"][dt.getMonth()]
    let year = dt.getFullYear()
    date.textContent = day + ' de ' + month + ' de ' + year

    const temp = document.querySelector('#current-temp')
    temp.textContent = Math.trunc(data.main.temp)

    const icon = document.querySelector('#weather-icon')
    icon.src = `media/weather-icons/${data.weather[0].icon}.png`

    const descr = document.querySelector('#weather-descr')
    descr.textContent = data.weather[0].description

    const feelsLike = document.querySelector('#feels-like')
    feelsLike.textContent = Math.trunc(data.main.feels_like)

    const maxTemp = document.querySelector('#max-temp')
    maxTemp.textContent = Math.trunc(data.main.temp_max)

    const minTemp = document.querySelector('#min-temp')
    minTemp.textContent = Math.trunc(data.main.temp_min)

    const humidity = document.querySelector('#humidity')
    humidity.textContent = data.main.humidity

    const windy = document.querySelector('#wind')
    windy.textContent = Math.trunc(data.wind.speed * 3.708) //meter per second to km per hour
}

function request(cityName) {
    fetch(`${api.base}weather?q=${cityName}&lang=${api.lang}&units=${api.units}&appid=${api.key}`)
    .then(response => { response.json()
        .then( data => insertData(data))
    })
    .catch(e => console.log(`Error: ${e.message}`))

    /*fetch(`${api.base}forecast?q=${cityName}&lang=${api.lang}&units=${api.units}&appid=${api.key}`)
    .then(response => { response.json()
        .then( data => console.log(data))
    })
    .catch(e => console.log(`Error: ${e.message}`))*/

}

request('Brasilia')