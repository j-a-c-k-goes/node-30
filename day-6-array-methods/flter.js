// filter() creates a new array
// its elements: those which pass the test condition

const arr = [2,4,6,8,10, 101];
const arr1 = [3,8,4,7,6];
const output = arr.filter((element) =>{return element % 2 == 0}).reverse();
const output2 = arr1.filter((x)=>{ return x <= 4}).sort();
console.table(output);
console.table(output2);
