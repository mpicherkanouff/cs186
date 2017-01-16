var path = require('path');

//testexpress app
console.log('Hello world');

// require module
var express = require('express');

// for routes 
var routes = require('./app_server/routes/index');

// initialize express 
var app = express();

// express looks for view templates under views folder
app.set('views', path.join(__dirname, 'app_server','views'));
app.set('view engine', 'jade');

// Set static directory before defining routes
app.use(express.static(path.join(__dirname, 'public')));
// add routing
app.use('/', routes)


// Define the port to run on
app.set('port', process.env.PORT);

// Add middleware to console log every request
app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next(); 
});

// Listen for requests
// we could do 
// app.listen(app.get('port'))  
// but app/listen is an a syn function 
// instead

// app.listen needs callback function to run asynchronously (non blocking) 
// the callback runs after app.listen ends running

var server = app.listen(app.get('port'), function() {
       console.log('I am listening on port ' + server.address().port);
});

console.log("I don't need to wait!");


