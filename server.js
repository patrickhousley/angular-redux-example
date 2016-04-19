var express = require('express');
var path = require('path');

var port = process.env.PORT || 3000;
var app = express();
var env = process.env.NODE_ENV || 'development';

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'app.html'));
});

const server = app.listen(port);
