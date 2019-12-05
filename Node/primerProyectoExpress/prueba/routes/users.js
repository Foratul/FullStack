var express = require('express');
var router = express.Router();

/* GET users listing. */


// users
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
  console.log("entra por users")
});


// "/users + new "
router.get('/new', function (req, res, next) {
  res.send('Creo un nuevo usuario');
});

// "/users + edit "
router.get('/edit', function (req, res, next) {
  res.send('Creo un nuevo usuario');
});


module.exports = router;
