var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

var routes = require('./routes/routes.js');

var mongoDbUrl = process.env.CONTACTLISTDB_PORT_27017_TCP_ADDR;
var mongoDbPort = process.env.CONTACTLISTDB_PORT_27017_TCP_PORT;

//my mongo is running in a docker so im using its ip address you can 
// change this to your own.
mongoose.connect('mongodb://'+ mongoDbUrl + ':' + mongoDbPort + '/contactlist');
mongoose.connection.on('connected', function() {
	console.log('connected');
});
mongoose.connection.on('err', function(err){
	if (err)
		console.log('err in connecting: ', err);
})

var app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', routes);

//port
var port = 3001;

app.get('/', function(req, res) {
	res.send('Hello World');
});

app.listen(port, function() {
	console.log('app started on port: ', port);
});

