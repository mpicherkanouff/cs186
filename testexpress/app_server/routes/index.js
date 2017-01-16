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

//testing route 
router.get('/testing', ctrlMain.testing);

module.exports = router;
