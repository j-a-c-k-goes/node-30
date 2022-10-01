// Find Number of Tags Using a Regular Expression 

const fs = require("fs");
const filename = "data.html";
const str = fs.readFileSync(filename).toString();
const pattern = /<(\"[^\]*\"|'[^]'[^']|[^'\">])/gim;
const arr = str.match(pattern);
const len = arr.length;
console.log("Occurences of Pattern in string:", len);
