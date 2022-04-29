/*
const http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.write('Esto es un texto simple');
    res.end();
}).listen(3000, function () {
    console.log('Server on port 3000');
})
 */

const http = require('http');

const handleServer = function (req, res) {
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.write('Esto es un texto simple');
    res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function () {
    console.log('Server on port 3000');
})
 
