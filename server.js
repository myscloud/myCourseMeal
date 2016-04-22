// Server Side Script
// for Running HTTP Server
// and Serving Pages
// - @c3mx

// Express Web Server
var express = require('express');
var app = express();
var bodyParser = require('body-parser'); //always require body-parser after app()
var path = require('path')
// Mongodb Stuff
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;

var React = require('react')
var Router = require('react-router')

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
//app.use('/static', express.static(__dirname + '/public'));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json({ type: '*/*' }));


app.get('*', function (req, res) {
  //res.render('index');
  res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.get('/', function (req, res) {
  //res.render('index');
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Database transaction

app.post('/api/allPartyInApp', function(req, res) {
  db.collection('party').find().toArray(function(err, doc) {
    res.json(doc);
  });
});

app.post('/api/allParty', function(req, res) {
  var friends = req.body.friends;
  db.collection('party').find({owner: {$all: friends}}).toArray(function(err, doc) {
    res.json(doc);
  });
});

app.post('/api/myParty', function(req, res) {
  var userId = req.body.userId;
  db.collection('party').find(
      {$or: [{owner: userId}, {hungers: {$elemMatch: {hungerId: userId} } }]}
    ).toArray(function(err, doc) {
      res.json(doc);
    });
});

app.post('/api/viewParty', function(req, res) {
  var partyId = req.body.partyId;
  db.collection('party').find({_id: partyId})
  .toArray(function(err, doc) {
    res.json(doc);
  });
});

app.post('/api/addParty', function(req, res) {
  var newParty = req.body;
  db.collection("party").insertOne(newParty, function(err, result) {
    res.json({success: true});
  })
});

app.post('/api/joinParty', function(req, res) {
  var partyId = req.body.partyId;
  var userId = req.body.userId;
  db.collection('party').update(
      {_id: partyId},
      {$addToSet: {hungers: userId}},
      function(err, result) {}
    );
});

app.post('/api/deleteParty', function(req, res) {
  var partyId = req.body.partyId;
  db.collection('party').deleteOne(
      {_id: partyId},
      function(err, result) {}
    );
});

app.post('/api/commentOnParty', function(req, res) {
  var partyId = req.body.partyId;
  var commenter = req.body.commenter;
  var content = req.body.commentContent;
  db.collection('party').update(
      {_id: partyId},
      {$addToSet: {comments: 
        {commenter: commenter, content: content}
      }},
      function(err, result) {
        var newId = result.insertedId;
        db.collection('party').update(
          {_id: partyId, "comments._id": newId},
          { $currentDate: {
            "comments.$.commentDate": true
          }}
          );
        }
    );
});

app.post('/api/kickBadGuy', function(req, res) {
  var partyId = req.body.partyId;
  var userId = req.body.userId;
  db.collection('party').update(
      {_id: partyId},
      {$pull: {hungers: userId }},
      function(err, result) {}
    );
});

app.post('/api/leaveParty', function(req, res) {
  var partyId = req.body.partyId;
  var userId = req.body.userId;
  db.collection('party').update(
      {_id: partyId},
      {$pull: {hungers: userId}},
      function(err, result) {}
    );
});
