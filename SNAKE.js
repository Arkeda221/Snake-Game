const gameBoard = document.getElementById('grid')
const playAgain = document.getElementById('play-again')

let speed = 1

// Creates a 25x25 board with each div ('box') being 32px
function drawBoard() {}
for (let i = 0; i < 225; i++) {
  let div = document.createElement('div')
  gameBoard.appendChild(div)
}

const boxes = document.querySelectorAll('#grid div')

drawBoard()
drawApple()
drawSnake()
main()
function main() {
  intervelTime = 190
  moveSnake()
  setInterval(moveSnake, intervelTime)
}

function moveSnake() {
  const update = snakePosition.pop()
  boxes[update].classList.remove('snake')
  snakePosition.unshift(snakePosition[0] + speed)
  snakePosition.forEach((i) => {
    boxes[i].classList.add('snake')
    console.log(snakePosition[0])
    checkIfAppleEaten()
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
  } else if (event.key === 'ArrowUp') {
    speed = -15
  } else if (event.key === 'ArrowLeft') {
    speed = -1
  } else if (event.key === 'ArrowRight') {
    speed = 1
  }
}

document.addEventListener('keydown', changeDirection)

//Credits
//https://www.section.io/engineering-education/keyboard-events-in-javascript/
//https://www.youtube.com/watch?v=QTcIXok9wNY&t=831s&ab_channel=WebDevSimplified
//https://stackoverflow.com/questions/26362423/how-to-remove-a-specific-class-from-all-elements
//https://www.youtube.com/watch?v=rui2tRRVtc0&ab_channel=CodewithAniaKub%C3%B3w
