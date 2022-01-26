const track = document.querySelector('.track')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

next.addEventListener('click', () => {
    track.style.transform = `translateX(-104%)`;
    /*track.style.transform = `translateX(-${containerWidth + cardMargin}px)`;*/
})

prev.addEventListener('click', () => {
    track.style.transform = `translateX(0)`;
})

const searchButton = document.querySelector('.search-city-button')

searchButton.addEventListener("click", function(e) {
    e.preventDefault()

    const searchCityInput = document.querySelector('.search-city-input')
    
    var city = searchCityInput.value

    insertData(request(city))
})