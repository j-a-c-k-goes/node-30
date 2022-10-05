// Unshift inserts an element in the beginning of an array

const test = new Array(3);
for (let i = 0; i <= 3; i++){
	test[i] = `${i}-unshift`;
}
console.table(test);
test.unshift("unshift requires an argument");
console.table(test);
console.count("Test called", test);