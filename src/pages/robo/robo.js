const back = document.querySelector('#slide-back')
const next = document.querySelector('#slide-next')
const slide = document.querySelector('#slide-image')

const images = [
  '../../img/robo/gallery/1.png',
  '../../img/robo/gallery/2.jpg',
  '../../img/robo/gallery/3.jpg',
  '../../img/robo/gallery/4.jpg',
  '../../img/robo/gallery/5.jpg',
  '../../img/robo/gallery/6.jpg',
  '../../img/robo/gallery/7.png'
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
