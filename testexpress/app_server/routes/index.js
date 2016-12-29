var express = require('express');
var router = express.Router();

var ctrlMain = require('../controllers/main');

/* GET home page. */
// get request with URL / 
//router
//    .route('/')
//    .get(ctrlMain.index);

// or     
router.get('/', ctrlMain.index);

module.exports = router;
