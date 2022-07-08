const gameBoard = document.getElementById('grid')
const playAgain = document.getElementById('play-again')
const scoreCount = document.getElementById('Score')

let interval = 0
let speedX = 0

// Creates a 25x25 board with each div ('box') being 32px
function drawBoard() {}
for (let i = 0; i < 625; i++) {
  let div = document.createElement('div')
  gameBoard.appendChild(div)
}

const boxes = document.querySelectorAll('#grid div')

drawBoard()
drawApple()
drawSnake()
main()

function main() {
  intervelTime = 300
  moveSnake()
  // checkIfAppleEaten()
  interval = setInterval(moveSnake, intervelTime)
}

function moveSnake() {
  const update = snakePosition.pop()
  boxes[update].classList.remove('snake')
  snakePosition.unshift(snakePosition[0] + speedX)
  snakePosition.forEach((i) => {
    boxes[i].classList.add('snake')
  })
}

//Draws a snake in the first 3 boxes
function drawSnake() {
  console.log(boxes.length)
  snakePosition = [2, 1]
  snakePosition.forEach((i) => {
    boxes[i].classList.add('snake')
  })
}

//Draws an apple in a random box
function drawApple() {
  applePosition = [Math.floor(Math.random() * boxes.length)]
  applePosition.forEach((i) => {
    boxes[i].classList.add('apple')
  })
}

function changeDirection(event) {
  if (event.key === 'ArrowDown') {
    speedX = +25
  } else if (event.key === 'ArrowUp') {
    speedX = -25
  } else if (event.key === 'ArrowLeft') {
    speedX = -1
  } else if (event.key === 'ArrowRight') {
    speedX = 1
  }
}

document.addEventListener('keydown', changeDirection)
