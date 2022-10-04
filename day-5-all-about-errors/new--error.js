// Create a new error object
const err = new Error("This is an uneventful and misintended occurence.");
console.error(err); // Output with stack trace, message, all...
const errMsg = err.message; // Output, error message only
const errCode = err.code; // Output with error type
const stackTrace = err.stack; // Output with entire stack trace
const captureTrace = err.captureStackTrace; // create a .stack property on target object
const traceLimit = err.stackTraceLimit; // Output with set number of frame, default: 10
console.group("Error Atrributes");
console.table(
	[
		errMsg, 
		errCode, 
		stackTrace, 
		captureTrace, 
		traceLimit
	]);
