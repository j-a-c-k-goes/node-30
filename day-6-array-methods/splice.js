// Splice method can either add or remove elements from an array
// indexes first, then argument (String, int, data type...)
// If index has an element, splice() will replace element @ that index
// The original array is mutated!
let arr = ["lions", "tigers", "bears", "whales"];
let data = ["apples", "pears", "cherries"];

// Add/Replace Using splice()
console.table(arr);
arr.splice(4,5,"clowns", "bad actors");
console.table(arr);
arr.splice(2,3, "brand names never", "going out of style");
console.table(arr);

// Remove Using Splice
console.table(data);
data.splice(1,2);
console.table(data);