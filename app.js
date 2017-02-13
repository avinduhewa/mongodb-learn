//mongodb dependencies
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = "mongodb://readOnly:password@ds151279.mlab.com:51279/mat-learning";

function dbConnect(cb) {
    MongoClient.connect(url, function(err, db) {
        if (err) {
            return cb(err);
        } else {
            return cb(db);
        }
    });
}
//////////////////////

var express = require('express')
var app = express()

//////////////////////

app.get('/', function (req, res) {
  dbConnect(db => {
    let collectionName = db.collection('first_collection');
    collectionName.findOne({}).then(data => {
      res.send(data);
    })
  })
  
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})