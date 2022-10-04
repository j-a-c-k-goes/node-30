// Several mechanisms for generation
// Asnyc & Sync have diferent ways to handle
const fs = require("fs");

// Sychronous uses `throw` to report errors
fs.readFileSync("never-existed.txt").on("error", (err)=>{
	console.error(err);
});

// Aynchronous methods accept an error object
// passed as first argument
fs.readFile("does-not-exist.txt", (err,data)=>{
	err ? console.error(err): console.log(data);
});
