// IndexOf returns the first index of the passed in element
// If not in array, -1 will be returned
let arr = ["lions", "tigers", "bears", "whales"];
console.table(arr);
arr.forEach((element)=>{
	let positionOf = arr.indexOf((element));
	console.log(`Position of ${arr[positionOf].toUpperCase()}`, positionOf);
});