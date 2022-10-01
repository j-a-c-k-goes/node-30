// Validate Hexadecimal Number Using Regular Expression
// Checks if values fall in hexadecimal range
// [0-9] [A-F] [a-f]

const str = "FFDACB";
const pattern = /^[a-fA-F0-9]+$/g; 
const result = str.match(pattern);
result ? console.log("Valid Hexadeciaml Number"):console.log("Invaild Hexadecimal Number");