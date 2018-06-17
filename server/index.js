const express=require('express');
const bodyparser=require('body-parser');
const cors=require('cors');
const app=express();
var db;
var MongoClient = require('mongodb').MongoClient
, assert = require('assert');
var url = 'mongodb://localhost:27017';
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
db=client.db("todo");
})
app.use(cors());
app.use(bodyparser.json())
app.get("/home",function(req,res)
{
    // db.collection('list').insertOne({"name":"task4","priority":"high","status":true}, function(err, r) {
    //     assert.equal(null, err);
    //     assert.equal(1, r.insertedCount);
    //     console.log(r.insertedCount);
    // })
    // db.collection('list').updateOne({"name":"task6"}, {$set: {"name":"task5"}}, function(err, r) {
    //     assert.equal(null, err);
    //     assert.equal(1, r.matchedCount);
    //     assert.equal(1, r.modifiedCount);
    //     console.log(r.matchedCount);
    //     console.log(r.modifiedCount);
    // })
    // db.collection('list').deleteOne({"name":"task2"}, function(err, r) {
    //     assert.equal(null, err);
    //     assert.equal(1, r.deletedCount);
    // })  
    db.collection('list').find().toArray(function(err,result){
        res.json(result)
    })
  
    
})
app.listen(8080,function()
{
    console.log("server Start")
})
