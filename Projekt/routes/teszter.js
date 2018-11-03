var express = require('express');

var router = express.Router();

router.get('/teszt', function (req, res) {
	res.render('pages/home');
});

module.exports = router;