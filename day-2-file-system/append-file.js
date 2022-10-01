const fs = require("fs");

// Append file Asychronously
const data = "Append me to your file.";
fs.appendFile("input.txt", data, (error)=>{
	if (error) throw error;
	console.log("Data added Successfully");
});

// Append Synchronously
const moreData = "Also, append this!";
fs.writeFileSync("input.txt", moreData);
console.log("Data Successful");