const express = require('express');
const {ExpressPeerServer} = require('peer');
const config = require('./local/config');

var app = express();

app.get('/', (req, res) => {
	res.send('Hello There');
});


const http = require('http');

const server = http.createServer(app);
const peerServer = ExpressPeerServer(server, {
  path: '/'
});

app.use(config.peer_server, peerServer);

server.listen(config.port, () => {
	console.log(`Listening on port: ${config.port}`);
	console.log(`Peer server running on ${config.host}:${config.port}${config.peer_server}`)
});