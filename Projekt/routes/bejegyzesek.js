var express = require('express');
var router = express.Router();
var Bejmodel = new require('../models/bejegyzesek');

var objectRepository = {
    Bejegyzesekmodel: Bejmodel
}

router.get('/bejegyzes', function (req, res) {
	res.render('pages/bejegyzes');
});

router.get('/bejegyzesek', function (req, res) {
	res.render('pages/sajat/bejegyzesek');
});

module.exports = router;