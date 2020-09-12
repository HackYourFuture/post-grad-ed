const inventors = [
	{ first: 'A', last: 'B', year: 1921, passed: 1999 },
	{ first: 'C', last: 'D', year: 1931, passed: 2009 },
	{ first: 'E', last: 'F', year: 1941, passed: 2019 },
	{ first: 'G', last: 'H', year: 1951, passed: 1998 },
	{ first: 'I', last: 'K', year: 1961, passed: 2008 },
	{ first: 'L', last: 'M', year: 1971, passed: 2018 }
];

const people = [ 'a,b', 'b,c', 'c,d', 'd,e', 'e,f', 'f,g', 'g,h', 'h,i', 'i,j', 'j,k', 'k,l' ];

const inventor = inventors.filter(function(inventor) {
	if (inventor.year >= 1921 && !inventor.year < 1940) {
		return true;
	}
});

const fullNames = inventors.map((inventor) => inventor.first + inventor.last);
console.log(fullNames);

const ordered = inventors.sort((a, b) => (a.year > b.year ? -1 : 1));
console.log(ordered);

const totalYears = inventors.reduce((total, inventor) => {
	return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears);
console.table(inventor); //  important

const oldest = inventors.sort(function(a, b) {
	const lastGuy = a.passed - a.year;
	const nextGuy = b.passed - b.year;
	return lastGuy < nextGuy ? -1 : 1;
});

function myFunction() {
	oldest.forEach((element) => {
		document.getElementById('demo').innerHTML =
			element.first + '.' + element.last + ',' + `${element.passed - element.year}` + 'year old';
	});
}

console.table(`oldest`, oldest);

// const category = document.querySelector('mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links.map((link) => link.textContent).filter(streetName.includes('de'));

const array = [ 1, 2, 3, 4, 5 ];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [ 1, 30, 39, 29, 10, 13 ];

console.log(array1.every(isBelowThreshold));
// expected output: true

const array1 = [ 5, 12, 8, 130, 44 ];

const found = array1.find((element) => element > 10);

console.log(found);
