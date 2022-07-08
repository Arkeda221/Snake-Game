const gameBoard = document.getElementById('grid')
const playAgain = document.getElementById('play-again')
let interval = 0
let speed = 1
let intervelTime = 0

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
  interval = setInterval(moveSnake, intervelTime)
}

function moveSnake() {
  const update = snakePosition.pop()
  boxes[update].classList.remove('snake')
  snakePosition.unshift(snakePosition[0] + speed)
  snakePosition.forEach((i) => {
    boxes[i].classList.add('snake')
    console.log(snakePosition)
    checkIfAppleEaten()
  })
}

function checkIfAppleEaten() {
  if (boxes[snakePosition[0]].classList.contains('apple')) {
    boxes[snakePosition[0]].classList.remove('apple')
    drawApple()
  }
}

//Draws a snake
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

//Event Listener for changing direction when you press the arrow keys
function changeDirection(event) {
  if (event.key === 'ArrowDown') {
    speed = +25
  } else if (event.key === 'ArrowUp') {
    speed = -25
  } else if (event.key === 'ArrowLeft') {
    speed = -1
  } else if (event.key === 'ArrowRight') {
    speed = 1
  }
}

document.addEventListener('keydown', changeDirection)
