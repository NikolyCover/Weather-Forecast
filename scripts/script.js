const containerWidth = document.querySelector('.weather-forecast').offsetWidth;

const cardMargin = document.querySelector('.forecast-card').style.marginRight;

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