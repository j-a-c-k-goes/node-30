// g global scope
// i case insensitive
// m multiline match

const fs = require("fs");
const filename = "data.txt";
const filenameAlt = "introduction.txt";
const str = fs.readFileSync(filename).toString();
const strOther = fs.readFileSync(filenameAlt).toString();
const pattern = /man/gim;
const patternAlt = /pattern/gim;
const myArray = str.match(pattern);
const anotherArray = strOther.match(patternAlt);
console.log(myArray.length, "Occurences of pattern:", pattern );
console.log(anotherArray.length, "Occurences of pattern:", patternAlt );

// Using a regular expression literal
const myRegExp = /ab*/;
// matched a, ab, abb, abbbb, ...
// does not match b, bc, abs, aba, ...

// Using a constructor function
const constructReg = new RegExp("ab*");
