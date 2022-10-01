const http = require("http");
const host = "127.0.0.1";
const port = 3000;
const fs = require("fs");
http.createServer((request, response)=>{
	console.log("port: 3000");
	response.writeHead(200, {
		"Content-type": "application/pdf"
	});
	fs.readFile("index.pdf", (error, data)=>{
		if(error){
			response.json({
				"status":"error", 
				msg:error
			});
		} else {
			response.write(data);
			response.end();
		}
	});
}).listen(port, host, (error)=>{
	if(error){
		return console.log("Error occured:", error);
	}
	console.log("Server listening @", host, port);
});