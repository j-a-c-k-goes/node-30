// Pop removes the element @ the array end
// Works on stack concept, first in last out, last in, first out

let testArray = new Array(2);
testArray = ["😂", "😑"];
console.group("Test Arrays");
console.table(testArray);
testArray.pop();
console.table(testArray);
console.count(testArray);
console.groupEnd("Test Arrays");
