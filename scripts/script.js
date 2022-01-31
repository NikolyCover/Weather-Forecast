const track = document.querySelector('.track')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const searchInput = document.querySelector('.search-city-input')
const searchButton = document.querySelector('.search-city-button')

const searchCity = city => insertData(request(city))


next.addEventListener('click', () => {
    track.style.transform = `translateX(-104%)`;
    /*track.style.transform = `translateX(-${containerWidth + cardMargin}px)`;*/
})

prev.addEventListener('click', () => {
    track.style.transform = `translateX(0)`;
})


searchButton.addEventListener("click", event => {
    event.preventDefault()

    searchCity(searchInput.value)
})

searchInput.addEventListener('keyup', event => {
    if(event.keyCode == 13){
        searchCity(searchInput.value)
    }
})

document.addEventListener("DOMContentLoaded", () => {
    searchInput.value = ""
})

(() => {
    console.log("Vini is perfect")
})()
