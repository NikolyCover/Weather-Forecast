const api = {
    key: "7c7ffb30d0e820a9261d2a43dc258e93",
    base: "https://api.openweathermap.org/data/2.5/",
    lang: "pt_br",
    units: "metric"
}

function insertWeatherForecast(data) {
    //current weather
    const cityName = document.querySelector('#city-name')
    
    cityName.textContent = 'Nome da cidade'

    const date = document.querySelector('#date')
    let dt = new Date(data.current.dt * 1000)
    let day = String(dt.getDate()).padStart(2, '0')
    let month = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"][dt.getMonth()]
    let year = dt.getFullYear()
    date.textContent = day + ' de ' + month + ' de ' + year

    const temp = document.querySelector('#current-temp')
    temp.textContent = Math.trunc(data.current.temp)

    const icon = document.querySelector('#weather-icon')
    icon.src = `media/weather-icons/${data.current.weather[0].icon}.png`

    const descr = document.querySelector('#weather-descr')
    descr.textContent = data.current.weather[0].description

    const feelsLike = document.querySelector('#feels-like')
    feelsLike.textContent = Math.trunc(data.current.feels_like)

    const maxTemp = document.querySelector('#max-temp')
    maxTemp.textContent = Math.trunc(data.daily[0].temp.max)

    const minTemp = document.querySelector('#min-temp')
    minTemp.textContent = Math.trunc(data.daily[0].temp.min)

    const humidity = document.querySelector('#humidity')
    humidity.textContent = data.current.humidity

    const windy = document.querySelector('#wind')
    windy.textContent = Math.trunc(data.current.wind_speed * 3.708) //meter per second to km per hour

    //7 days daily forecast
    let dailyForecast = data.daily.slice(1)
    
    const weekDays = document.querySelectorAll('.weekDay-forecast')
    weekDays.forEach((weekDay, i) => {
        let dt = new Date(dailyForecast[i].dt * 1000)
        weekDay.textContent = ['dom.', 'seg.', 'ter.', 'qua.', 'qui.', 'sex.', 'sáb.'][dt.getDay()]
    })

    const icons = document.querySelectorAll('.icon-forecast')
    icons.forEach((icon, i) => {
        icon.src = `media/weather-icons/${dailyForecast[i].weather[0].icon}.png`
    })

    const maxTemps = document.querySelectorAll('.maxTemp-forecast')
    maxTemps.forEach((maxTemp, i) => {
        maxTemp.textContent = Math.trunc(dailyForecast[i].temp.max)
    })

    const minTemps = document.querySelectorAll('.minTemp-forecast')
    minTemps.forEach((minTemp, i) => {
        minTemp.textContent = Math.trunc(dailyForecast[i].temp.min)
    })
}

function request(latitude, longitude) {

    fetch(`${api.base}onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly{part}&lang=${api.lang}&units=${api.units}&appid=${api.key}`)
    .then(response => { response.json()
        .then(data => insertWeatherForecast(data))
    })
    .catch(e => console.log(`Error: ${e.message}`))
}

function init() {
    let latitude
    let longitude

    if('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
            latitude = position.coords.latitude
            longitude = position.coords.longitude

            request(latitude, longitude)
            
        }, error => console.log(error))

    } else {
        alert("Sinto muito, mas serviços de geolocalização não são suportados pelo seu navegador.");
    }
}

init()