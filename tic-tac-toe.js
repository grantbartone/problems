/* Tic-Tac-Toe Live Coding Challenge

[ 'X', 'O', 'O' ]
[ 'O', 'O', 'X' ]
[ 'X', 'X', 'X' ]

User Stories:
● As a player, I want to be able to see the current state of the board. 
● As a player, I want to be able to place a piece on the board.
● As a player, I want to be able to take turns with an opponent placing pieces on the board.
● As a player, I want to make sure my opponent can not cheat.
● As a player, I want to know when the game is over.
*/

const X = 'X', O = 'O', EMPTY = ' '
const board = Array(3).fill().map(() => Array(3).fill(EMPTY))
const winners = [
  [[0, 0], [0, 1], [0, 2]],
  [[1, 0], [1, 1], [1, 2]],
  [[2, 0], [2, 1], [2, 2]],
  [[0, 0], [1, 0], [2, 0]],
  [[0, 1], [1, 1], [2, 1]],
  [[0, 2], [1, 2], [2, 2]],
  [[0, 0], [1, 1], [2, 2]],
  [[0, 2], [1, 1], [2, 0]],
]

// TEST cases
const moves = [[0, 0], [0, 2], [2, 2], [1, 1], [2, 0], [1, 0], [1, 2], [0, 1], [2, 1]] // X wins
// const turns = [[0, 0], [0, 2], [2, 2], [1, 1], [1, 1], [2, 0], [1, 0], [1, 2], [2, 1], [0, 1]] // X cheats -> O wins
// const turns = [[0, 0], [0, 2], [2, 2], [1, 1], [2, 0], [1, 0], [1, 2], [2, 1], [0, 1]] // draw

const printBoard = () => {
  for (const row of board) console.log(row)
  console.log()
}

const play = () => {
  let isXTurn = true
  for (const [x, y] of moves) {
    const player = isXTurn ? X : O
    console.log(`Your turn ${player}!`)

    if (board[x][y] !== EMPTY) {
      console.log(`Board at position [${x}, ${y}] is already taken! Lose your turn ${player}!\n`)
      isXTurn = !isXTurn
      continue
    }

    board[x][y] = player
    printBoard()
    if (checkWinners(isXTurn)) {
      console.log(`${player} wins!`)
      break
    }
    if (checkDraw()) {
      console.log("It's a draw!")
      break
    }
    isXTurn = !isXTurn
  }
}

const checkWinners = (isXTurn) => {
  const player = isXTurn ? X : O
  for (const positions of winners) {
    let winner = true
    for (const [x, y] of positions) {
      if (board[x][y] !== player) {
        winner = false
        break
      }
    }
    if (winner) return true
  }
  return false
}

const checkDraw = () => {
  for (const row of board) {
    if (row.includes(EMPTY)) return false
  }
  return true
}

play()
