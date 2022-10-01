const http = require("http");
const host = "127.0.0.1";
const port = 3000;
const server = http.createServer((request, response)=>{
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Howdy!");
	console.log("Server is live");
	response.end("Success");
});
server.listen(port, host, (error)=>{
	if(error){
		return console.log("Error occured:", error);
	}
	console.log("Server listening @", host, port);
});