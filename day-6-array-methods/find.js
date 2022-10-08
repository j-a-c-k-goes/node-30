// find() returns first value in the array
// Value must pass test condition, given as a function
// Returns undefined is no mathcing elements present

const arr = new Array(3);
arr[0]= "hello";
arr[1] = "goodbye";
arr[2] = "farewell";

function findHello (string){
	let status;
	string.toLowerCase() === "hello"? status = true : status = false;
	return status
}
const hello = arr.find(findHello);
console.log("found:", hello);