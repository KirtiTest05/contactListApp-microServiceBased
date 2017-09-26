var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

var config = {
	apiUrl: process.env.CONTACTLISTAPI_PORT_3001_TCP_ADDR,
	apiPort: process.env.CONTACTLISTAPI_PORT_3001_TCP_PORT
}

//port
var port = 3000;

app.get('/env', function(req, res) {
	res.send(config);
});

app.listen(port, function() {
	console.log('app started on port: ', port);
});

