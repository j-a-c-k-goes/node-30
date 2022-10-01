// Methods used to start a timer for computing duration of operation
// Labels must match @ .time() and .timeEnd()

console.time("Division");
const x = Math.ceil(Math.random()*100);
const y = Math.ceil(Math.random()*100);
const result = (x / y).toFixed(4);
result <= 2 ? console.log(result): console.log("Double up!", result*2);
console.timeEnd("Division");