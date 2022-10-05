// Last Index Of is used to return the last index of passed in element
// Returns -1 if value does not exist in array
let arr = ["lions", "tigers", "bears", , "lions", "whales"];
console.table(arr);
arr.forEach((element)=>{
	let lastPositionOf = arr.lastIndexOf((element));
	console.log(`Last Position of ${arr[lastPositionOf].toUpperCase()}`,lastPositionOf);
});