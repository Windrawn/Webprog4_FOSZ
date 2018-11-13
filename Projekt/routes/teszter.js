var express = require('express');

var router = express.Router();

router.get('/teszt', function (req, res) {
	res.render('pages/bejegyzes',{bejegyzes: {
		username: '1',
		tema: '1',
		cim: '1',
		tartalom: '1',
		kep: '1'
	}});
});

module.exports = router;