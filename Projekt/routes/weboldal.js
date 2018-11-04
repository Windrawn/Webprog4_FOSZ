var express = require('express');

var router = express.Router();

router.get('/', function (req, res) {
	res.render('pages/login');
});

router.get('/index', function (req, res) {
	res.render('pages/index');
});

router.get('/fajtak', function (req, res) {
	res.render('pages/fajtak');
});

router.get('/betegsegek', function (req, res) {
	res.render('pages/betegsegek');
});

router.get('/erdekessegek', function (req, res) {
	res.render('pages/erdekessegek');
});

router.get('/bejegyzes', function (req, res) {
	res.render('pages/bejegyzes');
});


module.exports = router;