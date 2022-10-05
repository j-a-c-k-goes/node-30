// Reverse Method reverse order of array
const arr = ["his", "her", "they", "them", "us"];
console.group("Reverse Method");
console.table(arr);
arr.reverse();
console.table(arr);
console.groupEnd("Reverse Method")

// Straight Reverse without usin reverse method()
// ["this", "that", "other"]
// pop() and rebuild
console.group("Tedious Reverse");
const test = ["this", "that", "other"];
console.table(test);
console.table(tediousReverse(test));
console.groupEnd("Tedious Reverse");
function tediousReverse(arr){
	let rebuilt = [];
	counter = arr.length;
	for (let i = 0; i <= arr.length; i++){
		rebuilt[i] = arr[counter];
		counter -= 1;
	}
	rebuilt.shift(0);
	return rebuilt;
}