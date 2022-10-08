// reduce() transforms array into singular value
// Executes provided function for each value
// Stores result in accumulator
// Does not execute on valueless arrays

const test = [5,5,8,7,6];
console.table(test);
const output = test.reduce((x, accum)=>{let total = (x*accum); return total;});
console.log(output)