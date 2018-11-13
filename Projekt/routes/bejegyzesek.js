var express = require('express');
var router = express.Router();
var Bejmodel = new require('../models/bejegyzesek');

var TemaKeres = require('../middlewares/bejegyzesekLekeresTemaAlapjan');
var objectRepository = {
    Bejegyzesekmodel: Bejmodel
}

router.get('/bejegyzes', function (req, res) {
	res.render('pages/bejegyzes');
});

router.get('/bejegyzesek', function (req, res) {
	res.render('pages/sajat/bejegyzesek');
});

var temp;

router.get('/fajtak',
	function (req, res, next) {
		TemaKeres(objectRepository, "1", function (result) {
			console.log(result);
			res.render('pages/temak/fajtak', {bejegyzesek: result});
		});
	}
);

router.get('/betegsegek', function (req, res) {
	var bejegyzesek = TemaKeres(objectRepository, "Betegségek")
	res.render('pages/temak/betegsegek',{
		bejegyzesek: bejegyzesek
	});
});

router.get('/erdekessegek', function (req, res) {
	var bejegyzesek = TemaKeres(objectRepository, "Érdekességek")
	res.render('pages/temak/erdekessegek',{
		bejegyzesek: bejegyzesek
	});
});


module.exports = router;