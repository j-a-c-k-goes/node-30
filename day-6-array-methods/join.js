// join() method used to combine array elements into string
// Returns the string, elements can be separated specifically
// Default separator is a comma

const arr = ["Join", "These", "Together", "Okay"];
const joinA = arr.sort().join("");
const joinB = arr.reverse().join("::");
console.log(joinA);
console.log(joinB);