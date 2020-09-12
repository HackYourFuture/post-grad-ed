const numbers = [ 1, 2, 3, 4, 50, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 60 ];
const filterEven = numbers.filter((number) => number % 2 === 0); //creates a new array with all elements that pass the test
console.log(`filterEven`, filterEven);

const double = numbers.map((number) => number * 2); //creates a new typed array with the results of calling a provided function
console.log(`map`, double);

const unordered = [ 5, 6, 2, 3, 9, 40 ];
const biggest = unordered.sort((a, b) => a - b); // sorts the elements of an array and returns the sorted array
console.log(`biggest`, biggest); // 2,3,4,5,9,40

const months = [ 'March', 'Jan', 'Feb', 'Dec' ];
months.sort();
console.log(months); // ["Dec", "Feb", "Jan", "March"]

const reducer = (a, b) => a + b; // 1 + 2 + 3 + 4+...
console.log(numbers.reduce(reducer)); //executes a reducer function on each element of the array

const isBelowThreshold = (currentValue) => currentValue < 40;
console.log(`every`, numbers.every(isBelowThreshold)); // boolean, tests whether all elements in the typed array pass the test

const even = (element) => element > 40;
console.log(numbers.some(even)); // boolean, tests whether some element in the typed array passes the test

const found = numbers.find((element) => element > 40); //returns the value of the first element that passes the test
console.log(found);
