var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var api = require('./server/routes/api');
var port = 3500;
var app = express();

//Folder where all angular code is placed

app.use(express.static(path.join(__dirname, 'dist')));

// Mongoose - Mongodb object mapping
// Mongoose translate data in the database into js objects to use in application.
// 
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


app.use('/api', api);


/*app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
}); */
console.log('__dirname', __dirname);
/* app.use(express.static(__dirname + 'dist/index.html')) */

app.listen(port, (error) => {
  console.log('Error while connection', error);
}, success => {
  console.log('Running on port:', port);
});
