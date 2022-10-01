/*
    Node.js gives functionality of file i/o by providing wrappers around the standard POSIX functions; i/o methods can be performed synchronously or asynchronously. 
*/

const fs = require("fs");
const filename = "message.txt";

// Asynchronous Reading of a File
fs.readFile(filename, (error, data)=>{
	if (error) throw error;
	console.log(`Content (Async): ${data}`);
});

// Synchronous Reading of a File
const content = fs.readFileSync(filename);
console.log(`Content (Sync): ${content}`);