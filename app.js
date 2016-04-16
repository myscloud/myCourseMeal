var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;

var url = 'mongodb://localhost:27017/test';
MongoClient.connect(url, function(err, dbConnection) {
    assert.equal(null, err);
    db = dbConnection;
    console.log("MongoDB: Connected correctly to server.");
    app.listen(3000, function() {
        console.log('Example app listening on port 3000!');
    });
});

app.use('/static', express.static(__dirname + '/public'));
app.use(bodyParser.json({ type: '*/*' }));

app.get('/', function(req, res) {
    res.send('Hello World!');
});
