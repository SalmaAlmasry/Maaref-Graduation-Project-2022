// Dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Defaults for Express to use
app.use(express.static(__dirname)); //for loading static assets
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// GET request from index
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/form.html');
});

// POST request from index
// Stores the data submitted via the form in an object, responds to the user with that object, and logs the object to the console
app.post('/', function (req, res) {
	var thisPostsFormData = req.body; 
	// var currentPostData = {
	// 	indicator: req.body.indicator,
	// 	country: req.body.country,
	// 	value: req.body.value,
	// 	date: req.body.date
	// };
  res.send('<a href="/">back</a><p><pre>' + JSON.stringify(thisPostsFormData) + '</pre></p>');
  console.log(thisPostsFormData);
});

// Print the host and port to the console whenever there is a server request 
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});