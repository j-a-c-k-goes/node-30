const fs = require("fs");

// Writing a File Asynchronously
const content = "Are you my file's contents?";
fs.writeFile("new-message.txt", content, (error)=>{
	if (error) throw error;
	console.log("Saved :[=]");
});

// Writing a File Synchronously
const content_b = "";
fs.writeFileSync("../day-3-regular-expressions/create-reg-exp.js", content_b);
console.log("File Written Successfully");