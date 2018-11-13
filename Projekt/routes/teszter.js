var express = require('express');

var router = express.Router();

router.get('/teszt', function (req, res) {
	res.render('pages/temak/betegsegek',{bejegyzesek: []});
});

module.exports = router;