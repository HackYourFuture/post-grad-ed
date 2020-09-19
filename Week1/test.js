// const numbers = [ 1, 2, 3, 4, 50, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 60 ];
// const filterEven = numbers.filter((number) => number % 2 === 0); //creates a new array with all elements that pass the test
// console.log(`filterEven`, filterEven);

// const double = numbers.map((number) => number * 2); //creates a new typed array with the results of calling a provided function
// console.log(`map`, double);

// const unordered = [ 5, 6, 2, 3, 9, 40 ];
// const biggest = unordered.sort((a, b) => a - b); // sorts the elements of an array and returns the sorted array
// console.log(`biggest`, biggest); // 2,3,4,5,9,40

// const months = [ 'March', 'Jan', 'Feb', 'Dec' ];
// months.sort();
// console.log(months); // ["Dec", "Feb", "Jan", "March"]

// const reducer = (a, b) => a + b; // 1 + 2 + 3 + 4+...
// console.log(numbers.reduce(reducer)); //executes a reducer function on each element of the array

// const isBelowThreshold = (currentValue) => currentValue < 40;
// console.log(`every`, numbers.every(isBelowThreshold)); // boolean, tests whether all elements in the typed array pass the test

// const even = (element) => element > 40;
// console.log(numbers.some(even)); // boolean, tests whether some element in the typed array passes the test

// const found = numbers.find((element) => element > 40); //returns the value of the first element that passes the test
// console.log(found);

// loops
// for, for in, for of, forEach, while, do_while

const names = [ 'john', 'jack', 'jane', 'joe' ];

const user = { first: 'jack', last: 'joke' };

for (name in names) {
	console.log(names[name]);
}
for (u in user) {
	console.log(user[u]);
}

console.log(user.first);

names.forEach((el) => {
	console.log(el);
});

let i = 0;
while (i < 10) {
	console.log(i);
	i++;
}

// do {
// 	i++;
// 	console.log(i);
// } while (i < 10);

const createDeck = () => {
	const tiles = [];
	for (let i = 0; i < 7; i++) {
		for (let k = i; k < 7; k++) {
			tiles.push([ i, k ]);
		}
	}
	return tiles;
};

const pickRandom = (tiles) => {
	let index = Math.floor(Math.random() * tiles.length);

	return tiles.splice(index, 1)[0];
};

const pickHand = (tiles) => {
	const hand = [];
	for (let i = 0; i < 7; i++) {
		hand.push(pickRandom(tiles));
	}
	return hand;
};

const playTurn = (tiles, hand, board) => {
	const b1 = board[0][0];
	const b2 = board[board.length - 1][1];
	for (let i = 0; i < hand.length; i++) {
		const n1 = hand[i][0];
		const n2 = hand[i][1];
		if (n1 == b1) {
			board.unshift([ n2, n1 ]);
			return hand.splice(i, 1);
		} else if (n1 == b2) {
			board.push([ n1, n2 ]);
			return hand.splice(i, 1);
		} else if (n2 == b1) {
			board.unshift([ n1, n2 ]);
			return hand.splice(i, 1);
		} else if (n2 == b2) {
			board.push([ n2, n1 ]);
			return hand.splice(i, 1);
		}
	}

	if (tiles.length == 0) {
		console.log('no tiles left, opponent wins');
		throw 'no tiles left';
	} else {
		hand.push(pickRandom(tiles));
		return playTurn(tiles, hand, board);
	}
};

const game = () => {
	const tiles = createDeck();
	const board = [ pickRandom(tiles) ];
	const handA = pickHand(tiles);
	const handB = pickHand(tiles);

	while (true) {
		if (handB.length > 0) {
			const tile = playTurn(tiles, handA, board);
			console.log(`Player A plays ${tile} `);
			console.log(board.reduce((acc, next) => `${acc}<${next[0]}:${next[1]}>`, ''));
		} else {
			console.log('B WINS!!!');
			break;
		}

		if (handA.length > 0) {
			const tile = playTurn(tiles, handB, board);
			console.log(`Player B plays ${tile} `);
			console.log(board.reduce((acc, next) => `${acc}<${next[0]}:${next[1]}>`, ''));
		} else {
			console.log('A WINS!!!');
			break;
		}
	}
};
game();

// 	if (tileFit.length > 0) {
// 		if (tileFit[0][0] === desktop[0][0]) {
// 			desktop.unshift(tileFit[0].reverse());
// 		} else if (tileFit[0][1] === desktop[0][0]) {
// 			desktop.unshift(tileFit[0]);
// 		} else if (tileFit[0][0] === desktop[0][1]) {
// 			desktop.push(tileFit[0]);
// 		} else {
// 			desktop.reverse().unshift(tileFit[0].reverse());
// 		}
// 		console.log(desktop);

// 		player.splice(player.indexOf(tileFit[0]), 1);
// 	} else {
// 		console.log(`..............................................`, 'object');
// 		if (tileFit.length == 0) {
// 			player.push(getRandomTile());
// 			const tileFit = player.filter(canFit);
// 			console.log(`'''''''''''''''''''player`, player);
// 			return player.filter(canFit);
// 		}
// 	}
