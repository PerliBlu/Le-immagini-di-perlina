var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8000;

// set the view engine to ejs

app.use(express.static(__dirname + '/public'));

/*app.set('view engine', 'ejs');

// set the home page route
app.get('/', function(req, res) {

	// ejs render automatically looks in the views folder
	res.render('index');
});*/

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});
