var express = require('express');
var router = express.Router();

const User = require('./user');


// Supplier 
router.use('/user', User);

module.exports = router;
