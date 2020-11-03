class Robo {
  constructor(
    { x, y },
    screen,
    moves,
    life,
    img,
    velocity,
    size
  ) {
    this.x = x
    this.y = y
    this.screen = screen
    this.moves = moves
    this.life = life
    this.img = img
    this.velocity = velocity
    this.size = size
    this.halfSize = (this.size / 2)
    this.pushBackMoves = []
    this.countHits = 0
    this.lastMovement = {x: 0, y: 0}
  }

  listenKeyboard() {
    const movement = this.moves[key]
    if (movement) {
      this.move(movement)
      this.storePushBackMoves(movement)
      this.lastMovement = movement
    } else {
      this.move(this.lastMovement)
      this.storePushBackMoves(this.lastMovement)
    }
  }

  storePushBackMoves(movement) {
    this.pushBackMoves.push({ x: (-1 * movement.x), y: (-1 * movement.y) })
    if (this.pushBackMoves.length > 20) {
      this.pushBackMoves.shift()
    }
  }

  show() {
    noStroke()
    fill('rgba(0,0,0,0)')
    rect(this.x, this.y, this.size, this.size);
    image(this.img, this.x, this.y, this.size, this.size);
  }

  move({ x, y }) {
    this.x += this.velocity * x
    this.y += this.velocity * y
    this.ensureScreenConstraints()
  }

  ensureScreenConstraints() {
    if (this.x <= 0) {
      this.x = 0
    }

    if (this.x + this.size >= this.screen.width) {
      this.x = this.screen.width - this.size
    }

    if (this.y <= 40) {
      this.y = 40
    }

    if (this.y + this.size >= this.screen.height) {
      this.y = this.screen.height - this.size
    }
  }

  pushBackMovements() {
    this.pushBackMoves.forEach((move => {
      this.move(move)
    }))
    this.pushBackMoves = []
  }

  countLife() {
    this.life -= Math.floor((Math.random() * 20) + 1);

    if (this.life < 0) {
      this.life = 0
    }
  }
}

function hit(player1, player2) {
  const hit = collideRectRect(player2.x, player2.y, player2.size, player2.size, player1.x, player1.y, player1.size, player1.size);

  if (hit) {
    player1.pushBackMovements()
    player1.countLife()
    player2.pushBackMovements()
    player2.countLife()
  }

  return hit
}