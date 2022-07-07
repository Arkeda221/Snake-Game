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
