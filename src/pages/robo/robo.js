const back = document.querySelector('#slide-back')
const next = document.querySelector('#slide-next')
const slide = document.querySelector('#slide-image')

const images = [
  '/src/img/robocup_battle.jpg',
  '/src/img/robocup_header.jpg',

]

let currentIndex = 0

const slideNext = (e) => {
  if (e) {
    e.preventDefault()
  }

  currentIndex++;

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  slide.src = images[currentIndex]
}

const slideBack = (e) => {
  e.preventDefault()
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  slide.src = images[currentIndex]
}

setInterval(slideNext, 3000)

next.addEventListener('click', slideNext)
back.addEventListener('click', slideBack)