// 'try/catch' is an Asynchronous Method
// Causes a crash, code will have lareeady been executed before callback
// try/catch generates errors because of the above reason

try {
	asyncMethod("invalid argument generates error", (err, data)=>{
	if (err) throw err;
	});
} catch (err) {
	console.error(err);
}
