var express = require('express');

var router = express.Router();

router.get('/teszt', function (req, res) {
	res.render('pages/sajat/adatok',{user: {
		_id: 1,
		username: "Test1",
		password: "",
		email: "test1@test.hu",
		admin: true
		}});
});

module.exports = router;