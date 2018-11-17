var express = require('express');

var router = express.Router();

router.get('/teszt', function (req, res) {
	res.render('pages/bejegyzesedit',{mod: "edit", bejegyzes: {
		_id: 1,
		username: "Test",
		tema: "Fajták",
		cim: "Test",
		tartalom: "Test",
		kep: ""
	}});
});
/*
router.get('/teszt', function (req, res) {
	res.render('pages/admin/users',{users: [
		{
		_id: 1,
		username: "Test1",
		password: "",
		email: "test1@test.hu",
		admin: true
		},
		{
		_id: 2,
		username: "Test2",
		password: "",
		email: "test2@test.hu",
		admin: false
		}
	]});
});

router.get('/teszt2', function (req, res) {
	res.render('pages/admin/user', {mod: "userEdit", user: {
		_id: 1,
		username: "Test1",
		password: "",
		email: "test1@test.hu",
		admin: true
	}});
});
*/
module.exports = router;