// Concat joins two or more arrays and returns a new array
let arr = ["lions", "tigers", "bears", "whales"];
let data = ["apples", "pears", "cherries"];

const LABEL_A = "Non-concatendated Arrays:";
console.group(LABEL_A);
console.table(arr);
console.table(data);
console.groupEnd(LABEL_A);

const LABEL_B = "Concatenated Array"
const concatArray = arr.concat(data);
console.group(LABEL_B);
console.table(concatArray);
console.groupEnd(LABEL_B);