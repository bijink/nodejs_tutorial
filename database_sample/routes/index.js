var express = require('express');
var router = express.Router();
var { MongoClient } = require('mongodb');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/submit', async function (req, res, next) { 
  console.log(req.body); 
  
  const client = new MongoClient("mongodb://127.0.0.1:27017"); 
  
  await client.connect(); 
  
  console.log("Connected to the database"); 
  client.db("sampledb").collection("user").insertOne(req.body)
  
  res.send('data submitted');
});


module.exports = router;
