// slice() extracts a section of an array, returns a new array
// Requires two arguments: Start, End
// Start: integer specifiying where to being slicing, default 0, -1 to start form end
// End: an integer specifiying where to end, can also use negative values

const arr = [".mp4", ".mp3", ".mov", ".FLAC"];
const sliceA = arr.slice(2,4).sort().reverse();
const sliceB = arr.slice(-3,-1).sort().reverse();

console.group("Pre-slicing")
console.table(arr);
console.groupEnd("Pre-slicing");

console.group("Sliced");
console.table(sliceA);
console.table(sliceB);
console.groupEnd("Slice");

