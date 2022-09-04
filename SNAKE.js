const gameBoard = document.getElementById('grid')
const playAgain = document.getElementById('play-again')
let speed = 1
const width = 15
let interval = 0
// Creates a 15x15 board with each div ('box') being 32px
function drawBoard() {}
for (let i = 0; i < 225; i++) {
  let div = document.createElement('div')
  gameBoard.appendChild(div)
}

const boxes = document.querySelectorAll('#grid div')

startGame()

function startGame() {
  drawBoard()
  drawApple()
  drawSnake()
  main()
}

function main() {
  clearInterval(interval)
  intervelTime = 190
  interval = setInterval(moveSnake, intervelTime)
}

function moveSnake() {
  const update = snakePosition.pop()
  boxes[update].classList.remove('snake')
  snakePosition.unshift(snakePosition[0] + speed)
  snakePosition.forEach((i) => {
    boxes[i].classList.add('snake')
    // console.log(snakePosition[0])
    checkIfAppleEaten()
    checkForHits()
  })
}

function checkIfAppleEaten() {
  if (boxes[snakePosition[0]].classList.contains('apple')) {
    boxes[snakePosition[0]].classList.remove('apple')
    const tail = [snakePosition[0] + 1]
    snakePosition.push(tail)
    drawApple()
  }
}

function checkForHits() {
  if (
    (snakePosition[0] + width >= width * width && speed === width) || //if snake hits bottom
    (snakePosition[0] % width === width - 1 && speed === 1) || //if snake hits right wall
    (snakePosition[0] % width === 0 && speed === -1) || //if snake hits left wall
    (snakePosition[0] - width < 0 && speed === -width) || //if snake hits the top
    boxes[snakePosition[0] + speed].classList.contains('snake') //if snake goes into itself
  ) {
    gameOver()
    return clearInterval(interval)
  }
}

function reset() {
  window.location.reload()
}

//Draws a snake
function drawSnake() {
  snakePosition = [0, 1]
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
    speed = +15
    return
  } else if (event.key === 'ArrowUp') {
    speed = -15
    return
  } else if (event.key === 'ArrowLeft') {
    speed = -1
    return
  } else if (event.key === 'ArrowRight') {
    speed = 1
    return
  }
}

function gameOver() {
  document.getElementById('hidden').style.visibility = 'visible'
}

playAgain.addEventListener('click', reset)
document.addEventListener('keydown', changeDirection)

//Credits
//https://www.section.io/engineering-education/keyboard-events-in-javascript/
//https://www.youtube.com/watch?v=QTcIXok9wNY&t=831s&ab_channel=WebDevSimplified
//https://stackoverflow.com/questions/26362423/how-to-remove-a-specific-class-from-all-elements
//https://www.youtube.com/watch?v=rui2tRRVtc0&ab_channel=CodewithAniaKub%C3%B3w
