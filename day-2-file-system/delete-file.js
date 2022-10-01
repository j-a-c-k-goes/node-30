const fs = require("fs");

// Delete Asynchronously
const filename = "rename-me.txt";
fs.unlink(filename, (error)=>{
	if (error) throw error;
	console.log("File Deleted:", filename);
	console.log("This happened asynchronously");
});

// Delete Synchronously
const deleteThis = "../day-3-regular-expressions/create-reg-exp";
fs.unlinkSync(deleteThis);
console.log(deleteThis, "Deleted Synchronously");