// console.count() maintains the number of times any label is called

console.time("List Time");
console.group("Payment Applications");
console.count("default");
console.count("Venmo");
console.count("PayPal");
console.count("Square");
console.count("CashApp");
console.count("Venmo");
console.count("Zelle");
console.count(); // this is also default
console.groupEnd();
console.timeEnd("List Time");
