// Validate an Email using a Regular Expression
// Checks for Antomical Constraints, Not Where Domain/Sub-Domain exist

const str = "mememem@them.org";
const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const result = str.match(pattern);
result ? console.log("Email Valid"): console.log("Email Invalid");

