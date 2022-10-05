// Arrays are Created in Two of Ways
const names = ["A", "B", "C"];
const otherNames = new Array(100);
const arrlen = 100;
for(let i=0; i<=arrlen;i++){ otherNames[i] = i; }
for(i in otherNames){ otherNames[i] = `xyz-${i}`;}
console.table(otherNames);