let playerOne = [];
let playerTwo = [];
let connectedTiles = [];
let deskTop = [];

const tileCollections = [
	[ 0, 0 ],
	[ 0, 1 ],
	[ 1, 1 ],
	[ 0, 2 ],
	[ 1, 2 ],
	[ 2, 2 ],
	[ 0, 3 ],
	[ 1, 3 ],
	[ 2, 3 ],
	[ 3, 3 ],
	[ 0, 4 ],
	[ 1, 4 ],
	[ 2, 4 ],
	[ 3, 4 ],
	[ 4, 4 ],
	[ 0, 5 ],
	[ 1, 5 ],
	[ 2, 5 ],
	[ 3, 5 ],
	[ 4, 5 ],
	[ 5, 5 ],
	[ 0, 6 ],
	[ 1, 6 ],
	[ 2, 6 ],
	[ 3, 6 ],
	[ 4, 6 ],
	[ 5, 6 ],
	[ 6, 6 ]
];

const getRandomTile = function() {
	const randomNum = Math.floor(Math.random() * tileCollections.length);
	const randomTile = tileCollections[randomNum];
	tileCollections.splice(randomNum, 1);
	return randomTile;
};
deskTop.unshift(getRandomTile());
console.log('desktop', deskTop);

for (let i = 0; i < 7; i++) {
	playerOne.push(getRandomTile());
	playerTwo.push(getRandomTile());
}
console.log('tile collections', tileCollections);

const canFit = (tile) =>
	tile[0] === deskTop[0][0] || tile[1] === deskTop[0][0] || tile[0] === deskTop[0][1] || tile[1] === deskTop[0][1];

console.log(`can fit`, playerOne.some(canFit));

console.log('payer1', playerOne);
console.log('payer2', playerTwo);
