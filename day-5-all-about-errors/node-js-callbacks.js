// Methods follow idiomatic (mode of expression) pattern
// Callback passed as an argument to the method

const fs = require("fs");
function nodeCallback(error, data)
{
	error ? console.error("Error:", error): console.log(data.toString());
}
fs.readFile("file-exists.txt", nodeCallback);
fs.readFile("does-not-exist.txt", nodeCallback);