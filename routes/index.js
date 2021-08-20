var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/dashboard', function (req, res, next) {
  res.render('dashboard', { title: 'Express' });
});


module.exports = router;

