var express = require('express');
var router = express.Router();
var Phrase = require('../models/phrase');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'RSTLNE!' });
});

//I should probably make a phrases controller but for now I'm just using the index controller to fetch my phrases on page load
router.get('/phrases', function(req, res, next) {
	Phrase.find('phrase_arr', function(err, result){
		if (err) throw err;
		if(!result) {
			res.send('404 Error! No phrases found!');
		} else {
			res.json('result');
		}
	});//closes query				  
});

router.get('/exit', function(req,res){
	res.render('exit');
});

module.exports = router;








