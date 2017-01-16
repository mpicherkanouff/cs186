/* GET home page */

// create controller export
// reads req, returns res 
// res.render takes as arguments the view template (no extension needed) 
//and JS data obj
module.exports.index = function(req, res){
    //console.log(req.method, req.url);
    res.render('index.jade', { title: 'Express' });
};

module.exports.testing = function(req, res){
    //console.log(req.method, req.url);
    res.render('testingBoot.jade', { title: 'Testing' });
};

