// Method used to reset counter for label

console.time("List Time");
console.group("Payment Applications");
console.count("default");
console.count("Venmo");
console.count("PayPal");
console.countReset("PayPal");
console.count("Square");
console.count("CashApp");
console.count("Venmo");
console.count("Zelle");
console.countReset("Venmo");
console.count();
console.groupEnd();
console.timeEnd("List Time");
