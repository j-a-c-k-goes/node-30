const http = require("http");
const host = "127.0.0.1";
const port = 3000;
const fs = require("fs");
http.createServer((request, response)=>{
	console.log("port: 3000");
	response.writeHead(200, {"Content-type": "text/html"});
	fs.readFile("./index.html", (error, data)=>{
		if (error) throw error;
		console.log("Operation Success");
		response.end(data);
	});
}).listen(port, host, (error)=>{
	if(error){
		return console.log("Error occured:", error);
	}
	console.log("Server listening @", host, port);
});