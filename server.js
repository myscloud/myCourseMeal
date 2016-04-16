// Server Side Script
// for Running HTTP Server
// and Serving Pages
// - @c3mx

// Express Web Server
var express = require('express');
var app = express();
var bodyParser = require('body-parser'); //always require body-parser after app()

// Mongodb Stuff
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;


// Connection Setup to MongoDB
// need to run mongod first
var url = 'mongodb://localhost:27017/test';
MongoClient.connect(url, function(err, dbConnection) {
    assert.equal(null, err);
    db = dbConnection;
    console.log("MongoDB: Connected correctly to server.");
    app.listen(3000, function() {
        console.log('Example app listening on port 3000!');
    });
});

// ExpressJS Setup
app.use('/static', express.static(__dirname + '/public'));
app.use(bodyParser.json({ type: '*/*' }));

// The Mose Highest Routers Rules Goes Here
app.get('/', function(req, res) {
    res.send('Hello World!');
});
