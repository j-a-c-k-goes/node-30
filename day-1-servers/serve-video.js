const http = require("http");
const fs = require("fs");
const host = "127.0.0.1";
const port = 3000;
http.createServer((request, response)=>{
	console.log("Port:", port);
	response.writeHead(200, {"Content-Type": "video/mp4"});
	fs.exists("video.mp4", (exists)=>{
		if(exists)
		{
			const rstream = fs.createReadStream("video.mp4");
			rstream.pipe(response);
		} else 
		{
			response.send("Its a 404 yet not Atlanta");
			response.end();
		}
	});
}).listen(port, host, (error)=>{
	if(error)
	{
		return console.log("Error occured:", error);
	}
	console.log("Server listening @", host, port);
});