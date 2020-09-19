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

let player1 = [];
let player2 = [];
let board = [];
let desktop = [];

const getRandomTile = function() {
	const randomNum = Math.floor(Math.random() * tileCollections.length);
	const randomTile = tileCollections[randomNum];
	tileCollections.splice(randomNum, 1);
	return randomTile;
};
desktop.unshift(getRandomTile());

for (let i = 0; i < 7; i++) {
	player1.push(getRandomTile());
	player2.push(getRandomTile());
}
console.log('tile collections', tileCollections);

const canFit = (tile) =>
	tile[0] === desktop[0][0] || tile[1] === desktop[0][0] || tile[0] === desktop[0][1] || tile[1] === desktop[0][1];

console.log(desktop);

const filterFit = (player) => {
	const tileFit = player.filter(canFit);
	if (tileFit.length > 0) {
		if (tileFit[0][0] === desktop[0][0]) {
			desktop.unshift(tileFit[0].reverse());
		} else if (tileFit[0][1] === desktop[0][0]) {
			desktop.unshift(tileFit[0]);
		} else if (tileFit[0][0] === desktop[0][1]) {
			desktop.push(tileFit[0]);
		} else {
			desktop.reverse().unshift(tileFit[0].reverse());
		}
		console.log(desktop);

		player.splice(player.indexOf(tileFit[0]), 1);
	} else {
		if (tileFit.length == 0) {
			player.push(getRandomTile());
			const tileFit = player.filter(canFit);
			return player.filter(canFit);
		}
	}

	if (player.length == 0) {
		console.log('no tiles left');
	} else {
		player1.push(getRandomTile());
		return player.filter(canFit);
	}
};

filterFit(player1);

console.log('desktop2', desktop);
console.log('player1', player1);

console.log('player2', player2);
