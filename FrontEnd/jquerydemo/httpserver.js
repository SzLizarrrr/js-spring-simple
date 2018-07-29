var http = require('http');

http.createServer(function(req, res) {
	res.end("<h1>Hello World!");
}).listen(3000);

console.log("Http server started!");