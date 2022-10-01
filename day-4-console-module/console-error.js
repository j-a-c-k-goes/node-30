// Method used to print to stderr
// Accepts multiple arguments
const x = Math.ceil(Math.random()*100);
const y = Math.ceil(Math.random()*100);
const result = (x / y).toFixed(4);
const pass = `${x} ÷ ${y}: ${result}`;
const fail = `${result} out of bounds`
result <= 2 ? console.log(pass): console.error(RangeError(fail));