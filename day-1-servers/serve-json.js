const http = require("http");
const host = "127.0.0.1";
const port = 3000;
const fs = require("fs");
http.createServer((request, response)=>{
	console.log("port: 3000");
	response.writeHead(200, {"Content-type": "text/html"});
	let jsonResponse = {
		status: 200,
		message: "succes",
		result: ["subway", "blimpie", "publix"],
		code: 2000
	}
	console.log("Server live");
	formatJSON = JSON.stringify(jsonResponse);
	console.log(formatJSON);
	response.end(formatJSON);
}).listen(port, host, (error)=>{
	if(error){
		return console.log("Error occured:", error);
	}
	console.log("Server listening @", host, port);
});