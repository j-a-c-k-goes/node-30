const http = require("http");
const fs = require("fs");
const host = "127.0.0.1";
const port = 3000;
http.createServer((request, response)=>{
	console.log("Port:", port);
	response.writeHead(200, {"Content-Type": "audio/mp3"});
	fs.exists("audio.mp3", (exists)=>{
		if(exists)
		{
			const rstream = fs.createReadStream("audio.mp3");
			rstream.pipe(response);
		} else 
		{
			response.end("Its a 404 yet not Atlanta");
		}
	});
}).listen(port, host, (error)=>{
	if(error)
	{
		return console.log("Error occured:", error);
	}
	console.log("Server listening @", host, port);
});