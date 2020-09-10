'use strict'

let deck = []
let playerOne = []
let playerTwo = []
let board = []
let startingTile

const createDeck = (deck) => {
  for (let i = 0; i <= 6; i++) {
    for (let j = i; j <= 6; j++) {
      deck.push([i, j])
    }
  }

  return deck
}

const shuffleSelect = (deck, array, numElem) => {
  for (let i = 0; i < numElem; i++) {
    let index = Math.floor(Math.random() * deck.length)
    array.unshift(deck[index])
    deck.splice(index, 1)
  }
}

const selectTiles = (deck, playerOne, playerTwo) => {
  shuffleSelect(deck, playerOne, 7)
  shuffleSelect(deck, playerTwo, 7)
}

const findValidTile = (deck, playerTiles, boardTiles) => {
  let validTileFound = false
  let validTile = []

  while (!validTileFound) {
    validTile = playerTiles.find((tile) => {
      return (
        tile[0] === boardTiles[0][0] ||
        tile[0] === boardTiles[boardTiles.length - 1][1] ||
        tile[1] === boardTiles[0][0] ||
        tile[1] === boardTiles[boardTiles.length - 1][1]
      )
    })
    console.log(`deck has ${deck.length} tiles`)

    validTile === undefined
      ? deck.length > 0
        ? shuffleSelect(deck, playerTiles, 1)
        : (validTileFound = true)
      : (validTileFound = true)
  }
  return validTile
}

const handDisplay = (array) => {
  let display = ''
  array.map((element) => (display += `<${element[0]}:${element[1]}> `))
  return display
}

const gameLogic = (board, playerTiles, validTile, pass) => {
  console.log('valid tile', validTile)
  if (validTile !== undefined) {
    const validTileIndex = playerTiles.indexOf(validTile)
    playerTiles.splice(validTileIndex, 1)

    if (validTile[0] === board[0][0]) {
      let rotated = validTile.reverse()
      board.unshift(rotated)
    } else if (validTile[1] === board[0][0]) {
      board.unshift(validTile)
    } else if (validTile[0] === board[board.length - 1][1]) {
      board.push(validTile)
    } else {
      const rotated = validTile.reverse()
      board.push(rotated)
    }
  } else {
    pass.push(1)
  }
}

const gamePlay = (deck, board, playerOne, playerTwo) => {
  let numPass = []
  while (playerOne.length > 0 && playerTwo.length > 0 && numPass.length !== 2) {
    numPass = []
    console.log(`player two has ${playerTwo.length} tiles`)

    console.log('1', numPass)
    const validTilePlayerOne = findValidTile(deck, playerOne, board)
    gameLogic(board, playerOne, validTilePlayerOne, numPass)

    console.log('Bob played: ', handDisplay([validTilePlayerOne]))
    console.log(`Board is now : ${handDisplay(board)}`)
    console.log('2', numPass)

    if (playerOne.length > 0) {
      console.log(`player one has ${playerOne.length} tiles`)
      const validTilePlayerTwo = findValidTile(deck, playerTwo, board)
      gameLogic(board, playerTwo, validTilePlayerTwo, numPass)

      console.log('Alice played: ', handDisplay([validTilePlayerTwo]))
      console.log(`Board is now : ${handDisplay(board)}`)
      console.log('3', numPass)
    } else {
      console.log(
        `Bob won the game!!! Congrats. And Alice's tiles are : ${handDisplay(
          playerTwo
        )} `
      )
    }

    if (playerTwo.length === 0) {
      console.log(
        `Alice won the game!! Congrats!! Bob's tiles are : ${handDisplay(
          playerOne
        )}`
      )
    }

    if (deck.length === 0) {
      console.log('Deck is out of tile')
      console.log(`Bob's tiles are ${handDisplay(playerOne)}`)
      console.log(`Alice's tiles are ${handDisplay(playerTwo)}`)
      let totalTileOne = [...playerOne]
      let totalTileTwo = [...playerTwo]
      const totalPlayerOne = totalTileOne.reduce(
        (tile, sum) => (sum += tile[0] + tile[1]),
        0
      )
      const totalPlayerTwo = totalTileTwo.reduce(
        (tile, sum) => (sum += tile[0] + tile[1]),
        0
      )

      if (totalPlayerOne < totalPlayerTwo) {
        console.log(
          `Bob win the game. Yay Cheers. And he has ${handDisplay(playerOne)}`
        )
      } else {
        console.log(
          `Alice win the game. Yay Cheers. And he has ${handDisplay(playerTwo)}`
        )
      }
    }
  }
}

const gameBoard = () => {
  console.log('Game Started')

  createDeck(deck)
  console.log('Deck is ready.')
  console.log('___________________________________________________________\n')

  selectTiles(deck, playerOne, playerTwo)
  console.log("Bob's hand is", handDisplay(playerOne))
  console.log("Alice's hand is", handDisplay(playerTwo))
  console.log('___________________________________________________________\n')

  shuffleSelect(deck, board, 1)
  console.log(
    `Game is starting with the tile <${board[0][0]}:${board[0][1]}>\n`
  )
  console.log(`GamePlay Tiles in deck are ${handDisplay(deck)}`)

  gamePlay(deck, board, playerOne, playerTwo)
}

gameBoard()
