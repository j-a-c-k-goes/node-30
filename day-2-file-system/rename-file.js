const fs = require("fs");

// Rename File Asynchronously
fs.rename("rename-me.txt", "renamed-me.txt", (error)=>{
	if (error) throw error;
	console.log("File renamed!");
});
console.log("Async method :0");

// Rename file sychronously
fs.renameSync("rename-me-again.txt", "renamed-me-please.txt");
console.log("file renamed!");
console.log("Synchronous method");