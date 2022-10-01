// Validate a PAssword using Regular Expression
// Password must contain:
// [A-Z] [a-z] [0-9] [!,@,#,$,%,^,] len[6-16]

const str = "@llG00dthIng$";
const pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;;
const result = str.match(pattern);
result ? console.log("Valid Passwod"): console.log("Not a valid password anatomy");