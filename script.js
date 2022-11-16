const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonAddTime = document.querySelector('.addTime')
const buttonLowerTime = document.querySelector('.lowerTime')

const soundForest = document.querySelector('.forestCard')
const soundRain = document.querySelector('.rainCard')
const soundCoffe = document.querySelector('.coffeCard')
const soundFireplace = document.querySelector('.fireplaceCard')

const audioForestCard = new Audio('Floresta.wav')
const audioRainCard = new Audio('Chuva.wav')
const audioCoffeCard = new Audio('Cafeteria.wav')
const audioFireplaceCard = new Audio('Lareira.wav')

soundForest.addEventListener('click',() => {
  audioForestCard.play()
})

soundRain.addEventListener('click',() => {
  audioRainCard.play()
})

soundCoffe.addEventListener('click',() => {
  audioCoffeCard.play()
})

soundFireplace.addEventListener('click',() => {
  audioFireplaceCard.play()
})