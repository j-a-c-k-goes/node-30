// Creating a new console where:
// 1. stdout stores output
// 2. stderr.log stores errors

const fs = require("fs");
const { Console } = require("console");
const output = fs.createWriteStream("./stdout.log");
const errorOutput = fs.createWriteStream("./stderr.log");
const print = new Console(output, errorOutput);
const roll = 839147;
print.log(`${ roll }`);
print.log("Storing in a file:", roll);
print.error("Intended Error:");