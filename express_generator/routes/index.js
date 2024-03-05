var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const values = ['one', 'two', 'three', 'four']
  const person = { name: 'Bijin K', comments: { comment: 'This is a sample comment', date: 'Mar 05, 2024' } }
  const user = {name: 'Tom', admin: false}

  res.render('index', {values, person, user});
});

module.exports = router;
