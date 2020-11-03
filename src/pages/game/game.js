let player1Robot = null;
let player2Robot = null;
let hits = 0;

let imgPlayer1 = null;
let imgPlayer2 = null;

const moves1 = {
  'a': { x: -1, y: 0 },
  'd': { x: 1, y: 0 },
  'w': { x: 0, y: -1 },
  's': { x: 0, y: 1 },
}

const moves2 = {
  'ArrowLeft': { x: -1, y: 0 },
  'ArrowRight': { x: 1, y: 0 },
  'ArrowUp': { x: 0, y: -1 },
  'ArrowDown': { x: 0, y: 1 },
}


function preload() {
  imgPlayer1 = loadImage('../../img/game/robotics1.png');
  imgPlayer2 = loadImage('../../img/game/robotics2.png');
  imgBackground = loadImage('../../img/game/background.jpg');
}

function setup() {
  const canvas = createCanvas(800, 600);
  canvas.parent('game')
  player1Robot = new Robo(
    { x: 0, y: height / 2 },
    { 'width': width, 'height': height },
    moves1,
    100,
    imgPlayer1,
    5,
    80
  )

  player2Robot = new Robo(
    { x: width - 80, y: height / 2 },
    { 'width': width, 'height': height },
    moves2,
    100,
    imgPlayer2,
    5,
    80
  )
}

function draw() {
  image(imgBackground, 0, 0, 800, 700)
  player1Robot.show()
  player2Robot.show()
  player1Robot.listenKeyboard()
  player2Robot.listenKeyboard()
  
  if (hit(player1Robot, player2Robot)) {
    hits++
  }
  
  fill(0, 0, 0);
  rect(0, 0, width, 40)

  fill(255, 255, 255);
  textSize(20);
  text(`player 1: ${player1Robot.life}`, 10, 25);
  text(`player 2: ${player2Robot.life}`, width - 200, 25);

  if (hits == 5) {
    fill(255, 255, 255);
    textSize(30);

    if (player1Robot.life < player2Robot.life) {
      text(`O vencedor é o player 2`, 200, 80);
    } else if (player1Robot.life == player2Robot.life) {
      text(`empate`, 200, 80);
    } else {
      text(`O vencedor é o player 1`, 200, 80);
    }

    noLoop()
  }
}

window.addEventListener("keydown", function(e) {
  if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
  }
}, false);