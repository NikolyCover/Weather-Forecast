const api = {
    key: "7c7ffb30d0e820a9261d2a43dc258e93",
    base: "https://api.openweathermap.org/data/2.5/",
    lang: "pt_br",
    units: "metric"
}

//current weather
const cityName = document.querySelector('#city-name')
const date = document.querySelector('#date')
const temp = document.querySelector('#current-temp')
const icon = document.querySelector('#weather-icon')
const descr = document.querySelector('#weather-descr')
const feelsLike = document.querySelector('#feels-like')
const maxTemp = document.querySelector('#max-temp')
const minTemp = document.querySelector('#min-temp')
const humidity = document.querySelector('#humidity')
const windy = document.querySelector('#wind')

function insertData(data) {
    cityName.textContent = data.name + ' - ' + data.sys.country

    let dt = new Date();
    let day = String(dt.getDate()).padStart(2, '0')
    let month = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"][dt.getMonth()]
    let year = dt.getFullYear()

    date.textContent = day + ' de ' + month + ' de ' + year

    temp.textContent = Math.trunc(data.main.temp)

    icon.src = `media/weather-icons/${data.weather[0].icon}.png`

    descr.textContent = data.weather[0].description

    feelsLike.textContent = Math.trunc(data.main.feels_like)
    maxTemp.textContent = Math.trunc(data.main.temp_max)
    minTemp.textContent = Math.trunc(data.main.temp_min)
    humidity.textContent = data.main.humidity
    windy.textContent = Math.trunc(data.wind.speed * 3.708) //meter per second to km per hour
}

fetch(`${api.base}weather?q=${city = 'Foz Do Iguaçu'}&lang=${api.lang}&units=${api.units}&appid=${api.key}`)
    .then(response => { response.json()
        .then( data => insertData(data))
    })
    .catch(e => console.log(`Error: ${e.message}`))