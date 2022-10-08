// forEach() is a loop with callback function
// Callback function is performed on each element of array

const names = ["this", "that", "other"];
names.forEach((name, index)=>{
	name += name.slice(0);
	console.log(name);
});


