// let arr= [];

// for (var i=0 ; i < 7; i++) {

//     for ( var j = 0; j < 7; j++) {
//             arr.push(`<${i}:${j}>`)

//    }
// }
// //1/3
// console.log("arr", arr, arr.length)
const tiles = [
	'0:0',
	'0:1',
	'0:2',
	'0:3',
	'0:4',
	'0:5',
	'0:6',
	'1:1',
	'1:2',
	'1:3',
	'1:4',
	'1:5',
	'1:6',
	'2:2',
	'2:3',
	'2:4',
	'2:5',
	'2:6',
	'3:3',
	'3:4',
	'3:5',
	'3:6',
	'4:4',
	'4:5',
	'4:6',
	'5:5',
	'5:6',
	'6:6'
];

const assignPlayersTiles = (tilesArr, numOfTiles) => {
	let playerArr = [];
	for (let i = 0; i < numOfTiles; i++) {
		const random = Math.floor(Math.random() * tilesArr.length);
		if (playerArr.indexOf(tilesArr[random]) === -1) {
			playerArr.push(tilesArr[random]);
			tilesArr.splice(random, 1);
		} else {
			i--;
		}
	}
	return playerArr;
};
const p1 = assignPlayersTiles(tiles, 7);
const p2 = assignPlayersTiles(tiles, 7);
let board = [];
const firstTile = tiles[Math.floor(Math.random() * tiles.length)];

tiles.splice(Math.floor(Math.random() * tiles.length), 1);
board.push(firstTile);

console.log(`The game starts with <${firstTile}>`);

const checkTile = (playerArr, boardTile) => {
	return playerArr.find((el) => {
		if (el[0] === boardTile[0] || el[2] === boardTile[2] || el[0] === boardTile[2] || el[2] === boardTile[0]) {
			return el;
		}
	});
};
//check if p1 has the tile
//doesn't have it.. then check in the tiles array

const addTileToBoard = (lastTile, tilePlayed) => {
	const turnedTile = tilePlayed.split('').reverse().join('');
	if (lastTile[2] === tilePlayed[0]) {
		board.push(tilePlayed);
	} else if (lastTile[0] === tilePlayed[2]) {
		board.unshift(tilePlayed);
	} else if (lastTile[2] === tilePlayed[2]) {
		board.push(turnedTile);
	} else if (lastTile[0] === tilePlayed[0]) {
		board.unshift(turnedTile);
	}
};

const play = (playerArr, playerName) => {
	const matchToFirstTile = checkTile(playerArr, board[0]);
	const matchToLastTile = checkTile(playerArr, board[board.length - 1]);
	if (matchToFirstTile) {
		addTileToBoard(board[0], matchToFirstTile);
		const tileIndex = playerArr.indexOf(matchToFirstTile);
		console.log(`${playerName} plays <${board[0]}> to connect to <${board[1]}> on the board (first)`);
		console.log(`Board is ${board.map((el) => `<${el}>`)}`);
		playerArr.splice(tileIndex, 1);
	} else if (matchToLastTile) {
		addTileToBoard(board[board.length - 1], matchToLastTile);
		const tileIndex = playerArr.indexOf(matchToLastTile);
		console.log(`${playerName} plays <${board[0]}> to connect to <${board[1]}> on the board (last)`);
		console.log(`Board is ${board.map((el) => `<${el}>`)}`);
		playerArr.splice(tileIndex, 1);
	} else {
		const tileFromStock = checkTile(tiles, board[0]);
		if (tileFromStock) {
			addTileToBoard(board[0], tileFromStock);
			console.log(`${playerName} can't play; draws <${tileFromStock}>`);
			console.log(`Board is ${board.map((el) => `<${el}>`)}`);
			const toCut = tiles.indexOf(tileFromStock);
			tiles.splice(toCut, 1);
		} else {
			console.log(`${playerName} couldn't pull a tile`, `Game is draw`);
			gamePlaying=false; 
		}}}

let gamePlaying = true;

if (p1.length === 0) {
	gamePlaying = false;
	console.log('1 wins');
} else if (p2.length === 0) {
	gamePlaying = false;
	console.log('2 wins');
}

while (gamePlaying) {
	play(p1, 'Ammar');
	play(p2, 'Jack');
	if (p1.length === 0) {
		gamePlaying = false;
		console.log('1 wins');
	} else if (p2.length === 0) {
		gamePlaying = false;
		console.log('2 wins');
	}
}
