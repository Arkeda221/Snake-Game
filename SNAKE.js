const gameBoard = document.getElementById('grid')
const playAgain = document.getElementById('play-again')
const scoreCount = document.getElementById('Score')

//Creates a 25x25 board with each div ('box') being 32px
function drawBoard() {}
for (let i = 0; i < 625; i++) {
  let div = document.createElement('div')
  gameBoard.appendChild(div)
}
drawBoard()
drawApple()
drawSnake()

//Draws a snake in the first 3 boxes
function drawSnake() {
  let boxes = document.querySelectorAll('#grid div')
  console.log(boxes.length)
  snakePosition = [2, 1, 0]
  snakePosition.forEach((index) => {
    boxes[index].classList.add('snake')
  })
}

//Draws an apple in a random box
function drawApple() {
  let boxes = document.querySelectorAll('#grid div')
  applePosition = [Math.floor(Math.random() * boxes.length)]
  applePosition.forEach((index) => {
    boxes[index].classList.add('apple')
  })
}

function moveSnake() {
  let boxes = document.querySelectorAll('#grid div')
  const update = snakePosition.pop()
  boxes[update].classList.remove('snake')
  snakePosition.unshift(snakePosition[0] + 1)
}
