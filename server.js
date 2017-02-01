var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// routes
var index = require('./routes/index');
var tasks = require('./routes/tasks');

// set the port
var port = process.env.PORT;

var app = express();

// view Engine 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


// Set static Folder
app.use(express.static(path.join(__dirname,'client')));

//Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/', index);
app.use('/api', tasks);

app.listen(port, function(){
    console.log('Server started on port' + port);
});
