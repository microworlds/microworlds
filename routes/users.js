require('dotenv').config();
var express = require('express');
var router = express.Router();

// database stuff
var mongojs = require('mongojs');
var objectId = mongojs.ObjectId;
var db_url =  process.env.MONGODB_URI;
var db = mongojs(db_url, ['contacts', 'subscriber']);


/* GET users listing. */
router.post('/contact', function(req, res) {
  var data = req.body;

  db.contacts.insert(data, function(err, ok){
  	if (err) throw err;
  	res.json({"msg": "done"});
  });
});

router.post('/subscribe', function(req, res) {
  var data = req.body;

  db.subscriber.insert(data, function(err, ok){
  	if (err) throw err;
  	res.json({"msg": "done"});
  });
});

module.exports = router;
