var express = require('express');
var router = express.Router();
var Bejmodel = new require('../models/bejegyzesek');
var objectRepository = {
    Bejegyzesekmodel: Bejmodel
}

var TemaKeres = require('../middlewares/bejegyzesekLekeresTemaAlapjan');
var BejegyzesIDKeres = require('../middlewares/bejegyzesekLekeresIDAlapjan');
var MWbejegyzesHozzaadas = require('../middlewares/bejegyzesHozzaadas');

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

router.post('/bejegyzesHozzaadas',
    function (req, res) {
        MWbejegyzesHozzaadas(objectRepository, req, res, function () {
            //todo
        })
    }
)

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

router.get('/bejegyzesedit/:mod',function(req, res){
	res.render('pages/bejegyzesedit',{mod: req.params.mod });
});

router.get('/bejegyzesedit/:mod/:id',function(req, res){
	res.render('pages/bejegyzesedit',{mod: req.params.mod, bejegyzes: {} });
});

/*
var uploader = new require('../middlewares/fajtakUploadAll');

router.get('/fajtakUploadAllOneTimer', function () {
	uploader(objectRepository, function(){
		console.log('Sikeresen hozzaadva!');
	});
})


var uploader = new require('../middlewares/erdekessegUploadAll');

router.get('/erdekessegUploadAllOneTimer', function () {
	uploader(objectRepository, function(){
		console.log('Sikeresen hozzaadva!');
	});
})
*/

module.exports = router;