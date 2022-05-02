/*
const http = require('http');
const colors = require('colors');

const handleServer = function (req, res) {
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.write('Esto es un texto simple');
    res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function () {
    console.log('Server on port 3000'.green);
})
*/

const express = require('express');
const colors = require('colors');
const server = express();

server.get('/', function (req, res) {
    res.send('<h1>Hola Mundo express nodejs</h1>');
    res.end();
});

server.listen(3000, function () {
    console.log('Server on port 3000'.red);
});

