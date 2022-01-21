const containerWidth = document.querySelector('.weather-forecast').offsetWidth;

const track = document.querySelector('.track')

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

next.addEventListener('click', () => {
    track.style.transform = `translateX(-100%)`;
})

prev.addEventListener('click', () => {
    track.style.transform = `translateX(0)`;
})

console.log(containerWidth)