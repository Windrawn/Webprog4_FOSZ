var express = require('express');

var router = express.Router();

router.get('/', function (req, res) {
	res.render('pages/home');
});

router.get('/login', function (req, res) {
	res.render('pages/login');
});

router.get('/tema', function (req, res) {
	res.render('pages/temak/tema');
});

router.get('/fajtak', function (req, res) {
	res.render('pages/temak/fajtak');
});

router.get('/betegsegek', function (req, res) {
	res.render('pages/temak/betegsegek');
});

router.get('/erdekessegek', function (req, res) {
	res.render('pages/temak/erdekessegek');
});

router.get('/bejegyzes', function (req, res) {
	res.render('pages/bejegyzes');
});


module.exports = router;