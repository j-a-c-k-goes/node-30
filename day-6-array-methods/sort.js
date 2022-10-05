// Sort method arranges elements in order of their occurences
const arr = ["a", "z", "w", "c", "d", "g", "k", "i"];
console.group("Pre-sort");
console.table(arr);
arr.sort();
console.group("Post-sort");
console.table(arr);