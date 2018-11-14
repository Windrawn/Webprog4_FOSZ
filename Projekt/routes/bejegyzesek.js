var express = require('express');
var router = express.Router();
var Bejmodel = new require('../models/bejegyzesek');
var objectRepository = {
    Bejegyzesekmodel: Bejmodel
}

var TemaKeres = require('../middlewares/bejegyzesekLekeresTemaAlapjan');
var BejegyzesIDKeres = require('../middlewares/bejegyzesekLekeresIDAlapjan');

router.get('/bejegyzes/:id',
	function (req, res) {
		BejegyzesIDKeres(objectRepository, req.params.id, function (result) {
			res.render('pages/bejegyzes', {bejegyzes: result});
		});
	}
);

router.get('/bejegyzesek', function (req, res) {
	res.render('pages/sajat/bejegyzesek');
});

var temp;

router.get('/fajtak',
	function (req, res, next) {
		TemaKeres(objectRepository, "Fajták", function (result) {
			res.render('pages/temak/fajtak', {bejegyzesek: result});
		});
	}
);

router.get('/betegsegek',
	function (req, res, next) {
		TemaKeres(objectRepository, "Betegségek", function (result) {
			res.render('pages/temak/betegsegek', {bejegyzesek: result});
		});
	}
);

router.get('/erdekessegek',
	function (req, res, next) {
		TemaKeres(objectRepository, "Érdekességek", function (result) {
			res.render('pages/temak/erdekessegek', {bejegyzesek: result});
		});
	}
);


module.exports = router;